import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {ContentType} from '../../types/user-actions';
import {styles} from './Home.styles';
import Post from '../../components/organisms/post';
import {useEffect} from 'react';
import {colors} from '../../style';
import {FlatList} from 'react-native-gesture-handler';
import {useCallback} from 'react';

interface PostsListInterface {
  getHomePosts: () => void;
  userPosts?: [] | null;
  isLoading?: boolean;
}

export default function Home({
  getHomePosts,
  userPosts,
  isLoading,
}: PostsListInterface) {
  useEffect(() => {
    getHomePosts();
  }, []);

  const renderPosts = useCallback((post: any) => {
    return (
      <Post
        user={post?.item?.user}
        userImg={require('../../../assets/images/mockImages/lello.jpg')}
        contentType={post?.item?.contentType as ContentType}
        starRating={post?.item?.starRating}
        contentImg={require('../../../assets/images/mockImages/pulp-fiction-locandina.jpg')}
        title={post?.item?.title}
        genre={post?.item?.genre}
        review={post?.item?.review}
        friendCounter={post?.item?.friendCounter}
        worldCounter={post?.item?.worldCounter}
      />
    );
  }, []);

  return isLoading ? (
    <View style={[styles.listContainer, styles.loaderContainer]}>
      <ActivityIndicator size="large" color={colors.cherryRed} />
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
