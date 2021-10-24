import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, globalStyle, shadows} from '../../../style';
import {styles} from './PillButton.styles';
import IconSvg from '../icons-svg';
import {Text, View} from 'react-native';
import {ContentType} from '../../../types/user-actions';
import getSecondaryContentColor from '../../../utils/content/get-secondary-content-color';

interface PillButtonProps {
  iconName: string;
  iconSize?: number;
  color?: string;
  contentType?: ContentType;
  text: string;
  style?: any;
  onPress: () => void;
}

export default function PillButton({
  iconName,
  iconSize,
  color = colors.solidBlack,
  contentType,
  text,
  style,
  onPress,
}: PillButtonProps) {
  const bgColor = useMemo(
    () =>
      contentType ? getSecondaryContentColor(contentType) : colors.solidWhite,
    [contentType],
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        shadows.medium,
        {backgroundColor: bgColor},
        style,
      ]}>
      <View style={styles.iconContainer}>
        <IconSvg iconName={iconName} color={color} width={iconSize || 25} />
      </View>
      <Text
        style={[
          globalStyle.textBold,
          globalStyle.textExtraSmallSize,
          {color: color},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
