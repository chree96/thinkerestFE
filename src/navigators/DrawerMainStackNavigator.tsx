import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import MainHeader from '../components/organisms/main-header';
import SearchHeader from '../components/organisms/search-header';
import Home from '../screens/home';
import ContentDetail from '../screens/content-detail';
import ContentShare from '../screens/content-share';
import Search from '../screens/search';
import Test from '../screens/search copy/Test';
import {Screen} from '../screens/types';
import {getContentColor, getContentType} from '../store/rootSelectors';
import {colors} from '../style';
import tabIcon from '../utils/navigator/get-tab-icon';
import {hideTabNavigator} from './routesOptions';

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
          screenOptions={({route, navigation}) => {
            const hideNavigator = hideTabNavigator(navigation);

            return {
              tabBarHideOnKeyboard: true,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => tabIcon(route, focused, contentColor),
              tabBarStyle: {
                backgroundColor: colors.solidBlack,
                borderTopColor: 'transparent',
                display: hideNavigator ? 'none' : 'flex',
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
            };
          }}>
          <Tab.Screen
            name={Screen.Home}
            children={props => getInnerNavigator(Home, Screen.Home, props)}
            options={{
              headerShown: true,
              unmountOnBlur: true,
            }}
          />
          <Tab.Screen
            name={Screen.Search}
            children={props =>
              getInnerNavigator(Search, Screen.Search, props, false)
            }
            options={{
              headerShown: true,
              unmountOnBlur: true,
              header: () => (
                <SearchHeader
                  contentType={contentType}
                  contentColor={contentColor}
                  navigation={navigation}
                />
              ),
            }}
          />
          <Tab.Screen
            name={Screen.ContentDetail}
            children={props =>
              getInnerNavigator(ContentDetail, Screen.ContentDetail, props)
            }
            options={{headerShown: false}}
          />
          <Tab.Screen
            name={Screen.Notifications}
            children={props =>
              getInnerNavigator(ContentDetail, Screen.Notifications, props)
            }
            options={{headerShown: false}}
          />
          <Tab.Screen
            name={Screen.Profile}
            children={props =>
              getInnerNavigator(ContentDetail, Screen.Profile, props)
            }
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      );
    },
    [contentColor, contentType, getInnerNavigator],
  );

  const InnerNavigator = useCallback(
    ({initialRouteComponent, initialRouteName, navigation, headerShown}) => {
      const navigationState = navigation.getState();

      const navigationParams = {
        params: {...navigationState.routes[navigationState.index].params},
      };

      const Component = initialRouteComponent;

      return (
        <Stack.Navigator
          defaultScreenOptions={{gestureEnabled: false}}
          initialRouteName={initialRouteName}>
          <Stack.Screen
            name={initialRouteName}
            children={() => (
              <Component navigation={navigation} props={navigationParams} />
            )}
            options={{
              headerShown: false,
              gestureEnabled: false,
              animationEnabled: false,
            }}
          />
          {/* <Stack.Screen
          name={'Test'}
          children={() => <Test navigation={navigation} />}
          options={{headerShown: false}}
        /> */}
        </Stack.Navigator>
      );
    },
    [],
  );

  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

const mapStateToProps = (state: any) => ({
  contentType: getContentType(state),
  contentColor: getContentColor(state),
});

export default connect(mapStateToProps)(DrawerMainStackNavigator);
