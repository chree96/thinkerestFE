import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ReviewItem.styles';
import {shadows} from '../../../style';
import ImageCircleContainer from '../../atoms/image-circle-container';

interface ReviewItemProps {
  user: string;
  userImg: string;
  review: string;
  style?: any;
}

export default function ReviewItem({
  user,
  userImg,
  review,
  style,
}: ReviewItemProps) {
  return (
    <View style={[styles.container, shadows.little, style]}>
      <ImageCircleContainer
        img={{uri: userImg}}
        style={styles.imgStyle}
        width={54}
      />
      <View style={styles.reviewContainer}>
        <Text style={styles.userText}>{user}</Text>
        <Text style={styles.reviewText}>{review}</Text>
      </View>
    </View>
  );
}
