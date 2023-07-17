import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme, ThemeProvider } from './src/theming';
import Navigation from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './src/config/Store';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './src/screens/auth/login/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  console.warn = () => {};

  useEffect(() => {
    const initializeIds = async () => {
      try {
        const existingIds = await AsyncStorage.getItem('ids');
        console.log("Already Exist: ", existingIds);
        if (existingIds === null) {
          console.log("Not Exist: ", existingIds);
          await AsyncStorage.setItem('ids', JSON.stringify([]));
        }
      } catch (error) {
        // Handle error
      }
    };

    initializeIds();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <BottomSheetModalProvider>
          <ThemeProvider theme={theme}>
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
          </ThemeProvider>
        </BottomSheetModalProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
