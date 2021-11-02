import React, {memo, useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import DetailBackgroundImage from '../../components/molecules/detail-background-image';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './ContentDetail.styles';
import DetailShareData from '../../components/molecules/detail-share-data';
import DetailBackgroundData from '../../components/molecules/detail-background-data';
import DetailBackgroundHeader from '../../components/molecules/detail-background-header';
import {ContentDetails} from '../../store/modules/contents/contents.types';
import AnimatedLoader from 'react-native-animated-loader';
import {globalStyle} from '../../style';
import formatDuration from '../../utils/content/format-duration';
import SwipeableBottomDrawer from '../../components/molecules/swipeable-bottom-drawer';
import DetailPlot from '../../components/molecules/detail-plot';
import DetailRating from '../../components/molecules/detail-rating';

interface ContentDetailProps {
  navigation: any;
  props: any;
  contentColor: string;
  contentDetail: ContentDetails;
  isLoading: boolean;
  retrieveContentDetail: (payload: string) => void;
}

const ContentDetail = memo<ContentDetailProps>(
  ({navigation, props, contentColor, contentDetail, isLoading}) => {
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
    const contentImage = image?.url;
    const backgroundData = {title, genre, year, duration: formattedDuration};
    const shareAndRateData = {
      friendsShare,
      peopleShare,
      peopleRate,
    };

    const [isDrawerVisible, setDrawerVisible] = useState(false);

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
        <DetailPlot plot={contentDetail?.plot} />
        <DetailRating
          rate={contentDetail?.peopleRate}
          onMorePress={toggleDrawer}
        />

        <SwipeableBottomDrawer
          visible={isDrawerVisible}
          closeAction={toggleDrawer}>
          <View>
            <Text>ciao</Text>
          </View>
        </SwipeableBottomDrawer>
      </ScrollView>
    );
  },
);

export default ContentDetail;
