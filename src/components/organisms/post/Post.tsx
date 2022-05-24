import React, {memo} from 'react';
import {View} from 'react-native';
import UserShareInfo, {
  ShareInfo,
} from '../../molecules/user-share-info/UserShareInfo';
import PostCard from '../../molecules/post-card';
import {styles} from './Post.styles';
import {useDimensions} from 'react-native-hooks';

interface PostProps {
  postData: {
    contentImg: any;
    genre: string;
    review: string;
  };
  userData: ShareInfo;
  contentColor: string;
  onPress: () => void;
  style?: any;
}

const Post = memo<PostProps>(
  ({contentColor, postData, userData, onPress, style}) => {
    const {height: screenHeight} = useDimensions().window;

    return (
      <View
        style={[styles.listContainer, {minHeight: screenHeight * 0.6}, style]}>
        <UserShareInfo shareInfo={userData} />
        <PostCard
          postData={postData}
          onPress={onPress}
          contentColor={contentColor}
        />
      </View>
    );
  },
);

export default Post;
