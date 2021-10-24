import React, {memo} from 'react';
import {Animated} from 'react-native';
import {colors} from '../../../style';
import {styles} from './HeaderContentButtons.styles';
import {ContentType} from '../../../types/user-actions';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import ButtonWithIcon from '../../atoms/button-with-icon';
import {useCallback} from 'react';
import ImageCircleContainer from '../../atoms/image-circle-container';
import {useDimensions} from 'react-native-hooks';
import RadialGradient from 'react-native-radial-gradient';

interface HeaderContentButtonsProps {
  contentType: ContentType;
  contentColor: string;
  selectContentAlert?: boolean;
  style?: any;
  setContentType: (payload: ContentType) => void;
}

const HeaderContentButtons = memo<HeaderContentButtonsProps>(
  ({contentType, contentColor, selectContentAlert, setContentType, style}) => {
    const {width: screenWidth} = useDimensions().window;

    const renderContentButtons = useCallback(
      ({item, index}) => {
        const selectedContent = item === contentType;

        const iconColor = selectedContent ? contentColor : colors.solidWhite;

        const iconName =
          !selectedContent && item === ContentType.tvSeries
            ? item + 'Outline'
            : item;

        const withMargin = index === 0 || index === 3;

        const gradientColor =
          selectedContent || selectContentAlert
            ? 'rgba(255, 255, 255, 0.3)'
            : colors.solidBlack;

        return item === ContentType.general ? (
          <TouchableOpacity onPress={() => setContentType(item as ContentType)}>
            <ImageCircleContainer
              img={require('../../../../assets/images/T-logo.png')}
              style={styles.genericButtonContainer}
              width={screenWidth * 0.12}
            />
          </TouchableOpacity>
        ) : (
          <RadialGradient
            style={[
              styles.radialGradient,
              {
                borderRightColor: withMargin ? colors.doveGrey : 'transparent',
                width: screenWidth * 0.22,
              },
            ]}
            stops={[0.4, 1]}
            colors={[gradientColor, colors.solidBlack]}>
            <ButtonWithIcon
              iconName={iconName}
              iconColor={iconColor}
              noBackgroundColor
              style={styles.headerButton}
              onPress={() => setContentType(item as ContentType)}
            />
          </RadialGradient>
        );
      },
      [
        contentColor,
        contentType,
        selectContentAlert,
        screenWidth,
        setContentType,
      ],
    );

    const ContentButtons = useCallback(() => {
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
            data={Object.keys(ContentType)}
            renderItem={renderContentButtons}
            keyExtractor={item => item + '-button'}
          />
        </Animated.View>
      );
    }, [contentColor, renderContentButtons, style]);

    return <ContentButtons />;
  },
);

export default HeaderContentButtons;
