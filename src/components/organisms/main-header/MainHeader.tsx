import React, {memo, useEffect, useMemo} from 'react';
import {Animated} from 'react-native';
import {styles} from './MainHeader.styles';
import {ContentType} from '../../../types/user-actions';
import {useCallback} from 'react';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  getHeaderAnimationStyles,
  startCollapse,
} from '../../../utils/header/header-animation';
import HeaderContentButtons from '../../molecules/header-content-buttons';
import MainHeaderTop from '../../molecules/main-header-top';

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
    const {transformHeaderCollapse, transformContent} = useMemo(
      () => getHeaderAnimationStyles(),
      [],
    );

    useEffect(() => {
      startCollapse(isHiddenHeader);
    }, [isHiddenHeader]);

    const Header = useCallback(() => {
      return (
        <Animated.View
          style={[styles.headerContainer, transformHeaderCollapse, style]}>
          <MainHeaderTop color={contentColor} />
          <HeaderContentButtons
            contentType={contentType}
            contentColor={contentColor}
            setContentType={setContentType}
            style={transformContent}
          />
        </Animated.View>
      );
    }, [
      contentColor,
      contentType,
      setContentType,
      style,
      transformContent,
      transformHeaderCollapse,
    ]);

    return <Header />;
  },
);

export default MainHeader;
