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
import { useNavigation } from '@react-navigation/native';

const label = {
    marginLeft: -10
}

export default function DrawerContent(props) {
    const navigation = useNavigation()
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label={({ focused, color }) => <Text color='#000' fonts={'regular'} size={16} style={label}>{'Home'}</Text>}
                icon={({ focused, color, size }) => <Icon color={'#000'} size={24} name={'home'} />}
                // onPress={() => navigation.navigate('Home')}
            />
            <DrawerItem
                label={({ focused, color }) => <Text color='#000' fonts={'regular'} size={16} style={label}>{'Programs'}</Text>}
                icon={({ focused, color, size }) => <AntDesign color={'#000'} size={24} name={'book'} />}
                // onPress={() => navigation.navigate('Programs')}
            />
            <DrawerItem
                label={({ focused, color }) => <Text color='#000' fonts={'regular'} size={16} style={label}>{'Check-in'}</Text>}
                icon={({ focused, color, size }) => <Icon color={'#000'} size={24} name={'clock'} />}
                // onPress={() => navigation.navigate('Check_in')}
            />
            <DrawerItem
                label={({ focused, color }) => <Text color='#000' fonts={'regular'} size={16} style={label}>{'Fitness'}</Text>}
                icon={({ focused, color, size }) => <MaterialIcon color={'#000'} size={24} name={'fitness-center'} />}
                onPress={() => navigation.navigate('Fitness')}
            />
            <DrawerItem
                label={({ focused, color }) => <Text color='#000' fonts={'regular'} size={16} style={label}>{'Help'}</Text>}
                icon={({ focused, color, size }) => <MaterialIcon color={'#000'} size={24} name={'help-outline'} />}
                // onPress={() => Linking.openURL('https://mywebsite.com/help')}
            />
        </DrawerContentScrollView>
    )
}

