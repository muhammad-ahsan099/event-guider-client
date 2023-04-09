import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacityProps, View, ViewStyle, TextStyle } from 'react-native';
import { Theme, useTheme } from '../theming';
import { Loader } from './Loader';
import { Text } from './Text';
import { Touchable } from './Touchable';
import { WhiteSpace } from './WhiteSpace';


export function Button({
  type,
  loading,
  children,
  disabled,
  containerStyle,
  textStyle,
  ...forwardedProps
}) {
  const theme = useTheme();
  const dynamicStyles = getStyles(theme, type, disabled);
  return (
    <View style={containerStyle}>
      <Touchable disabled={disabled} {...forwardedProps}>
        {loading ? (
          <>
            <WhiteSpace height={4} width={4} />
            <Loader size={16} style={styles.loader} color={dynamicStyles.loader} />
          </>
        ) : (
          <Text color={dynamicStyles.text} style={textStyle}>
            {children}
          </Text>
        )}
      </Touchable>
    </View>
  );
}

function getStyles(
  { colors },
  type = 'primary',
  disabled = false,
) {
  switch (type) {
    case 'dangerOutline':
      return {
        background: 'transparent',
        containerStyles: { borderWidth: 2 },
        text: 'white',
        loader: 'buttonOutlineLoader',
      };
    default:
      return {
        background: disabled ? colors.grey : colors.secondary,
        text: 'white',
        loader: 'buttonLoader',
      };
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 3,
    justifyContent: 'center',
    padding: 14,
  },
  loader: {
    maxWidth: 16,
    paddingLeft: 16,
    alignSelf: 'center',
  },
});
