import React, {memo, useCallback, useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import DetailBackgroundImage from '../../components/molecules/detail-background-image';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {styles} from './ContentDetail.styles';
import DetailShareData from '../../components/molecules/detail-share-data';
import DetailBackgroundData from '../../components/molecules/detail-background-data';
import DetailBackgroundHeader from '../../components/molecules/detail-background-header';
import ContentReview, {
  ContentDetails,
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
import ButtonPrimary from '../../components/atoms/button-primary';

interface ContentDetailProps {
  navigation: any;
  props: any;
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
    props,
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
    } = contentDetail;

    const formattedDuration = formatDuration(runningTimeInMinutes);
    const contentImage = image?.url || 'a';
    const backgroundData = {title, genre, year, duration: formattedDuration};
    const shareAndRateData = {
      friendsShare,
      peopleShare,
      peopleRate,
    };

    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const [tabViewState, setTabViewState] = useState(initialTabViewState);

    const reviewsData = useMemo(
      () =>
        tabViewState.index === 0 ? friendsContentReviews : peopleContentReviews,
      [friendsContentReviews, peopleContentReviews, tabViewState.index],
    );

    const renderReviews = useCallback(
      ({item}) => (
        <ReviewItem
          user={item?.user}
          userImg={item?.userImg}
          review={item?.review}
        />
      ),
      [],
    );

    const reviewKeyExtractor = useCallback(
      index => {
        const section =
          tabViewState.index === 0 ? 'friend-review-' : 'person-review-';

        return section + index;
      },
      [tabViewState.index],
    );

    const reviews = useCallback(
      () => (
        <View onStartShouldSetResponder={(): boolean => true}>
          <FlatList
            data={reviewsData}
            renderItem={renderReviews}
            contentContainerStyle={{paddingBottom: 40}}
            keyExtractor={(item, index) => reviewKeyExtractor(index)}
          />
        </View>
      ),
      [renderReviews, reviewKeyExtractor, reviewsData],
    );

    const sceneMap = useMemo(
      () =>
        SceneMap({
          friendsReviews: reviews,
          peopleReviews: reviews,
        }),
      [reviews],
    );

    const renderTabBar = useCallback(
      (props: any) => (
        <TabBar
          {...props}
          renderLabel={({route, focused, color}) => (
            <View style={{flex: 1, width: screenWidth / 2}}>
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

    return isLoading ? (
      <View style={[styles.container, globalStyle.loaderContainer]}>
        <AnimatedLoader
          visible={true}
          // overlayColor="rgba(255,255,255,0.75)"
          source={require('../../../assets/animations/loader-bars-mono-color.json')}
          animationStyle={globalStyle.lottieLoader}
          speed={1}
        />
      </View>
    ) : (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <DetailBackgroundImage contentDetailImg={{uri: contentImage}}>
          <DetailBackgroundHeader
            onGoBack={() => navigation.navigate('Search')}
            onAddToWatchlist={() => navigation.navigate('Search')}
          />
          <DetailBackgroundData data={backgroundData} />
        </DetailBackgroundImage>
        <DetailShareData data={shareAndRateData} iconColor={contentColor} />
        <DetailRating
          rate={contentDetail?.peopleRate}
          onMorePress={() => {
            retrieveContentReviews(contentDetail?.id);
            toggleDrawer();
          }}
        />

        <ButtonPrimary
          text={'Add review'}
          bgColor={contentColor}
          onPress={() => console.log('added review')}
        />

        <DetailPlot plot={contentDetail?.plot} />
        <DetailCredits credits={contentDetail?.credits} />

        <SwipeableBottomDrawer
          visible={isDrawerVisible}
          contentContainerStyle={{backgroundColor: colors.codGrey}}
          closeAction={toggleDrawer}>
          <View style={{flex: 1, minHeight: screenHeight * 0.6}}>
            {isLoadingReviews ? (
              <AnimatedLoader
                visible={true}
                // overlayColor="rgba(255,255,255,0.75)"
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
