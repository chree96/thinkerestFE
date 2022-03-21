import React from 'react';
import {Text, View} from 'react-native';
import {colors, sizes} from '../../../style';
import {styles} from './IconWithText.styles';
import IconSvg from '../../atoms/icons-svg';

interface IconWithTextProps {
  svgName: string;
  text: string | number;
  svgColor?: string | symbol;
  width?: number;
  style?: any;
  textStyle?: any;
}

export default function IconWithText({
  svgName,
  text,
  svgColor,
  width,
  style,
  textStyle,
}: IconWithTextProps) {
  return (
    <View style={[styles.container, style]}>
      <IconSvg
        iconName={svgName}
        color={svgColor || colors.mineShaft}
        width={width || sizes.large}
      />
      <Text style={[styles.iconText, textStyle]}>{text}</Text>
    </View>
  );
}
