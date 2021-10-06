import {StyleSheet} from 'react-native';
import {sizes, colors, families} from '../../../style';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 14,
    marginVertical: 8,
  },
  text: {
    fontFamily: families.bold,
    fontSize: sizes.cardTitle,
    color: colors.solidWhite,
  },
});
