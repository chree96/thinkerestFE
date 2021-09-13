import {StyleSheet} from 'react-native';
import {colors} from '../../style';

export const styles = StyleSheet.create({
  loaderContainer: {
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: colors.solidBlack,
  },
  paddingTopHiddenHeader: {
    paddingTop: 50,
  },
  paddingTopHeader: {
    paddingTop: 70,
  },
});
