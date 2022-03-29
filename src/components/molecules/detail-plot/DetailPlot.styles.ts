import {StyleSheet} from 'react-native';
import {colors, families, sizes} from '../../../style';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  title: {
    fontFamily: families.bold,
    fontSize: sizes.smallish,
    color: colors.whiteSmoke,
  },
  plot: {
    fontFamily: families.light,
    fontSize: sizes.smallish,
    color: colors.whiteSmoke,
  },
});
