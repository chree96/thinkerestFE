import React, {useMemo} from 'react';
import {View} from 'react-native';
import {styles} from './ReviewItem.styles';
import {shadows} from '../../../style';
import UserShareInfo from '../user-share-info';
import getButtonActions from '../../../utils/post/button-actions';

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
  const buttonActions = useMemo(() => getButtonActions(true), []);

  return (
    <View style={[styles.container, shadows.little, style]}>
      <UserShareInfo
        user={user}
        userImg={{uri: userImg}}
        withoutAction
        review={review}
        style={styles.userInfo}
      />
      <View style={styles.buttonsContainer}>{buttonActions}</View>
    </View>
  );
}