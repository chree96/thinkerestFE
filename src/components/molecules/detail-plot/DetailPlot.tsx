import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './DetailPlot.styles';

interface DetailPlotProps {
  plot: string;
  style?: any;
}

export default function DetailPlot({plot, style}: DetailPlotProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Plot summary</Text>
      <Text style={styles.plot}>{plot}</Text>
    </View>
  );
}
