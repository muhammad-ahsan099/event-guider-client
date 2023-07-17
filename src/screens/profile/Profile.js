import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Screen } from '../../components/Screen';
import { Text } from '../../components/Text';
import { styles } from "./ProfileStyle";
import { theme } from "../../theming";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import Appbar from '../../components/Appbar';
import { useDispatch, useSelector } from 'react-redux';
import { Touchable } from '../../components/Touchable';
import { doLogout } from '../../redux/actions/AuthAction';
import { useState } from 'react';

export default function Profile() {
  const navigation = useNavigation()
  const isUserLoggedIn = useSelector(state => state.AuthReducer.isUserLoggedIn)
  const userProfile = useSelector(state => state.AuthReducer.userProfile)
  const dispatch = useDispatch()
  const [lodaing, setLoading] = useState(false)

  const logoutHandler = ()=> {
    dispatch(doLogout(setLoading))
    setTimeout(()=> {
      navigation.navigate('Home')
    }, 1000)
  }

  console.log('userProfile: ', userProfile);
  return (
    <>
      <Screen
        statusBarStyle="light"
        scroll
        safeArea
        style={{ backgroundColor: 'white' }}
        contentContainerStyle={styles.screen}
      >
        <Appbar />
        <View style={styles.container}>
          <Text size={28} color='black' weight={'semiBold'} style={styles.profileText}>
            {"Profile"}
          </Text>

          <View style={styles.loginIconDiv}>
            {
              userProfile ?
                <View>
                  <Text size={18} color={'primary'}>
                    {userProfile?.name}
                  </Text>
                  <Text size={18} color={'primary'}>
                    {userProfile?.email}
                  </Text>
                </View>
                :
                <View>
                  <Text size={18} color='black' weight={"medium"}>
                    {"Log in"}
                  </Text>
                  <Text size={18} color={'primary'}>
                    {"Log in to your account"}
                  </Text>
                </View>
            }

            <View style={styles.iconDiv}>
              <Icon name="user" size={30} color={theme.colors.primary} />
            </View>
          </View>


          <View style={styles.mainCardDiv}>
            <View style={styles.cardDiv}>
              <Icon name="setting" size={28} color={theme.colors.primary} />
              <Text color='black' size={16} weight={'medium'} style={styles.cardText}>
                {'Profile Settings'}
              </Text>
            </View>
            <View style={styles.cardDiv}>
              <Icons name="search" size={28} color={theme.colors.primary} />
              <Text color='black' size={16} weight={'medium'} style={styles.cardText}>
                {'My Saved Searches'}
              </Text>
            </View>
            <Touchable style={styles.cardDiv} onPress={()=> navigation.navigate("Favorites") }>
              <Icons name="ios-heart-outline" size={28} color={theme.colors.primary} />
              <Text color='black' size={16} weight={'medium'} style={styles.cardText}>
                {'My Favourites'}
              </Text>
            </Touchable>
          </View>

          <View style={styles.loginManuDiv}>
            <View style={styles.manuDiv}>
              <Icon name="contacts" size={25} color={theme.colors.primary} style={styles.icons} />
              <Text size={16} color={'black'} weight={"medium"} style={styles.manuText}>
                {"Contact Us"}
              </Text>
            </View>
            <View>
              <Icons name="chevron-forward" size={22} color={theme.colors.primary} style={styles.graterIcon} />
            </View>
          </View>

          <View style={styles.loginManuDiv}>
            <View style={styles.manuDiv}>
              <Feather name="thumbs-up" size={25} color={theme.colors.primary} style={styles.icons} />
              <Text size={16} color={'black'} weight={"medium"} style={styles.manuText}>
                {"Feedback"}
              </Text>
            </View>
            <View>
              <Icons name="chevron-forward" size={22} color={theme.colors.primary} style={styles.graterIcon} />
            </View>
          </View>
          <View style={styles.loginManuDiv}>
            <View style={styles.manuDiv}>
              <SimpleLineIcons name="envelope-letter" size={25} color={theme.colors.primary} style={styles.icons} />
              <Text size={16} color={'black'} weight={"medium"} style={styles.manuText}>
                {"Invite Freinds to Finder"}
              </Text>
            </View>
            <View>
              <Icons name="chevron-forward" size={22} color={theme.colors.primary} style={styles.graterIcon} />
            </View>
          </View>
          <View style={styles.loginManuDiv}>
            <View style={styles.manuDiv}>
              <MaterialCommunityIcons name="file-account-outline" size={25} color={theme.colors.primary} style={styles.icons} />
              <Text size={16} color={'black'} weight={"medium"} style={styles.manuText}>
                {"Terms and Privacy Policy"}
              </Text>
            </View>
            <View>
              <Icons name="chevron-forward" size={22} color={theme.colors.primary} style={styles.graterIcon} />
            </View>
          </View>
          {
            !isUserLoggedIn ?
              <Button
                onPress={() => navigation.navigate('Login')}
                // loading={loginMutation.isLoading}
                // disabled={!isValid || !dirty}
                containerStyle={styles.loginBtn}
                textStyle={styles.loginTxt}
              >
                {'LogIn'}
              </Button>
              :

              <TouchableOpacity
                style={styles.logoutBtn}
                onPress={()=> logoutHandler()}
              >

                <MaterialIcons name='logout' color={theme.colors.primary} size={22} />
                <Text style={styles.logoutTxt}>{"Logout"}</Text>
              </TouchableOpacity>
          }
        </View>
      </Screen>
    </>
  )
}