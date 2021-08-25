import React from 'react';

import {LogBox, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Layout from './src/screens';

// import rootStore from './src/store/rootStore';
import configureStore from './src/store/rootStore';
import colors from './src/style/colors';

LogBox.ignoreLogs([
  'FlatList:',
  'Require cycles',
  'You should only render one navigator',
  'currentlyFocusedField',
  'Warning: Cannot update a component from',
  'value provided is not in',
  'VirtualizedLists should never',
  'element expected a pre-defined',
  'perform a React state update on an unmounted component',
  'is not recommended for use',
  'Animated:',
  'Setting a timer for a long period of time',
  'is not a valid color or brush',
  'Please consider using `loader` instead of `require`',
]);

// @ts-ignore
console.reportErrorsAsExceptions = false;

const rootStore = configureStore();

const App = () => (
  <Provider store={rootStore}>
    <StatusBar barStyle={'dark-content'} backgroundColor={colors.pampas} />
    <Layout />
  </Provider>
);

export default App;
