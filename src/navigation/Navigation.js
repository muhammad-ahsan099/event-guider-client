import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './authStack/AuthStack';
// import StackContainer from './stack/Stack';
import Loader from '../screens/loader/Loader';
import StackContainer from './stack/Stack';
const AppStackNavigator = createNativeStackNavigator();


export default function Navigation() {
    // const dispatch = useDispatch()

    const [loader, setLoader] = useState(false)

    const options = {
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false,
    };

    return (
        <AppStackNavigator.Navigator screenOptions={{ headerShown: false }}>

            {loader ?
                <AppStackNavigator.Screen
                    name="Loader"
                    component={Loader}
                    options={options}
                />
                :
                true ? (
                    <AppStackNavigator.Screen
                        name="StackContainer"
                        component={StackContainer}
                        options={options}
                    />
                ) : (
                    <AppStackNavigator.Screen
                        name="AuthStack"
                        component={AuthStack}
                        options={options}
                    />
                )
            }


        </AppStackNavigator.Navigator>
    )
}