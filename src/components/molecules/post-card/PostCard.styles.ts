import {StyleSheet} from 'react-native';
import {colors, families} from '../../../style';

export const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    flex: 1,
    minHeight: 380,
    maxHeight: 450,
    width: '90%',
    paddingLeft: '14%',
    marginHorizontal: 18,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  contentContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  imgContainer: {
    width: '100%',
    height: '82%',
    borderRadius: 10,
    marginTop: -12,
    overflow: 'hidden',
    borderColor: colors.doveGrey,
    borderWidth: 1,
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  contentInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  reviewContainer: {
    flex: 1,
    paddingTop: 6,
    paddingRight: 8,
    minHeight: 280,
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
