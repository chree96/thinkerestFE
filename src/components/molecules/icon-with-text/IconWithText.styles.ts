import {StyleSheet} from 'react-native';
import {colors, families, sizes} from '../../../style';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  iconText: {
    fontFamily: families.bold,
    color: colors.solidWhite,
    fontSize: sizes.small,
    marginLeft: 2,
  },
});
