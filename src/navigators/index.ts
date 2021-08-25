import {register} from 'react-native-bundle-splitter';

export const DrawerContainer = register({
  require: () => require('./DrawerNavigator'),
});
