import React, {useCallback} from 'react';
import {Image, Text, View, FlatList} from 'react-native';
import {styles} from './DetailCredits.styles';
import {globalStyle} from '../../../style/globalStyle';
import {CastInfo} from '../../../store/modules/contents/contents.types';

interface DetailCreditsProps {
  credits: CastInfo[];
  style?: any;
}

export default function DetailCredits({credits, style}: DetailCreditsProps) {
  const renderCredits = useCallback(
    ({item}) => (
      <View style={styles.creditContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: item?.image}}
            style={styles.image}
            resizeMethod={'scale'}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={[
              globalStyle.textBold,
              globalStyle.textSmallishSize,
              {textAlign: 'center'},
            ]}>
            {item?.name}
          </Text>
          <Text
            style={[
              globalStyle.textLight,
              globalStyle.textSmallishSize,
              {textAlign: 'center'},
            ]}>
            {item?.character}
          </Text>
        </View>
      </View>
    ),
    [],
  );

  return (
    <View style={[styles.container, style]}>
      <Text style={[globalStyle.textBold, globalStyle.textCardTitleSize]}>
        Credits
      </Text>
      <FlatList
        data={credits}
        keyExtractor={(item, index) => 'credits-' + index}
        renderItem={renderCredits}
        horizontal
      />
    </View>
  );
}
