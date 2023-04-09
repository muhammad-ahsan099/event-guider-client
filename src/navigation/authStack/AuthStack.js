import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../../screens/auth/login/LoginScreen';
import Signup from '../../screens/auth/signUp/SignUpScreen';
import ForgotPasswordScreen from '../../screens/auth/forgotPasswordScreen/ForgotPasswordScreen';
import ForgotPasswordSuccessScreen from '../../screens/auth/forgotPasswordSuccessScreen/ForgotPasswordSuccessScreen'
;
const AppStack = createNativeStackNavigator();

// StackContainer
function AuthStack() {
    const options = {
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false,
    };

    return (
        <AppStack.Navigator initialRouteName={'Login'}>
            <AppStack.Screen
                name="Login"
                component={LogIn}
                options={options}
            />
            <AppStack.Screen
                name="Signup"
                component={Signup}
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
export default AuthStack;
