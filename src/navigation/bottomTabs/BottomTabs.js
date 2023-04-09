import React from 'react';
import { View, StatusBar, Platform, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from '../../components/Text';
import { theme } from '../../theming';

const Screen1 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <Text>Screen</Text>
        </View>
    )
}
const Screen2 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Screen 2</Text>
        </View>
    )
}
const Screen3 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Screen 3</Text>
        </View>
    )
}
const Screen4 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Screen 4</Text>
        </View>
    )
}
const Screen5 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Screen 5</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <View style={styles.container}>
            {/* <StatusBar animated={true} backgroundColor="#5856D6" /> */}
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                        display: 'flex',
                        position: 'absolute',
                        bottom: 12,
                        left: 25,
                        right: 25,
                        elevation: 5,
                        backgroundColor: '#efefef',
                        borderRadius: 30,
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center'
                    },
                    tabBarShowLabel: false,
                    headerShown: false,
                })}>
                <Tab.Screen
                    name="Dashboard"
                    component={Screen1}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    top: Platform.OS === 'ios' ? 10 : 0,
                                }}>
                                <Icon
                                    name="message1"
                                    size={28}
                                    color={focused ? theme.colors.primary : theme.colors.black}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="History"
                    component={Screen2}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    top: Platform.OS === 'ios' ? 10 : 0,
                                }}>
                                <Icon
                                    name="inbox"
                                    size={28}
                                    color={focused ? theme.colors.primary : theme.colors.black}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Create"
                    component={Screen3}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={[styles.shadow]}>
                                <View
                                    style={{
                                        width: Platform.OS === 'ios' ? 50 : 50,
                                        height: Platform.OS === 'ios' ? 50 : 50,
                                        borderRadius: Platform.OS === 'ios' ? 25 : 30,
                                        backgroundColor: focused ? theme.colors.white : theme.colors.primary,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Ionicons
                                        name="search"
                                        size={Platform.OS === 'ios' ? 32 : 32}
                                        color={focused ? theme.colors.primary : theme.colors.white}
                                    />
                                </View>
                            </View>
                        ),
                        tabBarIconStyle: {},
                    }}
                />
                <Tab.Screen
                    name="Statistics"
                    component={Screen4}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    top: Platform.OS === 'ios' ? 10 : 0,
                                }}>
                                <Icon
                                    name="setting"
                                    size={28}
                                    color={focused ? theme.colors.primary : theme.colors.black}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="About"
                    component={Screen5}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    top: Platform.OS === 'ios' ? 10 : 0,
                                }}>
                                <Icon
                                    name="infocirlceo"
                                    size={28}
                                    color={focused ? theme.colors.primary : theme.colors.black}
                                />
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 70,
        backgroundColor: '#000', // green
    },
    shadow: {
        justifyContent: 'center',
        alignItems: 'center',
        top: Platform.OS === 'ios' ? -10 : -26,
        width: Platform.OS === 'ios' ? 50 : 50,
        height: Platform.OS === 'ios' ? 50 : 50,
        borderRadius: 50,
        backgroundColor:'#fff',
        shadowColor: theme.colors.primary,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        
        elevation: 15,     
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});