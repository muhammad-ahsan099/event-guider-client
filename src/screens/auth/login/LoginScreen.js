import React, { useCallback } from 'react';
import { Alert, View } from 'react-native';
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
import { styles } from './LoginScreenStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Google from '../../../assets/images/google.svg'
import { theme } from '../../../theming';
import { useNavigation } from '@react-navigation/core';
import { Touchable } from '../../../components/Touchable';


const LoginScreen = () => {
  const navigation = useNavigation();
  // const [isConnected] = useNetInfo();
  // let appError;

  // const { values, isValid, handleSubmit, handleChange, handleBlur, dirty } = useFormik({
  //   initialValues,
  //   validate: ({ email, password }) =>
  //     !email || !password
  //       ? {
  //         email: !email ? 'Email is required' : undefined,
  //         password: !password ? 'Password is required' : undefined,
  //       }
  //       : undefined,
  //   onSubmit: ({ email, password }) => {
  //     // !isConnected
  //     //   ? Alert.alert('No Internet', 'Connected to the internet?')
  //     //   : loginMutation.mutate({ email, password });
  //   },
  // });

  // const handleForgotPassword = useCallback(() => {
  //   navigation.navigate('ForgotPasswordScreen', {
  //     params: { username: values.email },
  //   });
  // }, [navigation, values.email]);

  // const submit = useCallback(() => {
  //   handleSubmit();
  // }, [handleSubmit]);

  return (
    <Screen
      statusBarStyle="light"
      scroll
      safeArea
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={styles.screen}
    >
      <View>
        <View
          style={[
            styles.card,
          ]}
        >
          <Text size={32} style={styles.loginText}>
            {'Login'}
          </Text>

          <Text size={14} style={styles.subLoginText}>
            {'Please login to continue'}
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.emailText}>{'Email'}</Text>
            <TextInput
              placeholder="Input your email here"
              placeholderTextColor={theme.colors.lightGrey}
              autoCapitalize="none"
              autoCorrect={false}
              // value={values.email}
              // onChangeText={handleChange('email')}
              // onBlur={handleBlur('email')}
              style={[
                styles.textInput,
                styles.textInputText,
              ]}
              textContentType="username"
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
              // value={values.password}
              // onChangeText={handleChange('password')}
              // onBlur={handleBlur('password')}
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
          <Touchable onPress={() => navigation.navigate('ForgotPasswordScreen')}>

            <Text weight="medium" style={styles.forgotPasswordLink}
            // onPress={handleForgotPassword}
            >
              {'Forgot Password?'}
            </Text>
          </Touchable>
          <Button
            onPress={() => navigation.navigate('Signup')}
            // loading={loginMutation.isLoading}
            // disabled={!isValid || !dirty}
            containerStyle={styles.loginBtn}
            textStyle={styles.loginTxt}
          >
            {'Sign In'}
          </Button>
          <WhiteSpace height={16} />

          <Button
            onPress={() => navigation.navigate('Signup')}
            // loading={loginMutation.isLoading}
            // disabled={!isValid || !dirty}
            containerStyle={styles.signupBtn}
            textStyle={styles.signupTxt}
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
            <Text style={styles.googleBtnText}>{'Sign in with Google'}</Text>
          </TouchableOpacity>

          {/* <WhiteSpace width={'100%'} height={16} /> */}
        </View>
      </View>
    </Screen>
  );
}

export default LoginScreen;