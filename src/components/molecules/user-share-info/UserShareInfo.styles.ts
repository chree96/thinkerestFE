import {StyleSheet} from 'react-native';
import {colors, families, sizes} from '../../../style';

export const styles = StyleSheet.create({
  actionContainer: {
    width: '85%',
    paddingRight: 16,
  },
  userActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userActionRow: {
    flexDirection: 'row',
  },
  userText: {
    fontFamily: families.bold,
    color: colors.whiteSmoke,
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
    marginTop: 32,
    width: '100%',
    paddingLeft: 16,
  },
  imgStyle: {
    marginRight: 8,
    marginTop: 4,
  },
  txtStyle: {
    textAlignVertical: 'center',
  },
  iconContainer: {
    paddingRight: 4,
  },
});
