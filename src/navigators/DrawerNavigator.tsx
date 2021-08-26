import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {register} from 'react-native-bundle-splitter';

export const DrawerNavigator = createDrawerNavigator({
  DrawerMainStackNavigator: register({
    require: () => require('./DrawerMainStackNavigator'),
  }),
});

export default createAppContainer(DrawerNavigator);
