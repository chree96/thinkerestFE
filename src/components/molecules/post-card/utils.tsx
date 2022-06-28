import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../../style';
import ButtonWithIcon from '../../atoms/button-with-icon';
import {styles} from './PostCard.styles';

const btnActions = [
  {icon: 'moreTime', action: 'log3'},
  {icon: 'cloud', action: 'log2'},
  {icon: 'share', action: 'log1'},
];

export const getButtonActions = () =>
  btnActions.map((item, key) => (
    <View key={'button-' + item.icon} style={styles.buttonsContainer}>
      <ButtonWithIcon
        noBackgroundColor
        iconColor={colors.doveGrey}
        iconName={item.icon}
        width={26}
        iconSize={24}
        onPress={() => console.log(item.action)}
        key={key}
      />
      {item.icon === 'cloud' ? (
        <Text style={styles.buttonIconText}>4</Text>
      ) : null}
    </View>
  ));
