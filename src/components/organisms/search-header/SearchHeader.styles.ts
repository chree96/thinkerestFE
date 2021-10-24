import {StyleSheet} from 'react-native';
import {colors} from '../../../style';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    maxHeight: 140,
    backgroundColor: colors.solidBlack,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginTop: 18,
  },
  textInputContainer: {
    flex: 1,
    height: 42,
    alignSelf: 'center',
    marginBottom: 12,
    color: colors.shadowLight,
  },
  textInput: {
    height: 42,
    paddingLeft: 12,
    borderRadius: 10,
    backgroundColor: colors.mineShaft,
    borderBottomWidth: 0,
    color: colors.shadowLight,
  },
  inputStyle: {
    marginTop: 5,
    color: colors.shadowLight,
  },
});
