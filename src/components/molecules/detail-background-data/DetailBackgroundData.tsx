import React from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './DetailBackgroundData.styles';

interface DetailShareDataProps {
  data: {
    title: string;
    genre: string;
    year: number;
    duration: string;
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
      <Text style={styles.title}>{data?.title}</Text>
      <Text style={styles.description}>
        {data?.year + ' · ' + data?.genre + ' · ' + data?.duration}
      </Text>
    </LinearGradient>
  );
}
