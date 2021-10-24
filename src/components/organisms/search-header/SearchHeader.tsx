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
import {startSearchAnimation} from '../../../utils/header/search-animation';
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
    const [isPeopleSearch, setIsPeopleSearch] = useState(false);
    const [selectContentAlert, setSelectContentAlert] = useState(false);

    const {transformHeaderCollapse, transformContent} = useMemo(
      () => getHeaderAnimationStyles(),
      [],
    );

    const canSearch = useMemo(
      () => contentType !== ContentType.general || isPeopleSearch,
      [contentType, isPeopleSearch],
    );
    // handle animation
    useEffect(() => {
      startSearchAnimation(isExtended);
      setIsExtended(true);
    }, []);

    useEffect(() => {
      if (selectContentAlert) {
        setTimeout(() => setSelectContentAlert(false), 500);
      }
    }, [selectContentAlert]);

    useEffect(() => {
      startCollapse(isHiddenHeader);
    }, [isHiddenHeader]);

    const onPressInput = useCallback(() => {
      if (!canSearch) {
        setSelectContentAlert(true);
      }
    }, [canSearch]);

    const Header = useCallback(() => {
      const peopleIconColor = isPeopleSearch
        ? colors.solidWhite
        : colors.solidBlack;

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
                onPressIn={onPressInput}
                showSoftInputOnFocus={canSearch}
                rightIcon={
                  // cambiare colore all'onPress?
                  <ButtonWithIcon
                    iconName={'people'}
                    onPress={() => setIsPeopleSearch(!isPeopleSearch)}
                    iconColor={peopleIconColor}
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
            setContentType={setContentType}
            selectContentAlert={selectContentAlert}
            style={transformContent}
          />
        </Animated.View>
      );
    }, [
      canSearch,
      contentColor,
      contentType,
      isPeopleSearch,
      onPressInput,
      searchContent,
      selectContentAlert,
      setContentType,
      style,
      transformContent,
      transformHeaderCollapse,
    ]);

    return <Header />;
  },
);

export default SearchHeader;
