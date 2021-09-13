import {Animated, Easing} from 'react-native';

// HEADER ANIMATION
const headerHeight = new Animated.Value(100);
const headerY = new Animated.Value(0);
// CONTENTS ANIMATION
const contentsHeight = new Animated.Value(40);
// LOGO ANIMATION
const logoSize = new Animated.Value(10);
const logoSizeY = new Animated.Value(10);
const logoX = new Animated.Value(0);
const logoY = new Animated.Value(0);

export const getHeaderAnimationStyles = () => {
  const headerCollapse = headerHeight.interpolate({
    inputRange: [0, 70, 100],
    outputRange: [0, 0.7, 1],
  });
  const yInterpolate = headerY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 2],
  });

  const transformHeaderCollapse = {
    transform: [{scaleY: headerCollapse}, {translateY: yInterpolate}],
  };

  const contentsCollapse = contentsHeight.interpolate({
    inputRange: [0, 25, 50],
    outputRange: [0, 0.5, 1],
  });

  const transformContent = {
    transform: [{scaleY: contentsCollapse}],
  };

  const logoCollapseX = logoSize.interpolate({
    inputRange: [0, 5, 10],
    outputRange: [0, 0.5, 1],
  });
  const logoCollapseY = logoSizeY.interpolate({
    inputRange: [0, 5, 10],
    outputRange: [0, 0.5, 1],
  });
  const logoXInterpolate = logoX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 2],
  });
  const logoYInterpolate = logoX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 2],
  });

  const transformLogo = {
    transform: [
      {scaleX: logoCollapseX},
      {scaleY: logoCollapseY},
      {translateX: logoXInterpolate},
      {translateY: logoYInterpolate},
    ],
  };

  const headerAnimationValues = {
    transformHeaderCollapse: transformHeaderCollapse,
    transformContent: transformContent,
    transformLogo: transformLogo,
  };
  return headerAnimationValues;
};

export const startCollapse = (isHiddenHeader: boolean) => {
  Animated.timing(headerHeight, {
    toValue: isHiddenHeader ? 70 : 100,
    duration: 250,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  Animated.timing(headerY, {
    toValue: isHiddenHeader ? -15 : 0,
    duration: 250,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  Animated.timing(contentsHeight, {
    toValue: isHiddenHeader ? 0 : 50,
    duration: 250,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  Animated.timing(logoSize, {
    toValue: isHiddenHeader ? 11 : 10,
    duration: 250,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();
  Animated.timing(logoSizeY, {
    toValue: isHiddenHeader ? 14 : 10,
    duration: 250,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  Animated.timing(logoX, {
    toValue: isHiddenHeader ? 15 : 0,
    duration: 250,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();
  Animated.timing(logoY, {
    toValue: isHiddenHeader ? 15 : 0,
    duration: 250,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();
};
