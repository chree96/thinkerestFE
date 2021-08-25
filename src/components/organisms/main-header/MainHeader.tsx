import React from 'react';
import {Image, Text, View} from 'react-native';
import {colors, families, globalStyle, shadows, sizes} from '../../../style';
import {styles} from './MainHeader.styles';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IIcon from 'react-native-vector-icons/Ionicons';
import {useMemo} from 'react';

interface MainHeaderProps {
  style?: any;
}

export default function MainHeader({style}: MainHeaderProps) {
  // const buttonIcons = [
  //   '',
  //   'movie-open',
  //   'tv-outline',
  //   'ios-book-outline',
  //   'gamepad-variant-outline',
  //   'musical-notes-sharp',
  // ];

  const renderButtons = useMemo(() => {
    let buttons: any[] = [];
    // buttonIcons.map((item) => {

    //   switch(item){
    //     case item.movies:

    //     case:
    //     case:
    //     case:
    //   }
    // })
    for (let i = 0; i <= 5; i++) {
      buttons.push(
        <View
          style={{
            width: 45,
            height: 45,
            borderRadius: 100,
            backgroundColor: colors.solidWhite,
          }}
          key={'header-button-' + i}
        />,
      );
    }
    return buttons;
  }, []);

  return (
    <View
      style={[
        shadows.little,
        {
          width: '100%',
          height: 100,
          backgroundColor: colors.solidBlack,
          justifyContent: 'space-between',
          elevation: 6,
        },
      ]}>
      <View
        style={{
          marginLeft: 15,
        }}>
        <Text
          style={{
            color: colors.cherryRed,
            fontFamily: families.bold,
            fontSize: sizes.larger,
          }}>
          Thinkerest
        </Text>
      </View>
      <View
        style={{
          // alignSelf: 'flex-end',
          width: '100%',
          height: 40,
          paddingHorizontal: 10,
          marginBottom: -1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          // backgroundColor: 'white',
        }}>
        {renderButtons}
      </View>
    </View>
  );
}
