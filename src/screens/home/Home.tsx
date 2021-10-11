import React, {memo, useRef} from 'react';
import {View} from 'react-native';
import {ContentType} from '../../types/user-actions';
import {styles} from './Home.styles';
import Post from '../../components/organisms/post';
import {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useCallback} from 'react';
import {NavigationStackProp} from 'react-navigation-stack';
import {globalStyle} from '../../style';
import AnimatedLoader from 'react-native-animated-loader';

interface PostsListProps {
  getHomePosts: () => void;
  setHiddenHeader: (payload: any) => void;
  userPosts?: [] | null;
  contentColor: string;
  isLoading?: boolean;
  isHiddenHeader?: boolean;
  navigation: NavigationStackProp;
}

const Home = memo<PostsListProps>(
  ({
    getHomePosts,
    setHiddenHeader,
    userPosts,
    contentColor,
    isLoading,
    isHiddenHeader,
    navigation,
  }) => {
    const scrollY = useRef(0);

    useEffect(() => {
      getHomePosts();
      setHiddenHeader(false);
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
      <View style={[styles.listContainer, globalStyle.loaderContainer]}>
        <AnimatedLoader
          visible={true}
          // overlayColor="rgba(255,255,255,0.75)"
          source={require('../../../assets/animations/loader-bars-mono-color.json')}
          animationStyle={globalStyle.lottieLoader}
          speed={1}
        />
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
  },
);

export default Home;
