import React, {memo} from 'react';
import {View} from 'react-native';
import UserShareInfo, {
  ShareInfo,
} from '../../molecules/user-share-info/UserShareInfo';
import PostCard from '../../molecules/post-card';
import {styles} from './Post.styles';

interface PostProps {
  postData: {
    contentImg: any;
    genre: string;
    review: string;
  };
  userData: ShareInfo;
  contentColor: string;
  style?: any;
}

const Post = memo<PostProps>(({contentColor, postData, userData, style}) => {
  return (
    <View style={[styles.listContainer, style]}>
      <UserShareInfo shareInfo={userData} />
      <PostCard postData={postData} contentColor={contentColor} />
    </View>
  );
});

export default Post;
