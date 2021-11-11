import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalStyle, shadows} from '../../../style';
import {Text} from 'react-native';
import {styles} from './ButtonPrimary.styles';

interface ButtonPrimaryProps {
  text: string;
  bgColor: string;
  style?: any;
  onPress: () => void;
}

export default function ButtonPrimary({
  text,
  bgColor,
  style,
  onPress,
}: ButtonPrimaryProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: bgColor},
        shadows.medium,
        style,
      ]}>
      <Text
        style={[
          globalStyle.textBold,
          globalStyle.textCardTitleSize,
          styles.text,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
