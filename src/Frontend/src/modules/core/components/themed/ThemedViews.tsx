import { View, ViewProps } from 'react-native';

import { useThemeColor } from '@core/hooks';
import {  RefAttributes } from 'react';

type ThemedViewProps = ViewProps & RefAttributes<View> & {
  lightColor?: string;
  darkColor?: string;
};

/**
 * Must be used as <View> themed
 * @param param0 
 * @returns 
 */
export const ThemedView = ({ 
    style, lightColor, darkColor, ...otherProps 
  }: ThemedViewProps) => {


  const backgroundColor = useThemeColor('background', { light: lightColor, dark: darkColor });

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}