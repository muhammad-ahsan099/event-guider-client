import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async (value) => {
  if (value) {
    const { access, refresh } = value;
    try {
      await AsyncStorage.setItem('access_token', access);
      await AsyncStorage.setItem('refresh_token', refresh);
    } catch (error) {
      // Handle error while storing tokens
    }
  }
};

const getToken = async () => {
  try {
    const access_token = await AsyncStorage.getItem('access_token');
    const refresh_token = await AsyncStorage.getItem('refresh_token');
    return { access_token, refresh_token };
  } catch (error) {
    // Handle error while retrieving tokens
    return { access_token: null, refresh_token: null };
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('access_token');
    await AsyncStorage.removeItem('refresh_token');
  } catch (error) {
    // Handle error while removing tokens
  }
};

export { storeToken, getToken, removeToken };
