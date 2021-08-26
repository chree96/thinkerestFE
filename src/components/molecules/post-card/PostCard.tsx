import React from 'react';
import {Image, Text, View} from 'react-native';
import {colors, globalStyle, shadows, sizes} from '../../../style';
import {styles} from './PostCard.styles';
import {useMemo} from 'react';
import ButtonWithIcon from '../../atoms/button-with-icon';
import {Star} from '../../atoms/svg';
import IconWithText from '../icon-with-text';
import LinearGradient from 'react-native-linear-gradient';

interface PostCardProps {
  starsReview: number;
  contentImg: any;
  title: string;
  genre: string;
  review: string;
  style?: any;
}

export default function PostCard({
  starsReview,
  contentImg,
  title,
  genre,
  review,
  style,
}: PostCardProps) {
  const btnActions = [
    {icon: 'share', action: 'log1'},
    {icon: 'cloud', action: 'log2'},
  ];
  const renderStarsReview = useMemo(() => {
    let stars: any[] = [];
    for (let i = 1; i <= 5; i++) {
      const starColor =
        i <= starsReview ? colors.gold : colors.notSnowWhiteGray;
      stars.push(
        <View style={{marginLeft: i === 1 ? 0 : 4}} key={'star-' + i}>
          <Star fill={starColor} width={sizes.large} />
        </View>,
      );
    }
    return stars;
  }, [starsReview]);

  const renderBtnActions = useMemo(() => {
    let buttons: any[] = [];
    btnActions.map((item, key) => {
      let iconColor =
        item.icon === 'share' ? colors.lightGreen : colors.glassBlue;
      buttons.push(
        <ButtonWithIcon
          iconColor={iconColor}
          iconName={item.icon}
          onPress={() => console.log(item.action)}
          key={key}
        />,
      );
    });
    return buttons;
  }, []);

  return (
    <View style={[shadows.medium, styles.cardContainer, style]}>
      <View style={styles.contentContainer}>
        <View style={[shadows.little, styles.imgContainer]}>
          <Image source={contentImg} style={styles.imgStyle} />
        </View>
        {/* MOVIE INFO (RIGHT SIDE) */}
        <View style={globalStyle.flex}>
          <Text
            style={[
              globalStyle.textRegular,
              globalStyle.textCardTitleSize,
              styles.textAlignCenter,
            ]}>
            {title}
          </Text>
          <View>
            <Text
              style={[
                globalStyle.textLight,
                globalStyle.textSmallSize,
                styles.textAlignCenter,
                styles.marginNegative,
              ]}>
              {genre}
            </Text>
          </View>
          {/* DA RIVEDERE */}
          <View style={styles.contentInfoContainer}>
            <IconWithText
              svgName={'world'}
              text={'25k'}
              width={30}
              svgColor={colors.solidWhite}
            />
            <IconWithText
              svgName={'people'}
              text={'17'}
              width={30}
              svgColor={colors.solidWhite}
            />
          </View>
          <View style={styles.starsContainer}>{renderStarsReview}</View>
          <View style={styles.btnActionsContainer}>{renderBtnActions}</View>
        </View>
      </View>
      {/* <View
        style={{
          width: 40,
          height: 14,
          borderRadius: 8,
          backgroundColor: colors.lightGrey,
          elevation: 5,
          alignSelf: 'center',
          marginBottom: -10,
        }}></View> */}
      <View style={styles.reviewContainer}>
        <Text
          style={[
            globalStyle.textLight,
            globalStyle.textSmallishSize,
            styles.reviewText,
          ]}>
          {review}
        </Text>
        <LinearGradient
          colors={[
            'rgba(77,77,77, 0)',
            'rgba(77, 77, 77, 1)',
            'rgba(77,77,77, 1)',
          ]}
          style={styles.gradientStyle}
        />
      </View>
    </View>
  );
}
