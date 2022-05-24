import {StyleSheet} from 'react-native';
import {colors} from '../../../style';

export const styles = StyleSheet.create({
  buttonsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 10,
    alignItems: 'center',
  },
  buttonsContainer: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 4,
    backgroundColor: colors.mattBlack,
  },
  headerButton: {
    borderRadius: 0,
    marginRight: 0,
  },
});
