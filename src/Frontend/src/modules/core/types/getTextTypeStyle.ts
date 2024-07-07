import { TextStyle, StyleSheet } from 'react-native';
import { TextStyleType } from '@core/types';

/**
 * Returns the corresponding style for the test type
 * @param type
 */
export const useTextTypeStyle = (type: TextStyleType): TextStyle => {
  let textStyle: TextStyle = styles.default;

  switch (type) {
    case 'title':
      textStyle = { ...textStyle, ...styles.title };
      break;
    case 'defaultSemiBold':
      textStyle = { ...textStyle, ...styles.defaultSemiBold };
      break;
    case 'subtitle':
      textStyle = { ...textStyle, ...styles.subtitle };
      break;
    case 'link':
      textStyle = { ...textStyle, ...styles.link };
      break;
  }

  return textStyle;
};

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
