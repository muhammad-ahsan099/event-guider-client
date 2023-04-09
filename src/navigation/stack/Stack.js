import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const AppStack = createNativeStackNavigator();
import BottomTabs from '../bottomTabs/BottomTabs';


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
    <AppStack.Navigator screenOptions={{headerShown: false}} initialRouteName={'BottomTabs'}>
       
       <AppStack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShown: false,
        }}
      />

     
    </AppStack.Navigator>
  );
}
export default StackContainer;
