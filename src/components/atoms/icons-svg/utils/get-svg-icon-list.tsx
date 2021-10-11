import React from 'react';
import {
  Book,
  Cloud,
  Gamepad,
  Generic,
  Lens,
  Movie,
  MovieOutline,
  People,
  Share,
  Television,
  TelevisionOutline,
  World,
} from '../../svg';

export const getSvgIconList = (width?: number, color?: string | symbol) => {
  return {
    //ADD ALL SVG HERE WITH CUSTOM KEY TO CALL
    share: <Share width={width || 35} height={width || 35} fill={color} />,
    cloud: <Cloud width={width || 35} height={width || 35} fill={color} />,
    world: <World width={width || 35} height={width || 35} fill={color} />,
    people: <People width={width || 35} height={width || 35} fill={color} />,
    movies: <Movie fill={color} />,
    books: <Book fill={color} />,
    tvSeries: <Television fill={color} />,
    games: <Gamepad fill={color} />,
    general: <Generic fill={color} />,
    lens: <Lens fill={color} />,
    tvSeriesOutline: <TelevisionOutline fill={color} />,
    moviesOutline: <MovieOutline fill={color} />,
  };
};
