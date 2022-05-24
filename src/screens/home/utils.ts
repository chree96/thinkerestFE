import {UserPost} from '../types';

export const getMappedData = (post: UserPost) => {
  console.log('post', post);

  const {
    starRating,
    contentImg,
    title,
    genre,
    review,
    friendCounter,
    worldCounter,
    user,
    userImg,
    contentType,
    id,
  } = post;

  const postData = {
    contentImg: {uri: contentImg},
    genre,
    review,
    id,
  };

  const userData = {
    user,
    userImg: {uri: userImg},
    rating: starRating,
    contentTitle: title,
    contentType,
  };

  return {postData, userData};
};
