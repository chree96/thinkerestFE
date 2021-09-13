import React, {memo, useEffect, useMemo} from 'react';
import {Animated} from 'react-native';
import {shadows} from '../../../style';
import {styles} from './MainHeader.styles';
import {ContentType} from '../../../types/user-actions';
import {useCallback} from 'react';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  getHeaderAnimationStyles,
  startCollapse,
} from '../../../utils/header/header-animation';
import HeaderContentButtons from '../../molecules/header-content-buttons';

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
          <HeaderContentButtons
            contentType={contentType}
            contentColor={contentColor}
            isHiddenHeader={isHiddenHeader}
            setContentType={setContentType}
            style={transformContent}
          />
        </Animated.View>
      );
    }, [
      contentColor,
      contentType,
      isHiddenHeader,
      setContentType,
      style,
      transformContent,
      transformHeaderCollapse,
      transformLogo,
    ]);

    return <Header />;
  },
);

export default MainHeader;
