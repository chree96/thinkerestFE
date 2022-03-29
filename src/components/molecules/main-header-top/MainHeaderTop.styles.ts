import {StyleSheet} from 'react-native';
import {families, sizes, colors} from '../../../style';

export const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.mattBlack,
    paddingLeft: 16,
    paddingTop: 6,
  },
  topButtonsContainer: {
    flexDirection: 'row',
  },
  textLogo: {
    fontFamily: families.extraLight,
    fontSize: sizes.larger,
  },
});
