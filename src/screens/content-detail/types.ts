import {
  ContentDetails,
  ContentReview,
} from '../../store/modules/contents/contents.types';

export interface ContentDetailProps {
  navigation: any;
  contentColor: string;
  contentDetail: ContentDetails;
  friendsContentReviews: ContentReview[];
  peopleContentReviews: ContentReview[];
  isLoading: boolean;
  isLoadingReviews: boolean;
  retrieveContentReviews: (payload: string) => void;
}
