import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import StackContainer from '../stack/Stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import DrawerContent from '../../components/DrawerContent';
import { theme } from '../../theming';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'front' : 'front',
        headerShown: true,
        drawerStyle: {
          backgroundColor: theme.colors.white,
          // width: '100%',
        },
      }}>
      <Drawer.Screen
        name="StackContainer"
        component={StackContainer}
        // options={({route}) => {
        //   const routeName = getFocusedRouteNameFromRoute(route);
        //   // if (routeName === 'Setup' || routeName === 'UserDetail' || routeName === 'Subscription' || routeName === 'SubscriptionDetail') {
        //     return {swipeEnabled: false};
        //   // }
        // }}
      />
    </Drawer.Navigator>
  );
}
