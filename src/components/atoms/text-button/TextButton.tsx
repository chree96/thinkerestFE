import React from 'react';
import {Text} from 'react-native';
import {globalStyle} from '../../../style/globalStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface TextButtonProps {
  onPress: () => void;
  text: string;
  textStyle?: any;
  style?: any;
}

export default function TextButton({
  onPress,
  text,
  textStyle,
  style,
}: TextButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[style]}>
      <Text
        style={[globalStyle.textLight, globalStyle.textSmallSize, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
