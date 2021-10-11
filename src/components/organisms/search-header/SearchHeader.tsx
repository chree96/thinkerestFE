import React, {memo, useEffect, useMemo, useState} from 'react';
import {Animated, View} from 'react-native';
import {colors, shadows} from '../../../style';
import {styles} from './SearchHeader.styles';
import {ContentType} from '../../../types/user-actions';
import {useCallback} from 'react';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  getHeaderAnimationStyles,
  startCollapse,
} from '../../../utils/header/header-animation';
import HeaderContentButtons from '../../molecules/header-content-buttons';
import {Input} from 'react-native-elements';
import {Lens} from '../../atoms/svg';
import {
  getSearchAnimationStyles,
  startSearchAnimation,
} from '../../../utils/header/search-animation';
import ButtonWithIcon from '../../atoms/button-with-icon';

interface SearchHeaderProps {
  contentType: ContentType;
  contentColor: string;
  setContentType: (payload: ContentType) => void;
  searchContent: (payload: string) => void;
  style?: any;
  navigation: BottomTabHeaderProps;
  isHiddenHeader: boolean;
}

const SearchHeader = memo<SearchHeaderProps>(
  ({
    contentType,
    contentColor,
    setContentType,
    searchContent,
    style,
    isHiddenHeader,
    navigation,
  }) => {
    const [isExtended, setIsExtended] = useState(false);
    const {transformHeaderCollapse, transformContent} = useMemo(
      () => getHeaderAnimationStyles(),
      [],
    );

    const {transformSearch} = useMemo(() => getSearchAnimationStyles(), []);
    // handle animation
    useEffect(() => {
      startSearchAnimation(isExtended);
      setIsExtended(true);
    }, []);

    // useEffect(
    //   () => () => {
    //     console.log('unmount');
    //     // setAnimationStarted(false);
    //     // startSearchAnimation();
    //   },
    //   [],
    // );

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
          <View style={styles.searchContainer}>
            <Animated.View style={[styles.textInputContainer]}>
              <Input
                placeholder="Cerca per titolo"
                leftIcon={<Lens width={22} fill={contentColor} />}
                inputContainerStyle={styles.textInput}
                onChangeText={value => searchContent(value)}
                inputStyle={styles.inputStyle}
                placeholderTextColor={colors.shadowLight}
                selectionColor={contentColor}
                rightIcon={
                  // cambiare colore all'onPress?
                  <ButtonWithIcon
                    iconName={'people'}
                    onPress={() => console.log('find people')}
                    iconColor={colors.solidBlack}
                    iconSize={30}
                    noBackgroundColor
                  />
                }
              />
            </Animated.View>
          </View>
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
      searchContent,
      setContentType,
      style,
      transformContent,
      transformHeaderCollapse,
    ]);

    return <Header />;
  },
);

export default SearchHeader;
