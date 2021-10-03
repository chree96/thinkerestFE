export interface MoviesState {
  movies: any;
  singleMovie: any;
  topRatedMovies: TopRatedMovie[];
  isLoading: boolean;
  error: boolean | null;
}

export interface TopRatedMovie {
  id: string;
  image: {
    height: number;
    width: number;
    id: string;
    url: string;
  };
  runningTimeInMinutes: number;
  title: string;
  titleType: string;
  year: number;
}
