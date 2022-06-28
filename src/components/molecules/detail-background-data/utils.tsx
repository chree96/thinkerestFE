import React from 'react';
import {colors} from '../../../style';
import ButtonWithIcon from '../../atoms/button-with-icon';
import {ContentDetailActions} from './DetailBackgroundData';
import {styles} from './DetailBackgroundData.styles';

const contentDetailActions: ContentDetailActions[] = [
  {action: 'addContent', icon: 'plus', iconSize: 24},
  {action: 'addToWatchList', icon: 'moreTime', iconSize: 24},
  {action: 'shareContent', icon: 'share', iconSize: 26},
];

export const getDetailHeaderActions = () =>
  contentDetailActions.map((item, key) => (
    <ButtonWithIcon
      noBackgroundColor
      iconColor={colors.solidWhite}
      iconName={item.icon}
      style={styles.iconMargin}
      width={item?.iconSize || 26}
      iconSize={item?.iconSize || 24}
      onPress={() => console.log(item.action)}
      key={key}
    />
  ));
