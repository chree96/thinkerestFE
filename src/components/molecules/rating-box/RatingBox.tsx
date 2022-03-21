import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './RatingBox.styles';
import StarRating from '../star-rating';

interface RatingBoxProps {
  rate: number;
  style?: any;
}

export default function RatingBox({rate, style}: RatingBoxProps) {
  return (
    <View style={[styles.starRateContainer, style]}>
      <StarRating rating={rate} />
      <Text style={styles.starRateText}>{'2123 reviews'}</Text>
    </View>
  );
}
