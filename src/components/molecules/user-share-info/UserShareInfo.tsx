import React from 'react';
import {Text, View} from 'react-native';
import {globalStyle} from '../../../style';
import ImageCircleContainer from '../../atoms/image-circle-container';
import {styles} from './UserShareInfo.styles';
import {useMemo} from 'react';
import {ContentType} from '../../../types/user-actions';
import getContentIcon from '../../../utils/content/get-content-icon';
import getContentAction from '../../../utils/content/get-content-action';

interface UserShareInfoProps {
  user: string;
  userImg: any;
  contentType: ContentType;
  style?: any;
}

export default function UserShareInfo({
  user,
  userImg,
  contentType,
  style,
}: UserShareInfoProps) {
  const renderUserAction = useMemo(() => {
    const action = getContentAction(contentType);
    const icon = getContentIcon(contentType);
    return (
      <>
        <Text style={[globalStyle.textLight, styles.txtStyle]}>
          <Text style={globalStyle.textBold}>{user} </Text>
          {action}
        </Text>
        <View style={styles.iconContainer}>{icon}</View>
      </>
    );
  }, [contentType, user]);

  return (
    <View style={[styles.infoContainer, style]}>
      <ImageCircleContainer img={userImg} style={styles.imgStyle} />
      {renderUserAction}
    </View>
  );
}
