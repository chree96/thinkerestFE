import {StyleSheet} from 'react-native';
import {colors} from '../../../style';

export const styles = StyleSheet.create({
  buttonsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonsContainer: {
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: 4,
  },
  genericButtonContainer: {
    backgroundColor: colors.solidWhite,
    padding: 6,
  },
  radialGradient: {
    borderRightWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'black',
    height: 40,
  },
  headerButton: {
    borderRadius: 0,
    marginRight: 0,
  },
});
