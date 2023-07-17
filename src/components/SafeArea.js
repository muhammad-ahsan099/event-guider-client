import React, {Component, Fragment} from 'react';
import {SafeAreaView, View, StatusBar, StyleSheet} from 'react-native';
import { theme } from '../theming';

export default function SafeArea(props) {
    return (
      <Fragment>
        <SafeAreaView
          style={[
            styles.safeAreaTop,
            {
              backgroundColor: props.statusBarColor
                ? props.statusBarColor
                : theme.colors.white,
            },
          ]}
        />
        <StatusBar
          backgroundColor={props.statusBarColor}
          barStyle={props.statusBarStyle}
        />
        <SafeAreaView
          style={[
            styles.safeAreaBottom,
            {
              backgroundColor: props.bottomBarColor
                ? props.bottomBarColor
                : theme.colors.white,
            },
          ]}>
          <View style={styles.container}>{props.children}</View>
        </SafeAreaView>
      </Fragment>
    );
}

const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: theme.colors.white,
  },
  safeAreaBottom: {
    flex: 1,
    backgroundColor: theme.colors.grey,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
