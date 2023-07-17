import { Linking, View } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import { Text } from './Text';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theming';

const label = {
    marginLeft: -10
}

export default function DrawerContent(props) {
    const navigation = useNavigation()
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label={({ focused, color }) => <Text color={theme.colors.grey} fonts={'regular'} size={16} style={label}>{'Home'}</Text>}
                icon={({ focused, color, size }) => <Icon color={theme.colors.grey} size={24} name={'home'} />}
            // onPress={() => navigation.navigate('Home')}
            />
            <DrawerItem
                label={({ focused, color }) => <Text color={theme.colors.grey} fonts={'regular'} size={16} style={label}>{'Favorites'}</Text>}
                icon={({ focused, color, size }) => <AntDesign color={theme.colors.grey} size={24} name={'hearto'} />}
            // onPress={() => navigation.navigate('Programs')}
            />
            <DrawerItem
                label={({ focused, color }) => <Text color={theme.colors.grey} fonts={'regular'} size={16} style={label}>{'Profile'}</Text>}
                icon={({ focused, color, size }) => <AntDesign color={theme.colors.grey} size={24} name={'user'} />}
            // onPress={() => navigation.navigate('Check_in')}
            />
            <DrawerItem
                label={({ focused, color }) => <Text color={theme.colors.grey} fonts={'regular'} size={16} style={label}>{'Venue Fider'}</Text>}
                icon={({ focused, color, size }) => <MaterialCommunityIcons color={theme.colors.grey} size={24} name={'file-find-outline'} />}
                onPress={() => navigation.navigate('Fitness')}
            />
            <DrawerItem
                label={({ focused, color }) => <Text color={theme.colors.grey} fonts={'regular'} size={16} style={label}>{'About Us'}</Text>}
                icon={({ focused, color, size }) => <MaterialIcon color={theme.colors.grey} size={24} name={'help-outline'} />}
            // onPress={() => Linking.openURL('https://mywebsite.com/help')}
            />
            <DrawerItem
                label={({ focused, color }) => <Text color={theme.colors.grey} fonts={'regular'} size={16} style={label}>{'Contact Us'}</Text>}
                icon={({ focused, color, size }) => <Ionicons color={theme.colors.grey} size={24} name={'call-outline'} />}
            // onPress={() => Linking.openURL('https://mywebsite.com/help')}
            />
            <DrawerItem
                label={({ focused, color }) => <Text color={theme.colors.grey} fonts={'regular'} size={16} style={label}>{'Logout'}</Text>}
                icon={({ focused, color, size }) => <MaterialIcon color={theme.colors.grey} size={24} name={'logout'} />}
            // onPress={() => Linking.openURL('https://mywebsite.com/help')}
            />
        </DrawerContentScrollView>
    )
}

