import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './authStack/AuthStack';
// import StackContainer from './stack/Stack';
import Loader from '../screens/loader/Loader';
import StackContainer from './stack/Stack';
import DrawerNavigation from './drawerNavigation/DrawerNavigation';
import { Platform, SafeAreaView, StatusBar, View } from 'react-native';
import { theme } from '../theming';
import { getLoggedInUser } from '../redux/actions/AuthAction';
import { useDispatch } from 'react-redux';
const AppStackNavigator = createNativeStackNavigator();


export default function Navigation() {
    // const dispatch = useDispatch()

    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLoggedInUser())
    }, [])


    const options = {
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false,
    };

    return (
        <>
            <SafeAreaView style={{backgroundColor: theme.colors.primary}}>
                <StatusBar backgroundColor={theme.colors.primary} barStyle="light-content" />
            </SafeAreaView>
            {/* {Platform.OS === 'ios' && <View style={{ width: '100%', height: 47, backgroundColor: theme.colors.primary }} />} */}
            {/* <View style={{width: '100%', height: 47, backgroundColor: theme.colors.primary}} /> */}
            <AppStackNavigator.Navigator screenOptions={{ headerShown: false }}>

                {loader ?
                    <AppStackNavigator.Screen
                        name="Loader"
                        component={Loader}
                        options={options}
                    />
                    :
                    // true ? (
                    <AppStackNavigator.Screen
                        name="DrawerNavigation"
                        component={DrawerNavigation}
                        options={options}
                    />
                    // ) : (
                    //     <AppStackNavigator.Screen
                    //         name="AuthStack"
                    //         component={AuthStack}
                    //         options={options}
                    //     />
                    // )
                }


            </AppStackNavigator.Navigator>
        </>
    )
}