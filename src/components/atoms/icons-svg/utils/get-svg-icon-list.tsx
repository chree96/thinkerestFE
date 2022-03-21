import React from 'react';
import {colors} from '../../../../style';
import {
  Airplane,
  ArrowBack,
  Book,
  Cloud,
  Gamepad,
  General,
  Hamburger,
  Lens,
  Movie,
  MovieOutline,
  People,
  Plus,
  Share,
  Star,
  Television,
  TelevisionOutline,
  Timer,
  World,
} from '../../svg';

export const getSvgIconList = (width?: number, color?: string | symbol) => {
  return {
    //ADD ALL SVG HERE WITH CUSTOM KEY TO CALL
    share: <Share width={width || 35} height={width || 35} fill={color} />,
    cloud: <Cloud width={width || 35} height={width || 35} fill={color} />,
    world: <World width={width || 35} height={width || 35} fill={color} />,
    people: <People width={width || 35} height={width || 35} fill={color} />,
    movies: <Movie fill={color || colors.cherryRed} width={width || 28} />,
    books: <Book fill={color || colors.yellow} width={width || 28} />,
    tvSeries: <Television fill={color || colors.malibu} width={width || 28} />,
    games: (
      <Gamepad fill={color || colors.electricViolet} width={width || 36} />
    ),
    general: <General fill={color} width={width || 30} />,
    lens: <Lens fill={color} width={width || 30} />,
    tvSeriesOutline: <TelevisionOutline fill={color} />,
    moviesOutline: <MovieOutline fill={color} />,
    arrowBack: <ArrowBack fill={color} width={width || 30} />,
    timer: <Timer fill={color} width={width || 30} />,
    star: <Star fill={color} width={width || 30} />,
    hamburger: <Hamburger fill={color} width={40} />,
    airplane: <Airplane fill={color} width={30} />,
    plus: <Plus fill={color} width={width || 30} />,
  };
};
