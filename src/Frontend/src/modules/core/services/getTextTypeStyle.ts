import { TextStyle, StyleSheet } from 'react-native';
import { TextStyleType } from '@core/types';

/**
 * Returns the corresponding style for the test type
 * @param type
 */
export const getTextTypeStyle = (type: TextStyleType): TextStyle => {
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
  }

  return textStyle;
};

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  defaultSemiBold: {
    lineHeight: 24,
    fontWeight: '700',
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
});
