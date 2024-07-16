import { Text, TextProps } from 'react-native'

import { useThemeColor  } from '@core/hooks'
import { getTextTypeStyle  } from '@core/services'
import { Colors, TextStyleType  } from '@core/types'


type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: TextStyleType;
  themeColor?: keyof typeof Colors.light & keyof typeof Colors.dark
};


/**
 * Must be used to create a <Text> with theme dark or light
 * @param param0 
 */
export const ThemedText = ({style, lightColor, darkColor, type = 'default', themeColor = 'text', ...rest}: ThemedTextProps) => {

    const color = useThemeColor(themeColor, {light: lightColor, dark: darkColor });
    const stylesText = getTextTypeStyle(type);

  return (
    <Text style={[{color}, {...stylesText}, style ]} {...rest} />
  );
}
