import {colors} from '../../../style';
import {ContentType} from '../../../types/user-actions';
import getContentColor from '../../../utils/content/get-content-color';
import {ContentsActionType} from './contents.const';
import {ContentsState} from './contents.types';

const initialState: ContentsState = {
  searchSectionContents: {
    general: {
      topRated: [],
    },
    movies: {
      topRated: [],
      recommended: [],
      byGenre: {
        action: [],
        adventure: [],
        romantic: [],
      },
    },
    tvSeries: {
      topRated: [],
      recommended: [],
      byGenre: [],
    },
    games: {
      topRated: [],
      recommended: [],
      byGenre: [],
    },
    books: {
      topRated: [],
      recommended: [],
      byGenre: [],
    },
  },
  searchedContentsPreview: [],
  contentDetail: {
    id: '',
    image: {
      height: 0,
      width: 0,
      id: '',
      url: '',
    },
    runningTimeInMinutes: 0,
    title: '',
    titleType: '',
    year: 0,
    genre: '',
    peopleShare: 0,
    friendsShare: 0,
    peopleRate: 0,
    friendRate: 0,
    plot: '',
  },
  isLoading: false,
  error: null,
  contentType: ContentType.general,
  contentColor: colors.solidWhite,
};

const contentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ContentsActionType.SEARCH_CONTENT:
      return Object.assign({}, state, {isLoading: true});
    case ContentsActionType.RETRIEVE_SEARCH_SECTION_CONTENT:
      return Object.assign({}, state, {isLoading: true});
    case ContentsActionType.STORE_SEARCH_SECTION_CONTENT:
      const {contentType, results} = action.payload;

      const searchSectionContents = {
        ...state.searchSectionContents,
      };
      searchSectionContents[contentType] = results;

      return Object.assign({}, state, {
        searchSectionContents: searchSectionContents,
        isLoading: false,
      });
    case ContentsActionType.STORE_SEARCHED_CONTENT_PREVIEW:
      return Object.assign({}, state, {
        searchedContentsPreview: action.payload,
        isLoading: false,
      });
    case ContentsActionType.RETRIEVE_SEARCH_CONTENT_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        isLoading: false,
      });
    case ContentsActionType.SET_CONTENT_TYPE:
      const content = action.payload as ContentType;
      return Object.assign({}, state, {
        contentType: content,
        contentColor: getContentColor(content),
      });
    case ContentsActionType.RETRIEVE_CONTENT_DETAIL:
      return Object.assign({}, state, {isLoading: true}); //FARE ACTION LOADER?
    case ContentsActionType.STORE_CONTENT_DETAIL:
      return Object.assign({}, state, {
        contentDetail: action.payload,
        isLoading: false,
      });
    default:
      return state;
  }
};

export default contentsReducer;
