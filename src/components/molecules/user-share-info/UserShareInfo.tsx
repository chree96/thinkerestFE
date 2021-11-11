import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {globalStyle, colors} from '../../../style';
import ImageCircleContainer from '../../atoms/image-circle-container';
import {styles} from './UserShareInfo.styles';
import {ContentType} from '../../../types/user-actions';
import getContentIcon from '../../../utils/content/get-content-icon';
import getContentAction from '../../../utils/content/get-content-action';

interface UserShareInfoProps {
  user: string;
  userImg: any;
  review?: string;
  contentType?: ContentType;
  withoutAction?: boolean;
  textColor?: string;
  style?: any;
}

export default function UserShareInfo({
  user,
  userImg,
  review,
  contentType,
  withoutAction = false,
  textColor = colors.solidWhite,
  style,
}: UserShareInfoProps) {
  const UserAction = useCallback(() => {
    if (contentType) {
      const action = getContentAction(contentType);
      const icon = getContentIcon(contentType);

      return (
        <>
          <Text
            style={[
              globalStyle.textLight,
              styles.txtStyle,
              {color: textColor},
            ]}>
            <Text style={[globalStyle.textBold, {color: textColor}]}>
              {user}{' '}
            </Text>
            {action}
          </Text>
          <View style={styles.iconContainer}>{icon}</View>
        </>
      );
    }

    return null;
  }, [contentType, textColor, user]);

  return (
    <View style={[styles.infoContainer, style]}>
      <ImageCircleContainer img={userImg} style={styles.imgStyle} />
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
