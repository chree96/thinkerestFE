import {StyleSheet} from 'react-native';
import {colors, families, shadows, sizes} from '../../style';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.solidBlack,
  },
  obscuredView: {
    width: '100%',
    height: 24,
    position: 'absolute',
    bottom: 0,
    zIndex: 9,
    marginTop: -20,
    justifyContent: 'flex-end',
  },
  titleText: {
    fontFamily: families.bold,
    color: colors.whiteSmoke,
    fontSize: sizes.cardTitle,
  },
  infoContainer: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    maxHeight: 100,
    paddingHorizontal: 20,
  },
  reviewContainer: {
    paddingBottom: 40,
  },
  tabBarContainer: {
    flex: 1,
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
  tabBarTextContainer: {
    flex: 1,
    height: 40,
    backgroundColor: 'red',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabBarCustom: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
