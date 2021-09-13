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
  isHiddenHeader: boolean;
  style?: any;
  setContentType: (payload: ContentType) => void;
}

const HeaderContentButtons = memo<HeaderContentButtonsProps>(
  ({contentType, contentColor, setContentType, style}) => {
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

    const ContentButtons = useCallback(() => {
      return (
        <Animated.View style={[styles.buttonsContainer, style]}>
          <FlatList
            horizontal
            contentContainerStyle={styles.buttonsRow}
            data={Object.keys(ContentType)}
            renderItem={renderContentButtons}
            keyExtractor={item => item + '-button'}
          />
        </Animated.View>
      );
    }, [renderContentButtons, style]);

    return <ContentButtons />;
  },
);

export default HeaderContentButtons;
