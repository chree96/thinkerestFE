import {colors} from '../../../style';
import {ContentType} from '../../../types/user-actions';

export const getSecondaryContentColor = (content: ContentType) => {
  switch (content) {
    case ContentType.movies:
      return colors.cherryRedLight;
    case ContentType.tvSeries:
      return colors.malibuLight;
    case ContentType.games:
      return colors.electricVioletLight;
    case ContentType.books:
      return colors.yellowLight;
    default:
      return colors.whiteSmoke;
  }
};
