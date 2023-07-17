import axios from 'axios';
import { getToken, removeToken, storeToken } from '../../utils/LocalStorage';
import { endPoint } from '../../config/EndPoint';
import { LOGIN, ACTIVE_USER, CREATE_ACCOUNT, FORGOT_PASSWORD, RESET_PASSWORD, LOGOUT, USER_PROFILE } from '../type/Type';

export const doLogin = (email, password, navigation, setLoading, setServerError) => async (dispatch) => {
  try {
    setLoading(true)
    const creds = {
      email,
      password
    }
    let request = {
      method: 'post',
      url: `${endPoint}user/login/`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: creds
    };
    let res = await axios(request);
    if (res.data) {
      console.log('Res DAta: ', res.data);
      storeToken(res.data.token)
      dispatch({
        type: LOGIN,
        payload: res?.data,
      })
      setTimeout(() =>
        navigation.navigate('Home')
        , 1000)
    }
  }
  catch (error) {
    setServerError(error?.response?.data?.errors)
    console.log('Error at Login: ', error)
  }
  finally {
    setTimeout(() =>
      setLoading(false)
      , 1000)
  }
}

export const fetchProfile = (setLoading) => async (dispatch) => {
  try {
    console.log("Trigger user profile");
    setLoading(true)
    const { access_token } = await getToken()
    let request = {
      method: 'get',
      url: `${endPoint}user/profile/`,
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${access_token}`,
      }
    };
    let res = await axios(request);
    if (res.data.status === 200) {
      dispatch({
        type: USER_PROFILE,
        payload: res?.data?.data,
      })
    }
  }
  catch (error) {
    console.log('Error at Fetch Profile: ', error)
  }
  finally {
    setTimeout(() =>
      setLoading(false)
      , 500)
  }
}



export const getLoggedInUser = () => async (dispatch) => {
  try {
    let { access_token } = await getToken()
    if (access_token) {
      dispatch({
        type: ACTIVE_USER,
        payload: null,
      })
    }
  }
  catch (error) {
    console.log(error?.response?.data?.message)
  }
}

export const createAccount = (creds, navigate, setLoading, setServerError) => async (dispatch) => {
  try {
    console.log('Creds: ', creds);
    setLoading(true)
    let request = {
      method: 'post',
      url: `${endPoint}user/register/`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: creds
    };
    let res = await axios(request);
    if (res.data?.success) {
      dispatch({
        type: CREATE_ACCOUNT,
        payload: res?.data,
      });
      setTimeout(() =>
        navigate.navigate('Home')
        , 1000)
    }

  }
  catch (error) {
    setServerError(error?.response?.data?.errors)
    console.log('Error at Login: ', error)
  }
  finally {
    setTimeout(() =>
      setLoading(false)
      , 1000)
  }
}

export const forgotPassword = (creds, setLoading, setServerError) => async (dispatch) => {
  try {
    setLoading(true)
    let request = {
      method: 'post',
      url: `${endPoint}user/send-reset-password-email/`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: creds
    };
    let res = await axios(request);
    if (res.data) {
      dispatch({
        type: FORGOT_PASSWORD,
        payload: res?.data,
      });
    }

  }
  catch (error) {
    setServerError(error?.response?.data?.errors)
    console.log('Error at Forgot Password: ', error)
  }
  finally {
    setTimeout(() =>
      setLoading(false)
      , 1000)
  }
}

export const resetPassword = (creds, navigate, setLoading, setServerError) => async (dispatch) => {
  try {
    setLoading(true)
    let request = {
      method: 'post',
      url: `${endPoint}user/changepassword/`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: creds
    };
    let res = await axios(request);
    if (res.data) {
      dispatch({
        type: RESET_PASSWORD,
        payload: res?.data,
      });
      navigate('/login')
    }

  }
  catch (error) {
    setServerError(error?.response?.data?.errors)
    console.log('Error at Forgot Password: ', error)
  }
  finally {
    setTimeout(() =>
      setLoading(false)
      , 1000)
  }
}


export const doLogout = (setLoading) => async (dispatch) => {
  try {
    removeToken()
    dispatch({
      type: LOGOUT,
      payload: null,
    })

  }
  catch (error) {
    console.log(error?.message)
  }
  finally {
      setLoading(false)
  }
}
