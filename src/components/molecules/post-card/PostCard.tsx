import React, {memo, useCallback, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {colors, globalStyle, shadows} from '../../../style';
import {styles} from './PostCard.styles';
import {useMemo} from 'react';
import IconWithText from '../icon-with-text';
import StarRating from '../star-rating';
import getButtonActions from '../../../utils/post/button-actions';
import formatCounter from '../../../utils/post/format-counter';
import MoreButton from '../../atoms/more-button';

interface PostCardProps {
  postData: {
    starRating: number;
    contentImg: any;
    title: string;
    genre: string;
    review: string;
    friendCounter: number;
    worldCounter: number;
  };
  contentColor: string;
  style?: any;
}

const NUM_OF_LINES = 2;

const PostCard = memo<PostCardProps>(({postData, contentColor, style}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNumberOfLines, setCurrentNumberOfLines] = useState<
    number | undefined
  >(NUM_OF_LINES);

  const renderBtnActions = useMemo(() => getButtonActions(), []);

  const formattedCounter = useMemo(
    () => formatCounter(postData?.worldCounter),
    [postData?.worldCounter],
  );

  const changeNumberOfLines = useCallback(
    () =>
      !currentNumberOfLines
        ? setCurrentNumberOfLines(NUM_OF_LINES)
        : setCurrentNumberOfLines(undefined),
    [currentNumberOfLines],
  );

  const onTextRender = useCallback(
    (numberOfLines: number) =>
      numberOfLines > NUM_OF_LINES ? setIsVisible(true) : setIsVisible(false),
    [],
  );

  return (
    <View style={[shadows.medium, styles.cardContainer, style]}>
      <View style={styles.contentContainer}>
        <View style={[shadows.little, styles.imgContainer]}>
          <Image
            source={postData?.contentImg}
            style={styles.imgStyle}
            key={postData?.contentImg}
          />
        </View>
        {/* MOVIE INFO (RIGHT SIDE) */}
        <View style={globalStyle.flex}>
          <Text
            style={[
              globalStyle.textRegular,
              globalStyle.textCardTitleSize,
              styles.textAlignCenter,
            ]}>
            {postData?.title}
          </Text>
          <View>
            <Text
              style={[
                globalStyle.textLight,
                globalStyle.textSmallSize,
                styles.textAlignCenter,
                styles.marginNegative,
              ]}>
              {postData?.genre}
            </Text>
          </View>
          {/* DA RIVEDERE */}
          <View style={styles.contentInfoContainer}>
            <IconWithText
              svgName={'world'}
              text={formattedCounter}
              width={30}
              svgColor={colors.solidWhite}
            />
            <IconWithText
              svgName={'people'}
              text={postData?.friendCounter}
              width={30}
              svgColor={colors.solidWhite}
            />
          </View>
          <StarRating rating={postData?.starRating} />
          <View style={styles.btnActionsContainer}>{renderBtnActions}</View>
        </View>
      </View>
      <View style={styles.reviewContainer}>
        <Text
          numberOfLines={currentNumberOfLines}
          onTextLayout={e => onTextRender(e.nativeEvent.lines.length)}
          style={[globalStyle.textLight, globalStyle.textSmallishSize]}>
          {postData?.review}
        </Text>
        <MoreButton
          textColor={contentColor}
          isVisible={isVisible}
          isShowingMore={!currentNumberOfLines}
          onPress={changeNumberOfLines}
        />
      </View>
    </View>
  );
});
export default PostCard;
