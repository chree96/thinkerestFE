import React from 'react';
import ImageCircleContainer from '../../components/atoms/image-circle-container';
import {HomeIcon, SearchIcon, Timer} from '../../components/atoms/svg';
import {Screen} from '../../screens/types';
import {colors} from '../../style';

export default function tabIcon(route, focused, contentColor) {
  const iconInactiveColor = colors.lightGrey;
  const iconColor = focused ? contentColor : iconInactiveColor;
  switch (route.name) {
    case Screen.Home:
      return <HomeIcon fill={iconColor} />;
    case Screen.Search:
      return <SearchIcon fill={iconColor} />;
    case Screen.Login:
      return <Timer fill={iconColor} />;
    case Screen.Profile:
      return (
        <ImageCircleContainer
          img={require('../../../assets/images/mockImages/lello.jpg')}
          width={30}
        />
      );
  }
}
