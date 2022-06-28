import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import DetailBackgroundImage from '../../components/molecules/detail-background-image';
import {styles} from './ContentDetail.styles';
import DetailBackgroundData from '../../components/molecules/detail-background-data';
import DetailBackgroundHeader from '../../components/molecules/detail-background-header';
import {
  ContentDetails,
  ContentReview,
} from '../../store/modules/contents/contents.types';
import AnimatedLoader from 'react-native-animated-loader';
import {colors, globalStyle} from '../../style';
import formatDuration from '../../utils/content/format-duration';
import SwipeableBottomDrawer from '../../components/molecules/swipeable-bottom-drawer';
import DetailPlot from '../../components/molecules/detail-plot';
import DetailRating from '../../components/molecules/detail-rating';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDimensions} from 'react-native-hooks';
import DetailCredits from '../../components/molecules/detail-credits';
import ReviewItem from '../../components/molecules/review-item';
import ContentReviewsTabBar from '../../components/molecules/content-reviews-tab-bar';
import getContentColor from '../../utils/content/get-content-color';
import LinearGradient from 'react-native-linear-gradient';

interface ContentDetailProps {
  navigation: any;
  contentColor: string;
  contentDetail: ContentDetails;
  friendsContentReviews: ContentReview[];
  peopleContentReviews: ContentReview[];
  isLoading: boolean;
  isLoadingReviews: boolean;
  retrieveContentReviews: (payload: string) => void;
}

const initialTabViewState = {
  index: 0,
  routes: [
    {
      key: 'friendsReviews',
      title: 'Friends',
    },
    {
      key: 'peopleReviews',
      title: 'People',
    },
  ],
};

const ContentDetail = memo<ContentDetailProps>(
  ({
    navigation,
    contentColor,
    contentDetail,
    friendsContentReviews,
    peopleContentReviews,
    isLoading,
    isLoadingReviews,
    retrieveContentReviews,
  }) => {
    const {width: screenWidth, height: screenHeight} = useDimensions().window;

    const {
      title,
      genre,
      year,
      runningTimeInMinutes,
      friendsShare,
      peopleShare,
      peopleRate,
      image,
      rating,
      contentType,
    } = contentDetail;

    const formattedDuration = formatDuration(runningTimeInMinutes);
    const contentImage = image?.url || 'a';
    const backgroundData = {title, genre, year, duration: formattedDuration};

    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const [tabViewState1, setTabViewState1] = useState<0 | 1>(0);
    const [tabViewState, setTabViewState] = useState(initialTabViewState);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(false);
    }, []);

    const toggleVisibility = useCallback(() => {
      setIsVisible(!isVisible);
    }, [isVisible]);

    const reviewsData = useMemo(
      () =>
        tabViewState1 === 0 ? friendsContentReviews : peopleContentReviews,
      [friendsContentReviews, peopleContentReviews, tabViewState1],
    );

    const reviewKeyExtractor = useCallback(
      index => {
        const section =
          tabViewState.index === 0 ? 'friend-review-' : 'person-review-';

        return section + index;
      },
      [tabViewState.index],
    );

    const renderReviews = useCallback(
      (item, index) => (
        <ReviewItem
          key={reviewKeyExtractor(index)}
          user={item?.user}
          userImg={item?.userImg}
          review={item?.review}
        />
      ),
      [reviewKeyExtractor],
    );

    const Reviews = useCallback(
      () => (
        <View
          onStartShouldSetResponder={(): boolean => true}
          style={styles.reviewContainer}>
          {reviewsData.map((item, index) => renderReviews(item, index))}
        </View>
      ),
      [renderReviews, reviewsData],
    );

    const sceneMap = useMemo(
      () =>
        SceneMap({
          friendsReviews: Reviews,
          peopleReviews: Reviews,
        }),
      [Reviews],
    );

    const renderTabBar = useCallback(
      (props: any) => (
        <TabBar
          {...props}
          renderLabel={({route, focused, color}) => (
            <View
              style={[styles.tabBarTextContainer, {width: screenWidth / 2}]}>
              <Text
                style={[
                  styles.tabBarText,
                  globalStyle.textLittleMediumSize,
                  focused ? globalStyle.textBold : globalStyle.textLight,
                  {
                    color: color,
                  },
                ]}>
                {route.title}
              </Text>
            </View>
          )}
          indicatorStyle={[
            styles.buttonSelected,
            {borderBottomColor: contentColor},
          ]}
          activeColor={contentColor}
          inactiveColor={colors.doveGrey}
          style={styles.tabBar}
        />
      ),
      [contentColor, screenWidth],
    );

    const onIndexChange = useCallback((index: number) => {
      setTabViewState({...initialTabViewState, index});
    }, []);

    const toggleDrawer = useCallback(
      () => setDrawerVisible(!isDrawerVisible),
      [isDrawerVisible],
    );

    useEffect(() => {
      retrieveContentReviews(contentDetail?.id);
    }, []);

    const Ratings = useCallback(
      () => (
        <>
          <DetailRating
            rate={contentDetail?.peopleRate}
            ratingData={rating}
            contentColor={getContentColor(contentType)}
            onMorePress={() => {
              retrieveContentReviews(contentDetail?.id);
              toggleDrawer();
            }}
          />

          <ContentReviewsTabBar
            activeIndex={tabViewState1}
            contentColor={getContentColor(contentType)}
            onFriendsPress={() => setTabViewState1(0)}
            onGlobalPress={() => setTabViewState1(1)}
          />
        </>
      ),
      [
        contentDetail?.id,
        contentDetail?.peopleRate,
        contentType,
        rating,
        retrieveContentReviews,
        tabViewState1,
        toggleDrawer,
      ],
    );

    return isLoading ? (
      <View style={[styles.container, globalStyle.loaderContainer]}>
        <AnimatedLoader
          visible={true}
          source={require('../../../assets/animations/loader-bars-mono-color.json')}
          animationStyle={globalStyle.lottieLoader}
          speed={1}
        />
      </View>
    ) : (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <DetailBackgroundImage contentDetailImg={{uri: contentImage}}>
          <DetailBackgroundHeader onGoBack={() => navigation.goBack()} />
          <DetailBackgroundData data={backgroundData} />
        </DetailBackgroundImage>

        <TouchableOpacity
          style={styles.infoTouchable}
          disabled={isVisible}
          onPress={toggleVisibility}>
          <View
            style={[
              styles.infoContainer,
              {maxHeight: isVisible ? undefined : 100},
            ]}>
            <Text style={styles.titleText}>{'Info'}</Text>
            <DetailPlot plot={contentDetail?.plot} />
            <DetailCredits credits={contentDetail?.credits} />
            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0,0,0, 1)']}
              style={[styles.obscuredView]}
            />
          </View>
        </TouchableOpacity>
        <Ratings />
        <Reviews />
        <SwipeableBottomDrawer
          visible={isDrawerVisible}
          contentContainerStyle={{backgroundColor: colors.codGrey}}
          closeAction={toggleDrawer}>
          <View style={{flex: 1, minHeight: screenHeight * 0.6}}>
            {isLoadingReviews ? (
              <AnimatedLoader
                visible={true}
                source={require('../../../assets/animations/loader-bars-mono-color.json')}
                animationStyle={globalStyle.lottieLoader}
                speed={1}
              />
            ) : (
              <TabView
                navigationState={tabViewState}
                renderTabBar={renderTabBar}
                onIndexChange={index => onIndexChange(index)}
                renderScene={sceneMap}
              />
            )}
          </View>
        </SwipeableBottomDrawer>
      </ScrollView>
    );
  },
);

export default ContentDetail;
