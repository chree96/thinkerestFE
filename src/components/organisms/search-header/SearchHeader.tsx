import React, {memo, useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {colors, shadows} from '../../../style';
import {styles} from './SearchHeader.styles';
import {ContentType} from '../../../types/user-actions';
import {useCallback} from 'react';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import HeaderContentButtons from '../../molecules/header-content-buttons';
import {Input} from 'react-native-elements';
import {Lens} from '../../atoms/svg';
import ButtonWithIcon from '../../atoms/button-with-icon';

interface SearchHeaderProps {
  contentType: ContentType;
  contentColor: string;
  setContentType: (payload: ContentType) => void;
  searchContent: (payload: string) => void;
  style?: any;
  navigation: BottomTabHeaderProps;
}

const SearchHeader = memo<SearchHeaderProps>(
  ({
    contentType,
    contentColor,
    setContentType,
    searchContent,
    style,
    navigation,
  }) => {
    const [isPeopleSearch, setIsPeopleSearch] = useState(false);
    const [selectContentAlert, setSelectContentAlert] = useState(true);

    const peopleIconColor = useMemo(
      () => (isPeopleSearch ? colors.solidWhite : colors.solidBlack),
      [isPeopleSearch],
    );

    const canSearch = useMemo(
      () => contentType !== ContentType.general || isPeopleSearch,
      [contentType, isPeopleSearch],
    );

    useEffect(() => {
      if (selectContentAlert) {
        setTimeout(() => setSelectContentAlert(false), 500);
      }
    }, [selectContentAlert]);

    const onPressInput = useCallback(() => {
      if (!canSearch) {
        setSelectContentAlert(true);
      }
    }, [canSearch]);

    return (
      <View style={[shadows.little, styles.headerContainer, style]}>
        <View style={styles.searchContainer}>
          <View style={[styles.textInputContainer]}>
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
                <ButtonWithIcon
                  iconName={'people'}
                  onPress={() => setIsPeopleSearch(!isPeopleSearch)}
                  iconColor={peopleIconColor}
                  iconSize={30}
                  noBackgroundColor
                />
              }
            />
          </View>
        </View>
        <HeaderContentButtons
          contentType={contentType}
          contentColor={contentColor}
          setContentType={setContentType}
          selectContentAlert={selectContentAlert}
        />
      </View>
    );
  },
);

export default SearchHeader;
