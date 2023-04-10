import { View } from 'react-native'
import React from 'react'
import { Screen } from '../../components/Screen';
import { Text } from '../../components/Text';
import { styles } from "./ProfileStyle";
import { theme } from "../../theming";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from '../../components/Button';

export default function Profile() {
  return (
    <>
      <Screen
        statusBarStyle="light"
        scroll
        safeArea
        style={{ backgroundColor: 'white' }}
        contentContainerStyle={styles.screen}
      >
        <Text size={28} color='black' weight={'bold'} style={styles.profileText}>
          {"Profile"}
        </Text>

        <View style={styles.loginIconDiv}>
          <View>
            <Text size={18} color='black' weight={"bold"}>
              {"Log in"}
            </Text>
            <Text size={18} color={'primary'}>
              {"Log in to your account"}
            </Text>
          </View>
          <View style={styles.iconDiv}>
            <Icon name="user" size={30} color={theme.colors.primary} />
          </View>
        </View>

        <View style={styles.loginManuDiv}>
          <View style={styles.manuDiv}>
            <Icon name="contacts" size={25} color={theme.colors.primary} style={styles.icons} />
            <Text size={16} color={'black'} weight={"bold"} style={styles.manuText}>
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
            <Text size={16} color={'black'} weight={"bold"} style={styles.manuText}>
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
            <Text size={16} color={'black'} weight={"bold"} style={styles.manuText}>
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
            <Text size={16} color={'black'} weight={"bold"} style={styles.manuText}>
              {"Terms and Privacy Policy"}
            </Text>
          </View>
          <View>
            <Icons name="chevron-forward" size={22} color={theme.colors.primary} style={styles.graterIcon} />
          </View>
        </View>
        <Button
          onPress={() => navigation.navigate('Signup')}
          // loading={loginMutation.isLoading}
          // disabled={!isValid || !dirty}
          containerStyle={styles.loginBtn}
          textStyle={styles.loginTxt}
        >
          {'LogIn'}
        </Button>
      </Screen>
    </>
  )
}