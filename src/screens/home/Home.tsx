import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {ContentType} from '../../types/user-actions';
import {styles} from './Home.styles';
import Post from '../../components/organisms/post';
import {useEffect} from 'react';
import {useState} from 'react';
import {colors} from '../../style';

interface PostsListInterface {
  getUserPosts: () => void;
  userPosts?: [] | null;
  isLoading?: boolean;
}

export default function Home({
  getUserPosts,
  userPosts,
  isLoading,
}: PostsListInterface) {
  const [postsList, setPostsList] = useState(userPosts);
  useEffect(() => {
    getUserPosts();
  }, []);

  return isLoading ? (
    <View style={[styles.listContainer, styles.loaderContainer]}>
      <ActivityIndicator size="large" color={colors.cherryRed} />
    </View>
  ) : (
    <View style={styles.listContainer}>
      <Post
        user={'lellodabari'}
        userImg={require('../../../assets/images/mockImages/lello.jpg')}
        contentType={ContentType.movies}
        starsReview={4}
        contentImg={require('../../../assets/images/mockImages/pulp-fiction-locandina.jpg')}
        title={'Pulp Fiction'}
        genre={'Drama/Romance'}
        review={
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }
      />
    </View>
  );
}
