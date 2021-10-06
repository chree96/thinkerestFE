import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './HeaderText.styles';
interface HeaderTextProps {
  text: string;
  style?: any;
}

export default function HeaderText({text, style}: HeaderTextProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
