import React, {memo, useCallback} from 'react';
import {View} from 'react-native';
import UserShareInfo from '../../molecules/user-share-info/UserShareInfo';
import {ContentType} from '../../../types/user-actions';
import PostCard from '../../molecules/post-card';
import {styles} from './Post.styles';

interface PostProps {
  postData: {
    starRating: number;
    contentImg: any;
    title: string;
    genre: string;
    review: string;
    friendCounter: number;
    worldCounter: number;
  };
  userData: {
    user: string;
    userImg: any;
    contentType: ContentType;
  };
  contentColor: string;
  style?: any;
}

const Post = memo<PostProps>(({contentColor, postData, userData, style}) => {
  const RenderPostCard = useCallback(
    () => <PostCard postData={postData} contentColor={contentColor} />,
    [contentColor, postData],
  );

  const RenderUserShareInfo = useCallback(
    () => (
      <UserShareInfo
        user={userData?.user}
        userImg={userData?.userImg}
        contentType={userData?.contentType}
      />
    ),
    [userData?.contentType, userData?.user, userData?.userImg],
  );

  return (
    <View style={[styles.listContainer, style]}>
      <RenderUserShareInfo />
      <RenderPostCard />
    </View>
  );
});

export default Post;
