import React, {useRef} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {ContentType} from '../../types/user-actions';
import {styles} from './Home.styles';
import Post from '../../components/organisms/post';
import {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useCallback} from 'react';
import {NavigationStackProp} from 'react-navigation-stack';

interface PostsListInterface {
  getHomePosts: () => void;
  setHiddenHeader: (payload: any) => void;
  userPosts?: [] | null;
  contentColor: string;
  isLoading?: boolean;
  isHiddenHeader?: boolean;
  navigation: NavigationStackProp;
}

export default function Home({
  getHomePosts,
  setHiddenHeader,
  userPosts,
  contentColor,
  isLoading,
  isHiddenHeader,
  navigation,
}: PostsListInterface) {
  const scrollY = useRef(0);

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

  const setHeaderVisibility = useCallback(
    scroll => {
      if (scroll > scrollY.current && !isHiddenHeader) {
        setHiddenHeader(true);
      } else if (scroll < scrollY.current && isHiddenHeader) {
        setHiddenHeader(false);
      }
    },
    [isHiddenHeader, scrollY, setHiddenHeader],
  );

  return isLoading ? (
    <View style={[styles.listContainer, styles.loaderContainer]}>
      <ActivityIndicator size="large" color={contentColor} />
    </View>
  ) : (
    <View
      style={[
        styles.listContainer,
        isHiddenHeader
          ? styles.paddingTopHiddenHeader
          : styles.paddingTopHeader,
      ]}>
      <FlatList
        renderItem={renderPosts}
        data={userPosts}
        keyExtractor={item => 'post-' + item?.id}
        onScroll={event => {
          setHeaderVisibility(event.nativeEvent.contentOffset.y);
        }}
        onScrollBeginDrag={event =>
          (scrollY.current = event.nativeEvent.contentOffset.y)
        }
        scrollEventThrottle={16}
      />
    </View>
  );
}
