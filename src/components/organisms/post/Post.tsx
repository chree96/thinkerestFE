import React from 'react';
import {View} from 'react-native';
import UserShareInfo from '../../molecules/user-share-info/UserShareInfo';
import {ContentType} from '../../../types/user-actions';
import PostCard from '../../molecules/post-card';
import {styles} from './Post.styles';

interface PostProps {
  user: string;
  userImg: string;
  contentType: ContentType;
  starsReview: number;
  contentImg: any;
  title: string;
  genre: string;
  review: string;
  style?: any;
}

export default function Post({
  user,
  userImg,
  contentType,
  starsReview,
  contentImg,
  title,
  genre,
  review,
  style,
}: PostProps) {
  return (
    <View style={[styles.listContainer, style]}>
      <UserShareInfo user={user} userImg={userImg} contentType={contentType} />
      <PostCard
        starsReview={starsReview}
        contentImg={contentImg}
        title={title}
        genre={genre}
        review={review}
      />
    </View>
  );
}
