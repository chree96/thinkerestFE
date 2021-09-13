import React, {memo, useEffect, useMemo} from 'react';
import {Animated} from 'react-native';
import {colors, shadows} from '../../../style';
import {styles} from './MainHeader.styles';
import {ContentType} from '../../../types/user-actions';
import {FlatList} from 'react-native-gesture-handler';
import ButtonWithIcon from '../../atoms/button-with-icon';
import {useCallback} from 'react';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  getHeaderAnimationStyles,
  startCollapse,
} from '../../../utils/header/header-animation';

interface MainHeaderProps {
  contentType: ContentType;
  contentColor: string;
  setContentType: (payload: ContentType) => void;
  style?: any;
  navigation: BottomTabHeaderProps;
  isHiddenHeader: boolean;
}

const MainHeader = memo<MainHeaderProps>(
  ({
    contentType,
    contentColor,
    setContentType,
    style,
    isHiddenHeader,
    navigation,
  }) => {
    const renderContentButtons = useCallback(
      ({item}) => {
        const selectedContent = item === contentType;
        const iconColor = selectedContent ? contentColor : colors.solidWhite;
        return (
          <ButtonWithIcon
            iconName={item}
            iconColor={iconColor}
            onPress={() => setContentType(item as ContentType)}
          />
        );
      },
      [contentColor, contentType, setContentType],
    );

    const {transformHeaderCollapse, transformContent, transformLogo} = useMemo(
      () => getHeaderAnimationStyles(),
      [],
    );

    useEffect(() => {
      startCollapse(isHiddenHeader);
    }, [isHiddenHeader]);

    const Header = useCallback(() => {
      return (
        <Animated.View
          style={[
            shadows.little,
            styles.headerContainer,
            transformHeaderCollapse,
            style,
          ]}>
          <Animated.Text
            style={[
              styles.textLogo,
              {
                color: contentColor,
              },
              transformLogo,
            ]}>
            Thinkerest
          </Animated.Text>
          <Animated.View style={[transformContent, {paddingBottom: 4}]}>
            <FlatList
              horizontal
              contentContainerStyle={styles.buttonsContainer}
              data={Object.keys(ContentType)}
              renderItem={renderContentButtons}
              keyExtractor={item => item + '-button'}
            />
          </Animated.View>
        </Animated.View>
      );
    }, [
      contentColor,
      renderContentButtons,
      style,
      transformContent,
      transformHeaderCollapse,
      transformLogo,
    ]);

    return <Header />;
  },
);

export default MainHeader;
