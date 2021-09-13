import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
const Test = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'red', marginTop: 90}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>AAAAAAAAAAAAAAAAAAAAAAAA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Test;
