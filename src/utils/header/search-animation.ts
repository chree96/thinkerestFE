import {Animated, Easing} from 'react-native';

// HEADER ANIMATION
const searchWidth = new Animated.Value(0);
const searchX = new Animated.Value(2);

export const getSearchAnimationStyles = () => {
  const searchAnimation = searchWidth.interpolate({
    inputRange: [0, 70, 100],
    outputRange: [0, 0.7, 1],
  });
  const xInterpolate = searchX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 2],
  });

  const transformSearch = {
    transform: [{scaleX: searchAnimation}, {translateX: xInterpolate}],
  };

  const searchAnimationValues = {
    transformSearch: transformSearch,
  };
  return searchAnimationValues;
};

export const startSearchAnimation = (isExtended: boolean) => {
  Animated.timing(searchWidth, {
    toValue: isExtended ? 0 : 100,
    duration: 250,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  Animated.timing(searchX, {
    toValue: isExtended ? 0 : 2,
    duration: 250,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();
};
