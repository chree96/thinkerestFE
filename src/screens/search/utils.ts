import {ContentGenre, ContentSearchSections} from '../../types/content';

export const getSectionTitle = (
  section: ContentSearchSections,
  genre?: ContentGenre,
) => {
  switch (section) {
    case ContentSearchSections.GENRE:
      switch (genre) {
        case ContentGenre.ACTION:
          return 'Azione alle stelle';
        case ContentGenre.ROMANTIC:
          return 'Romantico da far schifo';
        case ContentGenre.ADVENTURE:
          return "All'arrembaggio!";
      }
      return 'Per genere';
    case ContentSearchSections.TOP_RATED:
      return 'Top rated movies';
    case ContentSearchSections.RECOMMENDED:
      return 'Consigliati';
    default:
      return '';
  }
};
