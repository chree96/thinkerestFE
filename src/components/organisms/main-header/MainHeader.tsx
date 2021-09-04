import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {colors, shadows} from '../../../style';
import {styles} from './MainHeader.styles';
import {ContentType} from '../../../types/user-actions';
import {FlatList} from 'react-native-gesture-handler';
import ButtonWithIcon from '../../atoms/button-with-icon';
import {useCallback} from 'react';

interface MainHeaderProps {
  contentType: ContentType;
  contentColor: string;
  setContentType: (payload: ContentType) => void;
  style?: any;
}

const MainHeader = memo<MainHeaderProps>(
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

    return (
      <View style={[shadows.little, styles.headerContainer, style]}>
        <Text
          style={[
            styles.textLogo,
            {
              color: contentColor,
            },
          ]}>
          Thinkerest
        </Text>
        <FlatList
          horizontal
          contentContainerStyle={styles.buttonsContainer}
          data={Object.keys(ContentType)}
          renderItem={renderContentButtons}
          keyExtractor={item => item + '-button'}
        />
      </View>
    );
  },
);

export default MainHeader;
