import {StyleSheet} from 'react-native';
import {colors, families, sizes} from '../../../style';

export const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    flexShrink: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  contentContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  imgContainer: {
    marginLeft: '13%',
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  contentInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  reviewContainer: {
    minHeight: 10,
    marginLeft: '18%',
    paddingTop: 6,
    paddingRight: 12,
  },
  reviewText: {
    fontFamily: families.light,
    color: colors.whiteSmoke,
    fontSize: sizes.smallish,
    paddingTop: 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingRight: 4,
  },
  buttonIconText: {
    fontFamily: families.bold,
    fontSize: 12,
    color: colors.doveGrey,
    textAlignVertical: 'bottom',
  },
});
