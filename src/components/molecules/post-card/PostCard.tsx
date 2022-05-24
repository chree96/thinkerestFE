import React, {memo, useCallback, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors, shadows} from '../../../style';
import {styles} from './PostCard.styles';
import {useMemo} from 'react';
import IconWithText from '../icon-with-text';
import MoreButton from '../../atoms/more-button';
import {getButtonActions} from './utils';

interface PostCardProps {
  postData: {
    contentImg: any;
    genre: string;
    review: string;
  };
  contentColor: string;
  onPress: () => void;
  style?: any;
}

const PostCard = memo<PostCardProps>(
  ({postData, contentColor, onPress, style}) => {
    const [isVisible, setIsVisible] = useState(false);

    const actionButtons = useMemo(() => getButtonActions(), []);

    const toggleVisibility = useCallback(() => {
      setIsVisible(!isVisible);
    }, [isVisible]);

    const Review = useCallback(
      () => (
        <View style={styles.reviewContainer}>
          <View style={styles.contentInfoContainer}>
            {actionButtons}

            <IconWithText
              svgName={'speechBubble'}
              text={''}
              width={20}
              textStyle={{color: colors.doveGrey}}
              svgColor={colors.doveGrey}
            />
          </View>
          {isVisible ? (
            <Text style={styles.reviewText}>{postData?.review}</Text>
          ) : null}
          <MoreButton
            style={styles.moreButton}
            textColor={contentColor}
            isVisible={true}
            isShowingMore={isVisible}
            onPress={toggleVisibility}
          />
        </View>
      ),
      [
        contentColor,
        isVisible,
        postData?.review,
        actionButtons,
        toggleVisibility,
      ],
    );

    return (
      <View style={[shadows.little, styles.cardContainer, style]}>
        <TouchableOpacity onPress={onPress} style={styles.imgContainer}>
          <Image
            source={postData?.contentImg}
            style={styles.imgStyle}
            key={postData?.contentImg}
            resizeMode={'contain'}
          />
        </TouchableOpacity>

        <Review />
      </View>
    );
  },
);
export default PostCard;
