import Login from '../screens/login';
import Home from '../screens/home';
import MainHeader from '../components/organisms/main-header';
import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from '../style';
import {Screen} from '../screens/types';
import {
  retrieveContentColor,
  retrieveContentType,
} from '../store/rootSelectors';
import tabIcon from '../utils/navigator/get-tab-icon';

const DrawerMainStackNavigator = ({contentType, contentColor}: any) => {
  const Tab = createBottomTabNavigator();
  const MyTabs = useCallback(() => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          header: () => (
            <MainHeader contentType={contentType} contentColor={contentColor} />
          ),
          headerShown: true,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => tabIcon(route, focused, contentColor),
          tabBarStyle: {
            backgroundColor: colors.solidBlack,
            borderTopColor: 'transparent',
          },
        })}>
        <Tab.Screen
          name={Screen.Home}
          component={Home}
          options={{headerShown: true}}
        />
        <Tab.Screen
          name={Screen.Search}
          component={Login}
          options={{headerShown: true}}
        />
        <Tab.Screen
          name={Screen.Login}
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
  }, [contentColor, contentType]);

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

const mapStateToProps = (state: any) => ({
  contentType: retrieveContentType(state),
  contentColor: retrieveContentColor(state),
});

export default connect(mapStateToProps)(DrawerMainStackNavigator);
