export const paleteColors: {
  [key: number]: string;
} = {
  50: '#f0f7fe',
  100: '#deebfb',
  200: '#c4def9',
  300: '#9bc8f5',
  400: '#6cabee',
  500: '#4f8fe8',
  600: '#356fdb',
  700: '#2c5bc9',
  800: '#294ba4',
  900: '#264282',
  950: '#1c2a4f',
};

/**
 * Default colors for the app
 */
export const Colors = {
  light: {
    text: '#000000',
    background: '#FFFFFF',
    tint: '#FFFFFF',
    primary: paleteColors[600],
    secondary: paleteColors[500],
    tertiary: paleteColors[700],
    shadow: '#6b88a7',
    inactive: '#8E8E8F',
  },
  dark: {
    text: '#FFFFFF',
    background: '#3d3d3d',
    tint: '#FFFFFF',
    primary: paleteColors[300],
    secondary: paleteColors[200],
    tertiary: paleteColors[400],
    shadow: paleteColors[200],
    inactive: '#8E8E8F',
  },
};

export type TextStyleType =
  | 'title'
  | 'defaultSemiBold'
  | 'subtitle'
  | 'default';
