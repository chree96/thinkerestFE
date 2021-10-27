import React from 'react';
import {View} from 'react-native';
import {styles} from './DetailShareData.styles';

interface DetailShareDataProps {
  style?: any;
}

export default function DetailShareData({style}: DetailShareDataProps) {
  return <View style={[styles.container, style]}></View>;
}
