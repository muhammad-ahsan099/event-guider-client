import React from 'react';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '../theming';

export function Loader({ size, style, color }) {
  const theme = useTheme();
  return (
    <ActivityIndicator style={style} size={size} color={color ? theme.colors[color] : '#a7b5c4'} />
  );
}
