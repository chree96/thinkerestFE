import React from 'react';
import {View} from 'react-native';
import {ContentType} from '../../types/user-actions';
import {styles} from './Home.styles';
import Post from '../../components/organisms/post';
import {useEffect} from 'react';
import {useState} from 'react';
import {connect} from 'react-redux';
import * as postsSelector from '../../store/modules/posts/posts.selector';

interface PostsListInterface {
  getUserPosts: () => void;
  userPosts?: [] | null;
}

function Home({getUserPosts, userPosts}: PostsListInterface) {
  useEffect(() => {
    getUserPosts();
  }, []);
  useEffect(() => {
    console.log('userPosts', userPosts);
  }, [userPosts]);

  // RECUPERARE IN QUESTA SCHERMATA TUTTE LE INFO CHE CI SERVONO
  return (
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
        onPress={getUserPosts}
      />
    </View>
  );
}

const mapStateToProps = (state: any) => ({
  userPosts: postsSelector.retrieveUserPosts(state),
});

export default connect(mapStateToProps, null)(Home);
