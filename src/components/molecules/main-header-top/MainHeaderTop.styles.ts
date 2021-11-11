import {StyleSheet} from 'react-native';
import {families, sizes, colors} from '../../../style';

export const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.mattBlack,
  },
  topButtonsContainer: {
    flexDirection: 'row',
  },
  textLogo: {
    fontFamily: families.bold,
    fontSize: sizes.larger,
    marginLeft: 15,
  },
});
