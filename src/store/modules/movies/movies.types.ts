export interface MoviesState {
  movies: any;
  singleMovie: any;
  topRatedMovies: SearchMovie[];
  recommendedMovies: SearchMovie[];
  moviesByGenre: MoviesByGenre;
  isLoading: boolean;
  error: boolean | null;
}

export interface MoviesByGenre {
  action: SearchMovie[];
  adventure: SearchMovie[];
  romantic: SearchMovie[];
}

export interface SearchMovie {
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
