import React, {useMemo} from 'react';
import {View} from 'react-native';
import IconWithText from '../icon-with-text';
import {styles} from './DetailShareData.styles';
import {formatCounter} from './utils';

interface DetailShareDataProps {
  data: {
    friendsShare: number;
    peopleShare: number;
    peopleRate: number;
  };
  iconColor: string;
  style?: any;
}

enum DataIcons {
  friendsShare = 'people',
  peopleShare = 'world',
  peopleRate = 'star',
}

export default function DetailShareData({
  data,
  iconColor,
  style,
}: DetailShareDataProps) {
  const renderData = useMemo(() => {
    const outData: any = [];

    Object.keys(data).forEach(item => {
      const icon: string = DataIcons[item];

      const text =
        item === 'peopleShare' ? formatCounter(data[item]) : data[item];

      outData.push(
        <IconWithText
          key={'detail-' + item}
          svgName={icon}
          text={text}
          svgColor={iconColor}
          textStyle={styles.text}
        />,
      );
    });

    return outData;
  }, [data, iconColor]);

  return <View style={[styles.container, style]}>{renderData}</View>;
}
