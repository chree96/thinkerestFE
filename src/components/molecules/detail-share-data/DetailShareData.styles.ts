import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../../style';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 46,
    borderRadius: 20,
    backgroundColor: colors.codGrey,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    alignContent: 'center',
    marginVertical: 10,
    marginHorizontal: 4,
  },
  text: {
    marginLeft: 8,
    fontSize: sizes.smallish,
  },
});
