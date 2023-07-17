import React, { useCallback } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useFormik } from 'formik';
import { useNetInfo } from '@react-native-community/netinfo';
import { Screen } from '../../../components/Screen';
import { Text } from '../../../components/Text';
import { TextInput } from '../../../components/TextInput';
import { Button } from '../../../components/Button';
// import { CoreApiError } from '../../../../api/types';
import { WhiteSpace } from '../../../components/WhiteSpace';
// import { AppError, ErrorMap } from '../../../../common/errorMessages';
// import { ErrorAlert } from '../../../../components/ErrorAlert';
// import { ErrorMessage } from '../../../../components/ErrorMessage';
// import { LOGIN_SUCCESS } from '../../actionTypes';
import { styles } from './SignUpScreenStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Google from '../../../assets/images/google.svg'
import { theme } from '../../../theming';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Touchable } from '../../../components/Touchable';
import UseSignUp from './UseSignUp';


const SignUpScreen = () => {
  const navigation = useNavigation();
  const [{ values, loading, handleChange, handleClickShowPassword, email, setEmail, userName, setUserName, signupHandler, server_error }] = UseSignUp()
  const handleNavigation = useCallback(() => navigation.goBack(), [navigation]);


  return (
    <Screen
      statusBarStyle="dark"
      scroll={true}
      safeArea
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={styles.screen}
    >
      <View>
        <Touchable onPress={() => handleNavigation()}>
          <Ionicons name='chevron-back' size={26} color={'#000'} style={styles.icon} />
        </Touchable>
        <View
          style={[
            styles.card,
          ]}
        >
          <Text size={32} style={styles.loginText}>
            {'Sign up'}
          </Text>

          <Text size={14} style={styles.subLoginText}>
            {'Please sign up to continue'}
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.emailText}>{'Name'}</Text>
            <TextInput
              placeholder="Input your name here"
              placeholderTextColor={theme.colors.lightGrey}
              autoCapitalize="none"
              autoCorrect={false}
              value={userName}
              onChangeText={(text)=> setUserName(text)}
              style={[
                styles.textInput,
                styles.textInputText,
              ]}
              textContentType="username"
              autoComplete="username"
              returnKeyType="next"
            />
          </View>

          <View >
            <Text style={styles.emailText}>{'Email'}</Text>
            <TextInput
              placeholder="Input your email here"
              placeholderTextColor={theme.colors.lightGrey}
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(text)=> setEmail(text)}
              style={[
                styles.textInput,
                styles.textInputText,
              ]}
              textContentType="username"
              autoComplete="email"
              returnKeyType="next"
            />
          </View>
          <View >
            <Text style={styles.emailText}>{'Phone'}</Text>
            <TextInput
              placeholder="Input your phone here"
              placeholderTextColor={theme.colors.lightGrey}
              autoCorrect={false}
              cursorColor={theme.colors.primary}
              keyboardType={'phone-pad'}
              value={values.phone}
              onChangeText={handleChange('phone')}
              style={[
                styles.textInput,
                styles.textInputText,
              ]}
              textContentType="none"
              autoComplete="email"
              returnKeyType="next"
            />
          </View>

          <View>
            <Text style={styles.emailText}>{'Password'}</Text>
            <TextInput
              placeholder="Input your password here"
              placeholderTextColor={theme.colors.lightGrey}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              value={values.password}
              onChangeText={handleChange('password')}
              style={[
                styles.textInputText,
                styles.textInput,
              ]}
              textContentType="password"
              autoComplete="password"
              returnKeyType="done"
              returnKeyLabel="Login"
              enablesReturnKeyAutomatically={true}
            />
          </View>
          <View>
            <Text style={styles.emailText}>{'Confirm Password'}</Text>
            <TextInput
              placeholder="Input your password here"
              placeholderTextColor={theme.colors.lightGrey}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              style={[
                styles.textInputText,
                styles.textInput,
              ]}
              textContentType="password"
              autoComplete="password"
              returnKeyType="done"
              returnKeyLabel="Login"
              enablesReturnKeyAutomatically={true}
            />
          </View>

          <Button
            onPress={signupHandler}
            // loading={loginMutation.isLoading}
            // disabled={!isValid || !dirty}
            containerStyle={styles.loginBtn}
            textStyle={styles.loginTxt}
          >
            {'Sign up'}
          </Button>

          {/* {appError && appError.status === 401 ? (
            <ErrorMessage message={'appError.message'} textAlign="center" />
          ) : (
          )} */}
          <WhiteSpace height={34} />

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerTxt}> or </Text>
            <View style={styles.dividerLine} />
          </View>
          <WhiteSpace height={34} />

          <TouchableOpacity activeOpacity={0.6} style={styles.googleBtn}>
            <Google width={20} height={20} />
            <Text style={styles.googleBtnText}>{'Sign up with Google'}</Text>
          </TouchableOpacity>

          <WhiteSpace width={'100%'} height={16} />

          {/* <TouchableOpacity activeOpacity={0.6} style={styles.googleBtn}>
            <Google width={20} height={20} />
            <Text style={styles.googleBtnText}>{'Sign in with Google'}</Text>
          </TouchableOpacity> */}

        </View>
      </View>
    </Screen>
  );
}

export default SignUpScreen;