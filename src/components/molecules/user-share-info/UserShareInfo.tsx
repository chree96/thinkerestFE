import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {colors, sizes} from '../../../style';
import ImageCircleContainer from '../../atoms/image-circle-container';
import {styles} from './UserShareInfo.styles';
import {ContentType} from '../../../types/user-actions';
import StarRating from '../star-rating';
import getContentColor from '../../../utils/content/get-content-color';
import IconSvg from '../../atoms/icons-svg';

export interface ShareInfo {
  user: string;
  userImg: any;
  rating: number;
  contentTitle: string;
  contentType: ContentType;
}

interface UserShareInfoProps {
  shareInfo: ShareInfo;
  textColor?: string;
  style?: any;
}

export default function UserShareInfo({
  shareInfo,
  textColor = colors.solidWhite,
  style,
}: UserShareInfoProps) {
  const {user, userImg, rating, contentTitle, contentType} = shareInfo;

  const UserAction = useCallback(() => {
    if (contentType) {
      const contentColor = getContentColor(contentType);

      return (
        <View>
          {/* USER */}
          <View style={styles.userActionContainer}>
            <View style={styles.userActionRow}>
              <Text style={[styles.userText, {color: textColor}]}>{user}</Text>
              <Text style={styles.actionText}>{' ha aggiunto'}</Text>
            </View>
            <Text style={styles.dateText}>2h ago</Text>
          </View>

          <View style={styles.contentWithRateContainer}>
            {/* CONTENT TITLE */}
            <View style={styles.contentContainer}>
              <View style={styles.iconContainer}>
                <IconSvg iconName={contentType} width={16} />
              </View>
              <Text style={[styles.contentText, {color: contentColor}]}>
                {contentTitle}
              </Text>
            </View>

            {/* CONTENT RATING */}
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
      <UserAction />
    </View>
  );
}
