import React from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {globalStyle} from '../../../style/globalStyle';
import {styles} from './DetailBackgroundData.styles';

interface DetailShareDataProps {
  data: {
    title: string;
    genre: string;
    year: number;
  };
  style?: any;
}

export default function DetailBackgroundData({
  data,
  style,
}: DetailShareDataProps) {
  return (
    <LinearGradient
      colors={['rgba(0, 0, 0, 0.0)', 'rgba(0,0,0, 1)']}
      style={[styles.obscuredView, style]}>
      <Text style={[globalStyle.textBold, globalStyle.textMedLargeSize]}>
        {data?.title}
      </Text>
      <Text
        style={[
          globalStyle.textLight,
          globalStyle.textLittleMediumSize,
          styles.description,
        ]}>
        {data?.genre + ' · ' + data?.year}
      </Text>
    </LinearGradient>
  );
}
