import { useNavigation } from '@react-navigation/core';
import { View, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
// import { ErrorAlert } from '../../../../components/ErrorAlert';
// import { ErrorFullScreen } from '../../../../components/ErrorFullScreen';
import { Button } from '../../../components/Button';
import { Screen } from '../../../components/Screen';
import { Text } from '../../../components/Text';
import { TextInput } from '../../../components/TextInput';
import { theme } from '../../../theming';
import { styles } from './ForgotPasswordScreenStyle';
import { useHeaderHeight } from '../../../customHooks/useHeaderHeight';
import { Touchable } from '../../../components/Touchable';
import Ionicons from 'react-native-vector-icons/Ionicons'

const ForgotPasswordScreen = ()=> {
  const { smallHeaderInset, modalHeaderInset } = useHeaderHeight();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const handleNavigation = useCallback(() => navigation.navigate('ForgotPasswordSuccessScreen'), [navigation]);


  return (
    <Screen
      safeArea
      statusBarStyle="light"
      style={styles.insetContainer}
      keyboardVerticalOffset={smallHeaderInset}
    >
      <Touchable onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back' size={26} color={'#000'} style={styles.icon} />
        </Touchable>
      <View style={[styles.container, { paddingTop: 10 }]}>
        <View>
          <View style={styles.header}>
            <Text weight="medium" size={32} style={styles.title}>
              {'Input your email'}
            </Text>
            <Text size={14} style={styles.headerDescription}>
              {'Type your email and click Reset below'}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.emailText}>{'Email'}</Text>
          <TextInput
            placeholder={'Input your email here'}
            placeholderTextColor={theme.colors.lightGrey}
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            style={[
              styles.textInput,
            ]}
            textContentType="username"
            autoComplete="email"
            returnKeyType="done"
            returnKeyLabel="Reset password"
            enablesReturnKeyAutomatically={true}
            // onSubmitEditing={handleSubmit}
          />
        </View>
        </View>
        <Button
          // loading={resetMutation.isLoading}
          onPress={handleNavigation}
          style={styles.resetBtn}
          textStyle={styles.resetTxt}
          >
          {'Reset Password'}
        </Button>
    </Screen>
  );
}

export default ForgotPasswordScreen;
