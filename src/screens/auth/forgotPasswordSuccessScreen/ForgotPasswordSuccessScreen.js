import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { Image, View } from 'react-native';
import { Button } from '../../../components/Button';
import { Screen } from '../../../components/Screen';
import { Text } from '../../../components/Text';
import { styles } from './ForgotPasswordSuccessScreenStyle';
import { useHeaderHeight } from '../../../customHooks/useHeaderHeight';
const ForgotPasswordSuccessScreen = ()=> {
  const navigation = useNavigation();
  const { modalHeaderInset } = useHeaderHeight()
  const handleNavigation = useCallback(() => navigation.navigate('Login'), [navigation]);
  return (
    <Screen
      safeArea
      statusBarStyle="light"
      style={styles.insetContainer}
    >
      <View style={[styles.container, { paddingTop: modalHeaderInset }]}>
        <View style={styles.headerContainer}>
          <View>
            <Text weight="medium" size={20} style={styles.emailText}>
              {'Check your email'}
            </Text>
            <Text size={14} style={styles.headerDescription}>
              {'An email was sent to' + 'taseries260@gmail.com'}
            </Text>
          </View>
          <Image source={require('../../../assets/images/resetPass.png')} style={styles.img} />
        </View>
        <Button
          onPress={handleNavigation}
          // onPress={() => navigation.navigate('Signup')}

          style={styles.loginBtn}
          textStyle={styles.loginTxt}
        >
          {'Back to login page'}
        </Button>
      </View>
    </Screen>
  );
}

export default ForgotPasswordSuccessScreen;