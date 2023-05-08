import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../style';
import ButtonWithIcon from '../../atoms/button-with-icon';
import {styles} from './DetailBackgroundData.styles';
import {contentDetailActionsData} from './utils';

interface DetailShareDataProps {
  data: {
    title: string;
    genre: string;
    year: number;
    duration: string;
  };
  onGoBack: () => void;
  style?: any;
}

export interface ContentDetailActions {
  action: string;
  icon: string;
  iconSize?: number;
}

export default function DetailBackgroundData({
  data,
  onGoBack,
  style,
}: DetailShareDataProps) {
  const contentDetailActions = useCallback(
    () =>
      contentDetailActionsData.map((item, key) => (
        <ButtonWithIcon
          noBackgroundColor
          iconColor={colors.solidWhite}
          iconName={item.icon}
          style={styles.iconMargin}
          width={item?.iconSize || 26}
          iconSize={item?.iconSize || 24}
          onPress={() =>
            item.action === 'addContent' ? onGoBack() : console.log(item.action)
          }
          key={key}
        />
      )),
    [onGoBack],
  );

  return (
    <LinearGradient
      colors={['rgba(0, 0, 0, 0.0)', 'rgba(0,0,0, 1)']}
      style={[styles.obscuredView, style]}>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.description}>
            {data?.year + ' · ' + data?.genre + ' · ' + data?.duration}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>{contentDetailActions()}</View>
      </View>
    </LinearGradient>
  );
}
