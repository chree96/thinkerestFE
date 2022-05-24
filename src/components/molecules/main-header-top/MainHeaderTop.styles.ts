import {StyleSheet} from 'react-native';
import {families, sizes, colors} from '../../../style';

export const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.mattBlack,
    paddingLeft: 16,
    paddingRight: 2,
    paddingTop: 6,
  },
  topButtonsContainer: {
    flexDirection: 'row',
  },
  chat: {
    marginTop: 10,
    marginRight: -6,
  },
  textLogo: {
    fontFamily: families.light,
    fontSize: sizes.medLarge,
    marginTop: 6,
  },
});
