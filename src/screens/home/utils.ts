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
    contentImg: {uri: contentImg},
    genre,
    review,
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
