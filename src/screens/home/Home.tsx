import React, {memo, useRef} from 'react';
import {View} from 'react-native';
import {styles} from './Home.styles';
import Post from '../../components/organisms/post';
import {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useCallback} from 'react';
import {NavigationStackProp} from 'react-navigation-stack';
import {globalStyle} from '../../style';
import AnimatedLoader from 'react-native-animated-loader';
import {getMappedData} from './utils';
import {UserPost} from '../types';
import IconSvg from '../../components/atoms/icons-svg';

interface PostsListProps {
  getHomePosts: () => void;
  setHiddenHeader: (payload: any) => void;
  retrieveContentDetail: (payload: string) => void;
  userPosts?: UserPost[] | null;
  contentColor: string;
  isLoading?: boolean;
  isHiddenHeader?: boolean;
  navigation: NavigationStackProp;
}

const Home = memo<PostsListProps>(
  ({
    getHomePosts,
    setHiddenHeader,
    retrieveContentDetail,
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

    const goToContentDetail = useCallback(
      contentId => {
        retrieveContentDetail(contentId);
        navigation.navigate('ContentDetail');
      },
      [navigation, retrieveContentDetail],
    );

    const renderPosts = useCallback(
      ({item}) => {
        const {postData, userData} = getMappedData(item);

        return (
          <Post
            postData={postData}
            userData={userData}
            contentColor={contentColor}
            onPress={() => goToContentDetail(postData?.id)}
          />
        );
      },
      [contentColor, goToContentDetail],
    );

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
          source={require('../../../assets/animations/loader-bars-mono-color.json')}
          animationStyle={globalStyle.lottieLoader}
          speed={1}
        />
      </View>
    ) : (
      <View style={styles.listContainer}>
        <FlatList
          renderItem={renderPosts}
          data={userPosts}
          contentContainerStyle={styles.paddingTopHeader}
          keyExtractor={item => 'post-' + item?.id}
          onScroll={event => {
            setHeaderVisibility(event.nativeEvent.contentOffset.y);
          }}
          onScrollBeginDrag={event =>
            (scrollY.current = event.nativeEvent.contentOffset.y)
          }
          scrollEventThrottle={16}
        />
        <View
          style={{
            width: 50,
            height: 50,
            position: 'absolute',
            bottom: 40,
            right: 18,
            borderRadius: 25,
            backgroundColor: 'rgba(256, 256, 256, 0.7)',
            justifyContent: 'center',
          }}>
          <IconSvg iconName={'controls'} />
        </View>
      </View>
    );
  },
);

export default Home;
