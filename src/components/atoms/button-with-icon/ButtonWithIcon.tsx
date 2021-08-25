import React from 'react';
import {TouchableOpacity} from 'react-native';
import {shadows} from '../../../style';
import {styles} from './ButtonWithIcon.styles';
import IconSvg from '../icons-svg';

interface ButtonWithIconProps {
  width?: number;
  iconColor: string;
  iconName: string;
  onPress: () => void;
}

export default function ButtonWithIcon({
  width = 40,
  iconColor,
  iconName,
  onPress,
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
      ]}>
      <IconSvg iconName={iconName} color={iconColor} width={25} />
    </TouchableOpacity>
  );
}
