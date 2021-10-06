import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import Search from './Search';
import * as navigationActions from '../../store/modules/navigation/navigation.action';
import * as moviesActions from '../../store/modules/movies/movies.action';
import * as contentsSelector from '../../store/modules/contents/contents.selector';
import * as moviesSelector from '../../store/modules/movies/movies.selector';

const mapStateToProps = (state: any) => ({
  searchedContentPreview:
    contentsSelector.retrieveSearchedContentsPreview(state),
  isLoading: contentsSelector.retrieveContentsLoader(state),
  topRatedMovies: moviesSelector.retrieveTopRatedMovies(state),
  moviesByGenre: moviesSelector.retrieveMoviesByGenre(state),
  recommendedMovies: moviesSelector.retrieveRecommendedMovies(state),
  isLoadingMovies: moviesSelector.retrieveMoviesLoader(state),
  contentColor: contentsSelector.retrieveContentColor(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setHiddenHeader: (payload: any) => {
    dispatch(navigationActions.setHiddenHeader(payload) as any);
  },
  getSearchSectionMovies: () => {
    dispatch(moviesActions.getSearchSectionMovies() as any);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
