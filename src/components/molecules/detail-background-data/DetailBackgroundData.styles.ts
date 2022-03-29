import {StyleSheet} from 'react-native';
import {colors, families, sizes} from '../../../style';

export const styles = StyleSheet.create({
  obscuredView: {
    width: '100%',
    height: 120,
    position: 'absolute',
    bottom: 0,
    zIndex: 9,
    paddingHorizontal: 20,
    paddingBottom: 16,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontFamily: families.bold,
    color: colors.whiteSmoke,
    fontSize: sizes.medLarge,
  },
  description: {
    fontFamily: families.light,
    fontSize: sizes.littleMedium,
    color: colors.lightGrey,
  },
});
