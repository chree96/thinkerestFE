import {StyleSheet} from 'react-native';
import {colors} from '../../../style';
import {useDimensions} from 'react-native-hooks';

const {width: screenWidth, height: screenHeight} = useDimensions().window;

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.codGrey,
    // backgroundColor: colors.solidWhite,
    borderRadius: 10,
    flex: 1,
    maxHeight: screenHeight * 0.45,
    marginHorizontal: 18,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  imgContainer: {
    width: screenWidth * 0.35,
    maxHeight: 180,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 20,
  },
  imgStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  marginNegative: {
    marginTop: -4,
  },
  contentInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    width: '100%',
    justifyContent: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  btnActionsContainer: {
    flex: 1,
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  reviewContainer: {
    backgroundColor: colors.tundora,
    // backgroundColor: colors.lightGrey,
    padding: 10,
    borderRadius: 10,
  },
  gradientStyle: {
    zIndex: 10,
    borderRadius: 10,
    height: 12,
    marginTop: -12,
  },
});
