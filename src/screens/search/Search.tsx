import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
const Search = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'red', marginTop: 90}}>
      <TouchableOpacity onPress={() => navigation.navigate('Test')}>
        <Text>ciao on seaerrch</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
