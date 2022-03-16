import React from 'react';
import {Book, Gamepad, Movie, Television} from '../../components/atoms/svg';
import {colors, sizes} from '../../style';
import {ContentType} from '../../types/user-actions';

const getContentIcon = (content: ContentType, width?: number) => {
  switch (content) {
    case ContentType.movies:
      return <Movie fill={colors.cherryRed} width={width || sizes.larger} />;
    case ContentType.tvSeries:
      return <Television fill={colors.malibu} width={width || sizes.larger} />;
    case ContentType.games:
      return (
        <Gamepad fill={colors.electricViolet} width={width || sizes.larger} />
      );
    case ContentType.books:
      return <Book fill={colors.yellow} width={width || sizes.larger} />;
    default:
      return colors.solidWhite;
  }
};

export default getContentIcon;
