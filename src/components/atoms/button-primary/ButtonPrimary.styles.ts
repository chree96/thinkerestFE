import {StyleSheet} from 'react-native';
import {colors, families, sizes} from '../../../style';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontFamily: families.bold,
    fontSize: sizes.cardTitle,
    color: colors.whiteSmoke,
    textAlign: 'center',
  },
});
