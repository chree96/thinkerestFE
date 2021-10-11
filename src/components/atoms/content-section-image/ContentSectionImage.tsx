import React from 'react';
import {Image} from 'react-native';
import {styles} from './ContentSectionImage.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ContentSectionImageProps {
  contentSectionImg: any;
  onPress: () => void;
  style?: any;
}
export default function ContentSectionImage({
  contentSectionImg,
  onPress,
  style,
}: ContentSectionImageProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.imageContainer, style]}>
      <Image source={contentSectionImg} style={styles.image} />
    </TouchableOpacity>
  );
}
