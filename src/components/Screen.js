// import React, { ReactNode, useMemo, useLayoutEffect } from 'react';
import React, { ReactNode, useMemo } from 'react';
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  StyleProp,
  ViewStyle,
  SafeAreaView,
  KeyboardAvoidingViewProps,
  StatusBar,
} from 'react-native';
// import { useNavigation } from '@react-navigation/core';
import { useHeaderHeight } from '../customHooks/useHeaderHeight';
import { theme } from '../theming';

export function Screen({
  scroll,
  keyboardVerticalOffset,
  keyboardBehavior = 'padding',
  safeArea,
  style,
  contentContainerStyle,
  children,
}) {
  const { bottomInset } = useHeaderHeight();
  const preparedStyle = useMemo(
    () => StyleSheet.flatten([styles.container, style]),
    [style],
  );

  const content = scroll ? (
    <ScrollView style={preparedStyle} contentContainerStyle={contentContainerStyle} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
      {children}
    </ScrollView>
  ) : (
    <View style={preparedStyle}>{children}</View>
  );

  return (
    <>
    {/* <StatusBar backgroundColor={'#fff'} barStyle="light-content" /> */}
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: preparedStyle.backgroundColor }]}
      contentContainerStyle={styles.container}
      behavior={Platform.select({ ios: keyboardBehavior, default: undefined })}
      keyboardVerticalOffset={
        keyboardVerticalOffset === undefined ? bottomInset : keyboardVerticalOffset
      }
    >

      {/* this is where you would add your top bar with the header or change the navigation system header */}

      {safeArea ? (
        <SafeAreaView
          style={[styles.container, { backgroundColor: preparedStyle.backgroundColor }]}
        >
          {content}
        </SafeAreaView>
      ) : (
        content
      )}
    </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: undefined,
    flex: 1,
  },
});
