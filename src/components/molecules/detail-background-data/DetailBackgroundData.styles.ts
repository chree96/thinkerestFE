import {StyleSheet} from 'react-native';
import {colors} from '../../../style';

export const styles = StyleSheet.create({
  obscuredView: {
    width: '100%',
    height: 120,
    position: 'absolute',
    bottom: 0,
    zIndex: 9,
    paddingHorizontal: 20,
    paddingBottom: 16,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  description: {
    color: colors.lightGrey,
  },
});
