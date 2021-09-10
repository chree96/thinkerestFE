import React, {memo, useCallback} from 'react';
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

const Post = memo<PostProps>(
  ({
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
  }) => {
    const RenderPostCard = useCallback(
      () => (
        <PostCard
          starRating={starRating}
          contentImg={contentImg}
          title={title}
          genre={genre}
          review={review}
          friendCounter={friendCounter}
          worldCounter={worldCounter}
        />
      ),
      [
        contentImg,
        friendCounter,
        genre,
        review,
        starRating,
        title,
        worldCounter,
      ],
    );
    const RenderUserShareInfo = useCallback(
      () => (
        <UserShareInfo
          user={user}
          userImg={userImg}
          contentType={contentType}
        />
      ),
      [contentType, user, userImg],
    );

    return (
      <View style={[styles.listContainer, style]}>
        <RenderUserShareInfo />
        <RenderPostCard />
      </View>
    );
  },
);

export default Post;
