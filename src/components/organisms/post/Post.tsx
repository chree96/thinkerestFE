import React from 'react';
import {TouchableOpacity, View} from 'react-native';
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
  onPress: () => void;
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
  onPress,
}: PostProps) {
  return (
    <View style={[styles.listContainer, style]}>
      <UserShareInfo user={user} userImg={userImg} contentType={contentType} />
      <TouchableOpacity
        onPress={() => onPress()}
        style={{flex: 1, backgroundColor: 'red'}}>
        <PostCard
          starsReview={starsReview}
          contentImg={contentImg}
          title={title}
          genre={genre}
          review={review}
        />
      </TouchableOpacity>
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
    </View>
  );
}
