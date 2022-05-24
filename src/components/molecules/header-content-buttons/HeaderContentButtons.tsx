import React, {memo} from 'react';
import {Animated} from 'react-native';
import {colors} from '../../../style';
import {styles} from './HeaderContentButtons.styles';
import {ContentType} from '../../../types/user-actions';
import {FlatList} from 'react-native-gesture-handler';
import ButtonWithIcon from '../../atoms/button-with-icon';
import {useCallback} from 'react';
interface HeaderContentButtonsProps {
  contentType: ContentType;
  contentColor: string;
  selectContentAlert?: boolean;
  style?: any;
  setContentType: (payload: ContentType) => void;
}

const contentTypes = Object.keys(ContentType).filter(
  content => content !== ContentType.general,
);

const HeaderContentButtons = memo<HeaderContentButtonsProps>(
  ({contentType, contentColor, selectContentAlert, setContentType, style}) => {
    const renderContentButtons = useCallback(
      ({item}) => {
        const selectedContent = item === contentType;

        const iconColor = selectedContent ? contentColor : colors.whiteSmoke;

        const iconName =
          !selectedContent && item === ContentType.tvSeries
            ? item + 'Outline'
            : item;

        const iconSize = item === ContentType.games ? 32 : 28;

        return (
          <ButtonWithIcon
            iconName={iconName}
            iconColor={iconColor}
            iconSize={iconSize}
            noBackgroundColor
            style={styles.headerButton}
            onPress={() => setContentType(item as ContentType)}
          />
        );
      },
      [contentColor, contentType, setContentType],
    );

    return (
      <Animated.View
        style={[
          styles.buttonsContainer,
          {borderBottomColor: contentColor},
          style,
        ]}>
        <FlatList
          horizontal
          contentContainerStyle={styles.buttonsRow}
          data={contentTypes}
          renderItem={renderContentButtons}
          keyExtractor={item => item + '-button'}
        />
      </Animated.View>
    );
  },
);

export default HeaderContentButtons;
