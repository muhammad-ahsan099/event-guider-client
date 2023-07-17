import React from 'react';
import { StyleSheet, View } from 'react-native';
import Add from '../assets/svg/Add';
import Menu from '../assets/svg/Menu';
import Search from '../assets/svg/Search';
import { theme } from '../theming';
import { Text } from './Text';
import { TextInput } from './TextInput';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { Touchable } from './Touchable';

const Header = (props) => {
  const { headerHeight } = props;
  const navigation = useNavigation()

  return (
    <>
      <Touchable
        onPress={() => navigation.openDrawer()}
        style={[
          styles.subHeader,
          {
            height: headerHeight / 2,
          },
        ]}>
        <Ionicons name='menu-outline' size={30} color={theme.colors.white} />
        {/* <Add /> */}
      </Touchable>
      <View
        style={[
          styles.subHeader,
          {
            alignItems: 'center',
            height: headerHeight / 2,
            borderBottomEndRadius: 30,
            borderBottomStartRadius: 30,
          },
        ]}>


        <Touchable style={styles.textInput} onPress={()=> navigation.navigate("SearchScreen")}>
          <Search />
          <View style={styles.textInputText} />
          <View style={styles.rightView}>
            <Ionicons name='chevron-forward' size={16} color={theme.colors.white} style={styles.icon} />
          </View>
        </Touchable>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  conversation: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  searchText: {
    color: '#8B8B8B',
    fontSize: 17,
    lineHeight: 22,
    marginLeft: 8,
  },
  rightView: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginLeft: 10
  },
});
export default Header;
