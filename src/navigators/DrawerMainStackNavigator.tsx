import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/login';
import Home from '../screens/home';
import MainHeader from '../components/organisms/main-header';
import React from 'react';
import {connect} from 'react-redux';

const DrawerMainStackNavigator = ({}: any) => {
  const MainStackContainer = createAppContainer(
    createStackNavigator({
      Home: {
        screen: Home,
        navigationOptions: {
          headerShown: true,
          header: () => {
            return <MainHeader />;
          },
        },
      },
      Login: {
        screen: Login,
        navigationOptions: {
          headerShown: false,
        },
      },
    }),
  );

  return <MainStackContainer />;
};
const mapDispatchToProps = (dispatch: any) => ({});
export default connect()(DrawerMainStackNavigator);
