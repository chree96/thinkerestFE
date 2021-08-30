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
  textSmallSize: {
    fontSize: sizes.small,
  },
  textSmallishSize: {
    fontSize: sizes.smallish,
  },

  //GENERIC
  flex: {
    flex: 1,
  },
});