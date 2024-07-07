import { Text, TextProps } from 'react-native'
import { useThemeColor  } from '@core/hooks'
import { useTextTypeStyle  } from '@core/services'
import { TextStyleType  } from '@core/types'



export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: TextStyleType;
};


/**
 * Must be used to create a <Text> with theme dark or light
 * @param param0 
 */
export const ThemedText = ({style, lightColor, darkColor, type = 'default', ...rest}: ThemedTextProps) => {

    const color = useThemeColor({light: lightColor, dark: darkColor }, 'text');
    const stylesText = useTextTypeStyle(type);

  return (
    <Text style={[{color}, {...stylesText}, style ]} {...rest} />
  );
}
