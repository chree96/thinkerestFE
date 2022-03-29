import {StyleSheet} from 'react-native';
import {colors, families, sizes} from '../../../style';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
  titleGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    alignItems: 'flex-end',
  },
  titleText: {
    fontFamily: families.bold,
    color: colors.whiteSmoke,
    fontSize: sizes.cardTitle,
  },
  rateGrid: {
    flexDirection: 'row',
    marginTop: 6,
  },
  rateText: {
    fontFamily: families.bold,
    color: colors.whiteSmoke,
    fontSize: sizes.giant,
  },
});
