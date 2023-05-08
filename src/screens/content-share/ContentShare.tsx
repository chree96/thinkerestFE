import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import ButtonWithIcon from '../../components/atoms/button-with-icon';

interface ContentShareProps {
  navigation: any;
}

const ContentShare = memo<ContentShareProps>(({navigation}) => {
  const onGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <ButtonWithIcon
        iconName={'arrowBack'}
        backgroundWithOpacity
        width={50}
        onPress={onGoBack}
      />
    </View>
  );
});

export default ContentShare;
