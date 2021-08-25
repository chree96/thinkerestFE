import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
// import DashboardMainDrawer from '../side-drawers/DashboardMainDrawer'; // => CREARE QUESTO
import {register} from 'react-native-bundle-splitter';

export const DrawerNavigator = createDrawerNavigator(
  {
    DrawerMainStackNavigator: register({
      require: () => require('./DrawerMainStackNavigator'),
    }),
  },
  // {
  //   initialRouteName: 'DrawerMainStackNavigator',
  //   contentComponent: (props: any) => <DashboardMainDrawer {...props} />,
  //   edgeWidth: 0,
  // },
);

export default createAppContainer(DrawerNavigator);
