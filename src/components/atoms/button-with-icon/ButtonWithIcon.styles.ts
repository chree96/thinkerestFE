import {StyleSheet} from 'react-native';
import {colors} from '../../../style';

export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 100,
    marginRight: 8,
    backgroundColor: colors.mineShaft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noBackground: {
    backgroundColor: 'transparent',
  },
  backgroundWithOpacity: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});
