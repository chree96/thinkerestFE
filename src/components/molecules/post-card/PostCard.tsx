import React, {memo, useCallback, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {colors, globalStyle, shadows} from '../../../style';
import {styles} from './PostCard.styles';
import {useMemo} from 'react';
import IconWithText from '../icon-with-text';
import getButtonActions from '../../../utils/post/button-actions';
import MoreButton from '../../atoms/more-button';

interface PostCardProps {
  postData: {
    contentImg: any;
    genre: string;
    review: string;
  };
  contentColor: string;
  style?: any;
}

const PostCard = memo<PostCardProps>(({postData, contentColor, style}) => {
  const [isVisible, setIsVisible] = useState(false);

  const renderBtnActions = useMemo(() => getButtonActions(), []);

  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const CardContent = useCallback(
    () => (
      <View style={[styles.imgContainer]}>
        <Image
          source={postData?.contentImg}
          style={styles.imgStyle}
          key={postData?.contentImg}
          resizeMode={'stretch'}
        />
      </View>
    ),
    [postData?.contentImg],
  );

  const Review = useCallback(
    () => (
      <View style={styles.reviewContainer}>
        <View style={styles.contentInfoContainer}>
          {renderBtnActions}

          <IconWithText
            svgName={'airplane'}
            text={''}
            width={24}
            textStyle={{color: colors.doveGrey}}
            svgColor={colors.doveGrey}
          />
        </View>
        {isVisible ? (
          <Text
            style={[
              globalStyle.textLight,
              globalStyle.textSmallishSize,
              {paddingTop: 4},
            ]}>
            {postData?.review}
          </Text>
        ) : null}
        <MoreButton
          textColor={contentColor}
          isVisible={true}
          isShowingMore={false}
          onPress={toggleVisibility}
        />
      </View>
    ),
    [
      contentColor,
      isVisible,
      postData?.review,
      renderBtnActions,
      toggleVisibility,
    ],
  );

  return (
    <View style={[shadows.little, styles.cardContainer, style]}>
      <CardContent />
      <Review />
    </View>
  );
});
export default PostCard;
