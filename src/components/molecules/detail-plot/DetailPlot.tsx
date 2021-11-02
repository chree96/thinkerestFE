import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './DetailPlot.styles';
import {globalStyle} from '../../../style/globalStyle';
import {colors} from '../../../style';

interface DetailPlotProps {
  plot: string;
  style?: any;
}

export default function DetailPlot({plot, style}: DetailPlotProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[globalStyle.textBold, globalStyle.textCardTitleSize]}>
        Plot summary
      </Text>
      <Text
        style={[
          globalStyle.textSmallishSize,
          globalStyle.textLight,
          {color: colors.lightGrey},
        ]}>
        {plot}
      </Text>
    </View>
  );
}
