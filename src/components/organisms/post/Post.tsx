import React, {memo} from 'react';
import {View} from 'react-native';
import UserShareInfo from '../../molecules/user-share-info/UserShareInfo';
import {ContentType} from '../../../types/user-actions';
import PostCard from '../../molecules/post-card';
import {styles} from './Post.styles';

interface PostProps {
  postData: {
    contentImg: any;
    genre: string;
    review: string;
  };
  userData: {
    user: string;
    userImg: any;
    rating: number;
    contentTitle: string;
    contentType: ContentType;
  };
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
