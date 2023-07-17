import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from './Text'
import { theme } from '../theming'
import { Touchable } from './Touchable'
import DrawerIcon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from './TextInput'

export default function Appbar({ backIcon, title }) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {
        !backIcon ?
          <Touchable onPress={() => navigation.openDrawer()} style={styles.menuBtn}>
            <DrawerIcon name={'menu'} color={theme.colors.white} size={32} />
          </Touchable>
          :
          <View style={{flexDirection:  'row', alignItems: 'center'}}>
          <Touchable onPress={() => navigation.goBack()} style={styles.menuBtn}>
            <DrawerIcon name='arrow-left' color={theme.colors.white} size={26} />
          </Touchable>
          <Text color='white' size={18} weight={'medium'}>{title ? title : "Locations"}</Text>
          </View>
      }

      {/* <TextInput 
        placeholder={'Search from venues'}
        placeholderColor={theme.colors.placeholderColor}
        containerStyle={styles.textInput}
        style={[
            styles.textInputText,
          ]}
      /> */}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: theme.colors.primary,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 14,
    justifyContent: 'space-between'
  },
  menuBtn: {
    marginRight: 10
  },
  textInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.colors.white,
    backgroundColor: theme.colors.white,
  },
  textInputText: {
    fontSize: 16,
    fontWeight: '400',
  },
})