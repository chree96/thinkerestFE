import React from 'react';
import {Text, View} from 'react-native';
import {colors, globalStyle, sizes} from '../../../style';
import ImageCircleContainer from '../../atoms/image-circle-container';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './UserShareInfo.styles';
import {useMemo} from 'react';
import {ContentType} from '../../../types/user-actions';
import {Movie} from '../../atoms/svg';

interface UserShareInfoProps {
  user: string;
  userImg: string;
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
    switch (contentType) {
      case ContentType.tvSeries:
      case ContentType.movies:
      case ContentType.games:
      case ContentType.books:
        return (
          <>
            <Text style={[globalStyle.textLight, styles.txtStyle]}>
              <Text style={globalStyle.textBold}>{user} </Text>
              sta vedendo
            </Text>
            <View style={styles.iconContainer}>
              <Movie fill={colors.cherryRed} width={sizes.larger} />
            </View>
          </>
        );
    }
  }, []);

  return (
    <View style={[styles.infoContainer, style]}>
      <ImageCircleContainer img={userImg} style={styles.imgStyle} />
      {renderUserAction}
    </View>
  );
}
