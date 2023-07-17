import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const AppStack = createNativeStackNavigator();
import BottomTabs from '../bottomTabs/BottomTabs';
import LoginScreen from '../../screens/auth/login/LoginScreen';
import SignUpScreen from '../../screens/auth/signUp/SignUpScreen';
import ForgotPasswordScreen from '../../screens/auth/forgotPasswordScreen/ForgotPasswordScreen';
import ForgotPasswordSuccessScreen from '../../screens/auth/forgotPasswordSuccessScreen/ForgotPasswordSuccessScreen';
import DetailPage from '../../screens/detailPage/DetailPage';
import VirtualTour from '../../screens/detailPage/components/virtualTour/VirtualTour';
import Maps from '../../screens/detailPage/components/maps/Maps';
import Search from '../../screens/search/Search';


// StackContainer
function StackContainer() {

  // const route = 
  const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerShown: false,
    headerLeft: null,
    gestureEnabled: false,
  };

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'BottomTabs'}>

      <AppStack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="DetailPage"
        component={DetailPage}
        options={options}
      />
      <AppStack.Screen
        name="SearchScreen"
        component={Search}
        options={options}
      />
      <AppStack.Screen
        name="VirtualTour"
        component={VirtualTour}
        options={options}
      />
      <AppStack.Screen
        name="Maps"
        component={Maps}
        options={options}
      />

      <AppStack.Screen
        name="Login"
        component={LoginScreen}
        options={options}
      />
      <AppStack.Screen
        name="Signup"
        component={SignUpScreen}
        options={options}
      />
      <AppStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={options}
      />
      <AppStack.Screen
        name="ForgotPasswordSuccessScreen"
        component={ForgotPasswordSuccessScreen}
        options={options}
      />


    </AppStack.Navigator>
  );
}
export default StackContainer;
