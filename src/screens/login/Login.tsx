import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
const Login = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'red'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>ciao</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
