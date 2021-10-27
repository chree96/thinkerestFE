import React from 'react';
import {
  ArrowBack,
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
    movies: <Movie fill={color} width={width || 28} />,
    books: <Book fill={color} />,
    tvSeries: <Television fill={color} width={width || 28} />,
    games: <Gamepad fill={color} />,
    general: <Generic fill={color} />,
    lens: <Lens fill={color} width={width || 30} />,
    tvSeriesOutline: <TelevisionOutline fill={color} />,
    moviesOutline: <MovieOutline fill={color} />,
    arrowBack: <ArrowBack fill={color} width={width || 30} />,
    timer: <Timer fill={color} width={width || 30} />,
  };
};
