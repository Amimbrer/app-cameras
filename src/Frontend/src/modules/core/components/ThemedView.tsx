import { View, type ViewProps } from 'react-native';
import { useThemeColor } from '@core/hooks';

export type ThemedViewProps = ViewProps & {
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


  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}