import React from 'react';
import {View} from 'react-native';
import ButtonWithIcon from '../../atoms/button-with-icon';
import {styles} from './DetailBackgroundHeader.styles';

interface DetailBackgroundHeaderProps {
  onGoBack: () => void;
  onAddToWatchlist: () => void;
  style?: any;
}

export default function DetailBackgroundHeader({
  onGoBack,
  onAddToWatchlist,
  style,
}: DetailBackgroundHeaderProps) {
  return (
    <View style={[styles.buttonsContainer, style]}>
      <ButtonWithIcon
        iconName={'arrowBack'}
        backgroundWithOpacity
        width={50}
        onPress={onGoBack}
      />
      <ButtonWithIcon
        iconName={'timer'}
        backgroundWithOpacity
        width={50}
        onPress={onAddToWatchlist}
      />
    </View>
  );
}
