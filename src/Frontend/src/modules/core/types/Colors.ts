type Color = {
  light?: string;
  dark?: string;
};

/**
 * Color text tab
 */
const tintColor: Color = {
  light: '#0a7ea4',
  dark: '#fff',
};

/**
 * Icon colors
 */
const iconColor: Color = {
  light: '#687076',
  dark: '#fff',
};

/**
 * Background colors
 */
const backgroundColor: Color = {
  light: '#fff',
  dark: '#687076',
};

/**
 * Icon colors
 */
const textColor: Color = {
  light: '#11181C',
  dark: '#11181C',
};

/**
 * Default colors for the app
 */
export const Colors = {
  light: {
    text: textColor.light,
    background: backgroundColor.light,
    tint: tintColor.light,
    icon: iconColor.light,
  },
  dark: {
    text: textColor.dark,
    background: backgroundColor.dark,
    tint: tintColor.dark,
    icon: iconColor.dark,
  },
};

export type TextStyleType =
  | 'title'
  | 'defaultSemiBold'
  | 'subtitle'
  | 'link'
  | 'default';
