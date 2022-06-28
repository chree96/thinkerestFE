import React from 'react';
import {View} from 'react-native';
import ButtonWithIcon from '../../atoms/button-with-icon';
import {styles} from './DetailBackgroundHeader.styles';

interface DetailBackgroundHeaderProps {
  onGoBack: () => void;
  style?: any;
}

export default function DetailBackgroundHeader({
  onGoBack,
  style,
}: DetailBackgroundHeaderProps) {
  return (
    <View style={[styles.buttonsContainer, style]}>
      <ButtonWithIcon
        iconName={'close'}
        backgroundWithOpacity
        width={50}
        onPress={onGoBack}
      />
    </View>
  );
}
