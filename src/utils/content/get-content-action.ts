import {ContentType} from '../../types/user-actions';

const getContentAction = (content: ContentType) => {
  switch (content) {
    case ContentType.movies:
    case ContentType.tvSeries:
      return 'sta vedendo';
    case ContentType.games:
      return 'sta giocando';
    case ContentType.books:
      return 'sta leggendo';
    default:
      return 'sta vedendo';
  }
};

export default getContentAction;
