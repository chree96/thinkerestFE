import {StyleSheet} from 'react-native';

import colors from './colors';
import {sizes, weights, families} from './fonts';

export const globalStyle = StyleSheet.create({
  // TEXT
  textRegular: {
    fontFamily: families.regular,
    color: colors.solidWhite,
    // color: colors.mineShaft,
  },
  textLight: {
    fontFamily: families.light,
    color: colors.solidWhite,
    // color: colors.mineShaft,
  },
  textBold: {
    fontFamily: families.bold,
    color: colors.solidWhite,
    // color: colors.mineShaft,
  },
  textCardTitleSize: {
    fontSize: sizes.cardTitle,
  },
  textExtraSmallSize: {
    fontSize: sizes.extraSmall,
  },
  textSmallSize: {
    fontSize: sizes.small,
  },
  textSmallishSize: {
    fontSize: sizes.smallish,
  },
  loaderContainer: {
    justifyContent: 'center',
  },
  //GENERIC
  flex: {
    flex: 1,
  },
  lottieLoader: {
    backgroundColor: 'transparent',
    height: 150,
  },
});
