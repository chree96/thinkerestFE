import {StyleSheet} from 'react-native';
import {colors, families, sizes} from '../../../style';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 8,
    padding: 16,
    paddingRight: 0,
    marginVertical: 10,
    marginHorizontal: 8,
    backgroundColor: colors.codGrey,
    borderRadius: 10,
  },
  userInfo: {
    marginTop: 0,
    marginLeft: 0,
    paddingRight: 16,
  },
  reviewContainer: {
    paddingRight: 16,
    paddingBottom: 16,
  },
  imgStyle: {
    marginRight: 8,
    marginTop: 8,
  },
  userText: {
    fontFamily: families.bold,
    color: colors.whiteSmoke,
  },
  reviewText: {
    fontFamily: families.light,
    color: colors.whiteSmoke,
    fontSize: sizes.smallish,
  },
});
