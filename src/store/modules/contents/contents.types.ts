import {ContentType} from '../../../types/user-actions';

export interface ContentsState {
  searchSectionContents: {
    general: {
      topRated: any;
    };
    movies: {
      topRated: SearchContent[];
      recommended: SearchContent[];
      byGenre: ContentByGenre;
    };
    tvSeries: {
      topRated: any;
      recommended: any;
      byGenre: any;
    };
    games: {
      topRated: any;
      recommended: any;
      byGenre: any;
    };
    books: {
      topRated: any;
      recommended: any;
      byGenre: any;
    };
  };
  searchedContentsPreview: [] | null;
  contentDetail: ContentDetails;
  isLoading: boolean;
  error: boolean | null;
  contentType: ContentType;
  contentColor: string;
}

export interface ContentByGenre {
  action: SearchContent[];
  adventure: SearchContent[];
  romantic: SearchContent[];
}

export interface SearchContent {
  id: string;
  image: {
    height: number;
    width: number;
    id: string;
    url: string;
  };
  runningTimeInMinutes?: number;
  title: string;
  titleType?: string;
  year: number;
}

export interface ContentDetails extends SearchContent {
  genre: string;
  peopleShare: number;
  friendsShare: number;
  peopleRate: number;
  friendRate: number;
  plot: string;
}
