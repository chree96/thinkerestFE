import React from 'react';
import {colors} from '../../../../style';
import {
  ArrowBack,
  Book,
  Cloud,
  ControlsIcon,
  Gamepad,
  General,
  Hamburger,
  Headphones,
  Lens,
  LensPlus,
  Movie,
  MovieOutline,
  People,
  Plus,
  Share,
  SpeechBubble,
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
    speechBubble: <SpeechBubble fill={color} width={width} />,
    plus: <Plus fill={color} width={width || 30} />,
    music: <Headphones fill={color} width={width || 30} />,
    controls: <ControlsIcon fill={color} width={width || 30} />,
    lensPlus: <LensPlus fill={color} width={width || 30} />,
  };
};
