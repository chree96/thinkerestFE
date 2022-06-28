import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './ContentReviewsTabBar.styles';
import {useDimensions} from 'react-native-hooks';
import IconWithText from '../icon-with-text';
import {colors} from '../../../style';

interface ContentReviewsTabBarProps {
  activeIndex: 0 | 1;
  contentColor: string;
  onFriendsPress: () => void;
  onGlobalPress: () => void;
  style?: any;
}

export default function ContentReviewsTabBar({
  activeIndex,
  contentColor,
  onFriendsPress,
  onGlobalPress,
  style,
}: ContentReviewsTabBarProps) {
  const {width: screenWidth} = useDimensions().window;

  return (
    <View
      style={[
        styles.tabBarContainer,
        {
          width: screenWidth * 0.92,
        },
        style,
      ]}>
      <TouchableOpacity onPress={onFriendsPress} style={styles.tabBarCustom}>
        <IconWithText
          svgName={'people'}
          textStyle={
            activeIndex === 0
              ? {
                  color: contentColor,
                }
              : null
          }
          width={24}
          text={'7'}
          svgColor={activeIndex === 0 ? contentColor : colors.solidWhite}
          style={styles.buttonContainer}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onGlobalPress} style={styles.tabBarCustom}>
        <IconWithText
          svgName={'world'}
          textStyle={
            activeIndex === 1
              ? {
                  color: contentColor,
                }
              : null
          }
          svgColor={activeIndex === 1 ? contentColor : colors.solidWhite}
          style={styles.buttonContainer}
          text={'10k'}
        />
      </TouchableOpacity>
    </View>
  );
}
