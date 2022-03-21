import {StyleSheet} from 'react-native';
import {colors, shadows} from '../../style';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.solidBlack,
  },
  reviewContainer: {
    paddingBottom: 40,
  },
  tabBarText: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  buttonSelected: {
    borderBottomWidth: 4,
    flex: 1,
  },
  tabBar: {
    backgroundColor: colors.codGrey,
    borderWidth: 0,
    paddingTop: 30,
    margin: 0,
    ...shadows.medium,
  },
});
