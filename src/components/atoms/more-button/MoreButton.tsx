import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, globalStyle} from '../../../style';
import {Text} from 'react-native';

interface MoreButtonProps {
  textColor?: string;
  isVisible: boolean;
  isShowingMore: boolean;
  style?: any;
  onPress: () => void;
}

export default function MoreButton({
  textColor = colors.solidWhite,
  isVisible,
  isShowingMore,
  style,
  onPress,
}: MoreButtonProps) {
  const buttonText = useMemo(
    () => (isShowingMore ? 'see less' : 'see more'),
    [isShowingMore],
  );

  return isVisible ? (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text
        style={[
          globalStyle.textBold,
          globalStyle.textSmallishSize,
          {color: textColor},
        ]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  ) : null;
}
