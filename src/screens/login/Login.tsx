import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface LoginProps {
  navigation: any;
  props: any;
}

const Login = memo<LoginProps>(({navigation, props}) => {
  const navigationState = navigation.getState();
  const navigationParams = navigationState.routes[navigationState.index].params;

  return (
    <View style={{backgroundColor: 'red'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>{'prova'}</Text>
      </TouchableOpacity>
    </View>
  );
});

export default Login;
