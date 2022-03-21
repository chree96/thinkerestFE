import {StyleSheet} from 'react-native';

import colors from './colors';
import {sizes, families} from './fonts';

export const globalStyle = StyleSheet.create({
  // TEXT
  textRegular: {
    fontFamily: families.regular,
    color: colors.solidWhite,
  },
  textLight: {
    fontFamily: families.light,
    color: colors.solidWhite,
  },
  textBold: {
    fontFamily: families.bold,
    color: colors.solidWhite,
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
  textLittleMediumSize: {
    fontSize: sizes.littleMedium,
  },
  textCardTitleSize: {
    fontSize: sizes.cardTitle,
  },
  textMedLargeSize: {
    fontSize: sizes.medLarge,
  },
  textGiantSize: {
    fontSize: sizes.giant,
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
