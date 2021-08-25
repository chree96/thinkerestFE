import React from 'react';
import {Text, TouchableOpacity, View, Button} from 'react-native';
import {NavigationActions} from 'react-navigation';

const Login = ({navigation}) => {
  //   const navigation = NavigationActions;
  return (
    <View style={{backgroundColor: 'red'}}>
      {/* <Button
        title="caoaoiao"
        onPress={() => {
          console.log('aoamsavkoesngesjogjrobj');
          navigation.navigate('Home');
        }}
      /> */}
      <TouchableOpacity
        onPress={() => {
          console.log('ca');
          navigation.navigate('Home');
        }}
        style={{backgroundColor: 'blue'}}>
        <Text>ciao</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
