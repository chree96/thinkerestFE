import {UserPost} from '../types';

export const getMappedData = (post: UserPost) => {
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
  } = post;

  const postData = {
    starRating,
    contentImg: {uri: contentImg},
    title,
    genre,
    review,
    friendCounter,
    worldCounter,
  };

  const userData = {
    user,
    userImg: {uri: userImg},
    contentType,
  };

  return {postData, userData};
};
