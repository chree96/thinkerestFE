import {StyleSheet} from 'react-native';
import {colors, families, sizes} from '../../../style';

export const styles = StyleSheet.create({
  userActionContainer: {
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'space-between',
  },
  userActionRow: {
    flexDirection: 'row',
  },
  userText: {
    fontFamily: families.bold,
    color: colors.solidWhite,
    fontSize: sizes.littleMedium,
  },
  actionText: {
    fontFamily: families.regular,
    fontSize: sizes.small,
    color: colors.doveGrey,
    textAlignVertical: 'center',
  },
  dateText: {
    fontFamily: families.light,
    fontSize: sizes.small,
    color: colors.doveGrey,
  },
  contentText: {
    fontFamily: families.regular,
    fontSize: sizes.littleMedium,
    textAlignVertical: 'center',
  },
  contentWithRateContainer: {
    flexDirection: 'row',
    width: '76%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -6,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginTop: 0,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 12,
  },
  imgStyle: {
    marginRight: 8,
    marginTop: 8,
  },
  txtStyle: {
    textAlignVertical: 'center',
  },
  iconContainer: {
    paddingRight: 4,
  },
});
