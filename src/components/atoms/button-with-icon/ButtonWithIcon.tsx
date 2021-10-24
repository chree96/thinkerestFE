import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, shadows} from '../../../style';
import {styles} from './ButtonWithIcon.styles';
import IconSvg from '../icons-svg';

interface ButtonWithIconProps {
  iconName: string;
  iconColor?: string;
  iconSize?: number;
  width?: number | string;
  height?: number | string;
  noBackgroundColor?: boolean;
  style?: any;
  onPress: () => void;
}

export default function ButtonWithIcon({
  iconName,
  iconColor = colors.solidWhite,
  iconSize,
  width = 40,
  height = 40,
  noBackgroundColor,
  style,
  onPress,
}: ButtonWithIconProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        {
          width: width,
          height: height,
        },
        noBackgroundColor ? styles.noBackground : shadows.medium,
        style,
      ]}>
      <IconSvg iconName={iconName} color={iconColor} width={iconSize || 25} />
    </TouchableOpacity>
  );
}
