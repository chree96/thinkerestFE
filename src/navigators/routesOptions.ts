import {Screen} from '../screens/types';

const routesWithoutTabNavigator = [Screen.ContentDetail];

export const hideTabNavigator = navigation => {
  const navigationState = navigation.getState();
  const currentScreen = {
    ...navigationState.routes[navigationState.index],
  }?.name;

  return routesWithoutTabNavigator.includes(currentScreen);
};
