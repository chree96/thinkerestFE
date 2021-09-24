import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, shadows} from '../../../style';
import {styles} from './ButtonWithIcon.styles';
import IconSvg from '../icons-svg';

interface ButtonWithIconProps {
  width?: number;
  iconColor?: string;
  iconName: string;
  onPress: () => void;
  style?: any;
}

export default function ButtonWithIcon({
  width = 40,
  iconColor = colors.solidWhite,
  iconName,
  onPress,
  style,
}: ButtonWithIconProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        shadows.medium,
        styles.buttonContainer,
        {
          width: width,
          height: width,
        },
        style,
      ]}>
      <IconSvg iconName={iconName} color={iconColor} width={25} />
    </TouchableOpacity>
  );
}
