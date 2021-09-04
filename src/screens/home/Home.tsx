import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {ContentType} from '../../types/user-actions';
import {styles} from './Home.styles';
import Post from '../../components/organisms/post';
import {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useCallback} from 'react';

interface PostsListInterface {
  getHomePosts: () => void;
  userPosts?: [] | null;
  contentColor: string;
  isLoading?: boolean;
}

export default function Home({
  getHomePosts,
  userPosts,
  contentColor,
  isLoading,
}: PostsListInterface) {
  useEffect(() => {
    getHomePosts();
  }, []);

  const renderPosts = useCallback(({item}) => {
    return (
      <Post
        user={item?.user}
        userImg={{uri: item?.userImg}}
        contentType={item?.contentType as ContentType}
        starRating={item?.starRating}
        contentImg={{uri: item?.contentImg}}
        title={item?.title}
        genre={item?.genre}
        review={item?.review}
        friendCounter={item?.friendCounter}
        worldCounter={item?.worldCounter}
      />
    );
  }, []);

  return isLoading ? (
    <View style={[styles.listContainer, styles.loaderContainer]}>
      <ActivityIndicator size="large" color={contentColor} />
    </View>
  ) : (
    <View style={styles.listContainer}>
      <FlatList
        renderItem={renderPosts}
        data={userPosts}
        keyExtractor={item => 'post-' + item?.id}
      />
    </View>
  );
}
