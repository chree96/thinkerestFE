import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './ImageCircleContainer.styles';

interface ImageCircleContainerProps {
  img: any;
  style?: any;
  width?: number;
}

export default function ImageCircleContainer({
  width = 35,
  style,
  img,
}: ImageCircleContainerProps) {
  return (
    <View
      style={[
        styles.circleContainer,
        style,
        {
          width: width,
          height: width,
        },
      ]}>
      <Image source={img} style={styles.imgStyle} />
    </View>
  );
}
