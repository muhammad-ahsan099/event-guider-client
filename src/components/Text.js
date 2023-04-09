import React from 'react';
import { Text as NativeText, TextStyle, StyleProp, TextProps as NativeProps } from 'react-native';
import { Theme, useTheme } from '../theming';

export function Text({
  style,
  color = 'primary',
  size = 14,
  children,
  weight,
  fonts,
  ...rest
}) {
  const theme = useTheme();
  const textColor = theme.colors[color];
  const fontweight = theme.fonts[weight]
  // const fontFamily = fonts ? theme.fontFamily[fonts] : theme.fontFamily['InterBlack']
  return (
    <NativeText
      {...rest}
      style={[
        {
          fontSize: size,
          color: textColor,
          fontWeight: fontweight,
          // fontFamily: fontFamily,
        },
        style,
      ]}
    >
      {children}
    </NativeText>
  );
}
