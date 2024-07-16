import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';

import { useThemeColor  } from '@core/hooks'
import { getTextTypeStyle } from '@core/services';
import { TextStyleType } from '@core/types';

type ThemedLinkProps = LinkProps & {
  lightColor?: string;
  darkColor?: string;
  type?: TextStyleType;
};

/**
 * Must be used to create an <Link> component
 * @param param0 
 */
export const ThemedLink = ({style, lightColor, darkColor, type = 'default', ...rest}: ThemedLinkProps) => {
  const color = useThemeColor('primary', {light: lightColor, dark: darkColor });
  const stylesText = getTextTypeStyle(type)

  return (
    <Link style={[{color}, {...stylesText}, style ]} {...rest} />
  );
}
