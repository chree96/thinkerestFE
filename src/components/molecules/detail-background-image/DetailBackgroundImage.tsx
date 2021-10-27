import React, {ReactNode} from 'react';
import {ImageBackground} from 'react-native';
import {styles} from './DetailBackgroundImage.styles';
import {useDimensions} from 'react-native-hooks';

interface DetailBackgroundImageProps {
  contentDetailImg: any;
  children?: ReactNode;
  style?: any;
}

export default function DetailBackgroundImage({
  contentDetailImg,
  children,
  style,
}: DetailBackgroundImageProps) {
  const {width: screenWidth, height: screenHeight} = useDimensions().window;

  return (
    <ImageBackground
      source={contentDetailImg}
      style={[
        styles.containerImage,
        {
          height: screenHeight * 0.5,
          width: screenWidth,
        },
        style,
      ]}
      imageStyle={[
        styles.image,
        {
          height: screenHeight * 0.85,
        },
      ]}>
      {children}
    </ImageBackground>
  );
}
