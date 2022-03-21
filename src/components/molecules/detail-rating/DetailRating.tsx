import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './DetailRating.styles';
import RatingBox from '../rating-box';
import TextButton from '../../atoms/text-button';

interface DetailRatingProps {
  onMorePress: () => void;
  rate: number;
  style?: any;
}

export default function DetailRating({
  rate,
  onMorePress,
  style,
}: DetailRatingProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.titleGrid}>
        <Text style={styles.titleText}>{'Rating & reviews'}</Text>
        <TextButton text={'View'} onPress={onMorePress} />
      </View>
      <View style={styles.rateGrid}>
        <Text style={styles.rateText}>{rate}</Text>
        <RatingBox rate={Math.round(rate)} />
      </View>
    </View>
  );
}
