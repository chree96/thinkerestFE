import React from 'react';
import {View} from 'react-native';
import UserShareInfo from '../../molecules/user-share-info/UserShareInfo';
import {ContentType} from '../../../types/user-actions';
import PostCard from '../../molecules/post-card';
import {styles} from './Post.styles';

interface PostProps {
  user: string;
  userImg: any;
  contentType: ContentType;
  starRating: number;
  contentImg: any;
  title: string;
  genre: string;
  review: string;
  friendCounter: number;
  worldCounter: number;
  style?: any;
}

export default function Post({
  user,
  userImg,
  contentType,
  starRating,
  contentImg,
  title,
  genre,
  review,
  friendCounter,
  worldCounter,
  style,
}: PostProps) {
  return (
    <View style={[styles.listContainer, style]}>
      <UserShareInfo user={user} userImg={userImg} contentType={contentType} />
      <PostCard
        starRating={starRating}
        contentImg={contentImg}
        title={title}
        genre={genre}
        review={review}
        friendCounter={friendCounter}
        worldCounter={worldCounter}
      />
    </View>
  );
}
