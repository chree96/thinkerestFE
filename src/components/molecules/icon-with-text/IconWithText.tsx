import React from 'react';
import {Text, View} from 'react-native';
import {colors, globalStyle, sizes} from '../../../style';
import {styles} from './IconWithText.styles';
import IconSvg from '../../atoms/icons-svg';

interface IconWithTextProps {
  svgName: string;
  text: string;
  svgColor?: string | symbol;
  width?: number;
  style?: any;
}

export default function IconWithText({
  svgName,
  text,
  svgColor,
  width,
  style,
}: IconWithTextProps) {
  return (
    <View style={[styles.container, style]}>
      <IconSvg
        iconName={svgName}
        color={svgColor || colors.mineShaft}
        width={width || sizes.large}
      />
      <Text
        style={[
          globalStyle.textBold,
          globalStyle.textSmallSize,
          styles.textMargin,
        ]}>
        {text}
      </Text>
    </View>
  );
}