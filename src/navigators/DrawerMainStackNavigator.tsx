import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import MainHeader from '../components/organisms/main-header';
import Home from '../screens/home';
import Login from '../screens/login';
import Search from '../screens/search';
import Test from '../screens/search copy/Test';
import {Screen} from '../screens/types';
import {
  retrieveContentColor,
  retrieveContentType,
} from '../store/rootSelectors';
import {colors} from '../style';
import tabIcon from '../utils/navigator/get-tab-icon';

const DrawerMainStackNavigator = ({contentType, contentColor}: any) => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const getInnerNavigator = useCallback(
    (initialRouteComponent, initialRouteName, props, headerShown = true) => (
      <InnerNavigator
        initialRouteComponent={initialRouteComponent}
        initialRouteName={initialRouteName + 'In'}
        {...props}
        headerShown={headerShown}
      />
    ),
    [],
  );

  const BottomNavigator = useCallback(
    ({navigation}) => {
      return (
        <Tab.Navigator
          initialRouteName={Screen.Home}
          screenOptions={({route}) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => tabIcon(route, focused, contentColor),
            tabBarStyle: {
              backgroundColor: colors.solidBlack,
              borderTopColor: 'transparent',
            },
            header: () => {
              return (
                <MainHeader
                  contentType={contentType}
                  contentColor={contentColor}
                  navigation={navigation}
                />
              );
            },
            headerShown: true,
          })}>
          <Tab.Screen
            name={Screen.Home}
            children={props => getInnerNavigator(Home, Screen.Home, props)}
            options={{
              headerShown: true,
            }}
          />
          <Tab.Screen
            name={Screen.Search}
            children={props =>
              getInnerNavigator(Search, Screen.Search, props, false)
            }
            options={{headerShown: false, unmountOnBlur: true}}
          />
          <Tab.Screen
            name={Screen.Login}
            children={props => getInnerNavigator(Login, Screen.Login, props)}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name={Screen.Profile}
            children={props => getInnerNavigator(Login, Screen.Profile, props)}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      );
    },
    [contentColor, contentType, getInnerNavigator],
  );

  const InnerNavigator = useCallback(
    ({initialRouteComponent, initialRouteName, navigation, headerShown}) => (
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen
          name={initialRouteName}
          component={initialRouteComponent}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Test'}
          children={() => <Test navigation={navigation} />}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    ),
    [],
  );

  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

const mapStateToProps = (state: any) => ({
  contentType: retrieveContentType(state),
  contentColor: retrieveContentColor(state),
});

export default connect(mapStateToProps)(DrawerMainStackNavigator);
