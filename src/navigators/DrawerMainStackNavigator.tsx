// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';
import Login from '../screens/login';
import Home from '../screens/home';
import MainHeader from '../components/organisms/main-header';
import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeIcon, SearchIcon} from '../components/atoms/svg';
import {colors} from '../style';
import {Screen} from '../screens/types';

const DrawerMainStackNavigator = ({}: any) => {
  // const MainStackContainer = createAppContainer(
  //   createStackNavigator({
  //     Home: {
  //       screen: Home,
  //       navigationOptions: {
  //         headerShown: true,
  //         header: () => {
  //           return <MainHeader />;
  //         },
  //       },
  //     },
  //     Login: {
  //       screen: Login,
  //       navigationOptions: {
  //         headerShown: false,
  //       },
  //     },
  //   }),
  // );

  const tabIcon = useCallback((route, focused) => {
    const iconInactiveColor = colors.solidBlack;
    const iconFocusColor = colors.cherryRed;
    const iconColor = focused ? iconFocusColor : iconInactiveColor;
    switch (route.name) {
      case Screen.Home:
        return <HomeIcon fill={iconColor} />;
      case Screen.Search:
        return <SearchIcon fill={iconColor} />;
      case Screen.Login:
        return <SearchIcon fill={iconColor} />;
      case Screen.Profile:
        return <SearchIcon fill={iconColor} />;
    }
  }, []);

  const Tab = createBottomTabNavigator();
  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          header: () => <MainHeader />,
          headerShown: true,
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => tabIcon(route, focused),
        })}>
        {/* <MainStackContainer /> */}

        <Tab.Screen
          name={Screen.Home}
          component={Home}
          options={{headerShown: true}}
        />
        <Tab.Screen
          name={Screen.Login}
          component={Login}
          options={{headerShown: true}}
        />
        <Tab.Screen
          name={Screen.Search}
          component={Login}
          options={{headerShown: true}}
        />
        <Tab.Screen
          name={Screen.Profile}
          component={Login}
          options={{headerShown: true}}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      {/* <MainStackContainer /> */}
      <MyTabs />
    </NavigationContainer>
  );
};

export default connect()(DrawerMainStackNavigator);
