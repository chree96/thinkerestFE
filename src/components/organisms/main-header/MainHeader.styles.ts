import {StyleSheet} from 'react-native';
import {colors, families, sizes} from '../../../style';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 100,
    backgroundColor: colors.solidBlack,
    position: 'absolute',
  },
  textLogo: {
    fontFamily: families.bold,
    fontSize: sizes.larger,
    marginLeft: 15,
  },
});
