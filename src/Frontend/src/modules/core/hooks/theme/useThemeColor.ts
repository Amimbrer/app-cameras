import { useColorScheme } from 'react-native';
import { Colors } from '@core/types';

/**
 * The custom color or the default color for the current theme
 * @param props
 * @param colorName
 */
export const useThemeColor = (
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  props?: { light?: string; dark?: string },
): string => {
  // We obtain the current theme
  const theme = useColorScheme() ?? 'light';

  // We get custom styles for the theme
  const customTheme = props && props[theme];

  if (customTheme) {
    return customTheme;
  } else {
    return Colors[theme][colorName];
  }
};
