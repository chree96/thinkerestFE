import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {globalStyle, colors, sizes} from '../../../style';
import ImageCircleContainer from '../../atoms/image-circle-container';
import {styles} from './UserShareInfo.styles';
import {ContentType} from '../../../types/user-actions';
import getContentIcon from '../../../utils/content/get-content-icon';
import getContentAction from '../../../utils/content/get-content-action';
import StarRating from '../star-rating';
import getContentColor from '../../../utils/content/get-content-color';

interface ShareInfo {
  user: string;
  userImg: any;
  rating?: number;
  contentTitle?: string;
  contentType?: ContentType;
}

interface UserShareInfoProps {
  shareInfo: ShareInfo;
  review?: string;
  withoutAction?: boolean;
  textColor?: string;
  style?: any;
}

export default function UserShareInfo({
  shareInfo,
  review,
  withoutAction = false,
  textColor = colors.solidWhite,
  style,
}: UserShareInfoProps) {
  const {user, userImg, rating, contentTitle, contentType} = shareInfo;

  const UserAction = useCallback(() => {
    if (contentType) {
      const action = getContentAction(contentType);
      const icon = getContentIcon(contentType, 16);
      const contentColor = getContentColor(contentType);

      return (
        <View>
          <View style={styles.userActionContainer}>
            <View style={styles.userActionRow}>
              <Text
                style={[
                  globalStyle.textBold,
                  globalStyle.textLittleMediumSize,
                  {color: textColor},
                ]}>
                {user}{' '}
              </Text>
              <Text
                style={[
                  globalStyle.textRegular,
                  globalStyle.textSmallSize,
                  styles.txtStyle,
                  {color: colors.doveGrey},
                ]}>
                {action}
              </Text>
            </View>
            <Text
              style={[
                globalStyle.textLight,
                globalStyle.textSmallSize,
                styles.txtStyle,
                {color: colors.doveGrey},
              ]}>
              2h ago
            </Text>
          </View>
          <View style={styles.contentWithRateContainer}>
            <View style={styles.contentContainer}>
              <View style={styles.iconContainer}>{icon}</View>
              <Text
                style={[
                  globalStyle.textRegular,
                  globalStyle.textLittleMediumSize,
                  styles.txtStyle,
                  {color: contentColor},
                ]}>
                {contentTitle}
              </Text>
            </View>
            <StarRating
              rating={rating || 5}
              starSize={sizes.littleMedium}
              style={styles.star}
            />
          </View>
        </View>
      );
    }

    return null;
  }, [contentTitle, contentType, rating, textColor, user]);

  return (
    <View style={[styles.infoContainer, style]}>
      <ImageCircleContainer img={userImg} style={styles.imgStyle} width={54} />
      {withoutAction ? (
        <View>
          <Text style={[globalStyle.textBold, {color: textColor}]}>{user}</Text>
          {review ? (
            <View style={styles.reviewContainer}>
              <Text
                style={[globalStyle.textLight, globalStyle.textSmallishSize]}>
                {review}
              </Text>
            </View>
          ) : null}
        </View>
      ) : (
        <UserAction />
      )}
    </View>
  );
}
