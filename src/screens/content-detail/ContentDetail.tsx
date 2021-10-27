import React, {memo, useMemo} from 'react';
import {View} from 'react-native';
import DetailBackgroundImage from '../../components/molecules/detail-background-image';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './ContentDetail.styles';
import DetailShareData from '../../components/molecules/detail-share-data';
import DetailBackgroundData from '../../components/molecules/detail-background-data';
import DetailBackgroundHeader from '../../components/molecules/detail-background-header';

interface ContentDetailProps {
  navigation: any;
  props: any;
  contentColor: string;
}

const ContentDetail = memo<ContentDetailProps>(
  ({navigation, props, contentColor}) => {
    const params = useMemo(() => props?.params, [props?.params]);

    const contentImage = useMemo(
      () => params?.data?.image?.url,
      [params?.data?.image?.url],
    );

    const backgroundData = useMemo(() => {
      const {title, genre, year} = params?.data;

      return {
        title,
        genre,
        year,
      };
    }, [params?.data]);

    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <DetailBackgroundImage contentDetailImg={{uri: contentImage}}>
          <DetailBackgroundHeader
            onGoBack={() => navigation.navigate('Search')}
            onAddToWatchlist={() => navigation.navigate('Search')}
          />
          <DetailBackgroundData data={backgroundData} />
        </DetailBackgroundImage>
        <View style={styles.detailsContainer}>
          <DetailShareData />
        </View>
      </ScrollView>
    );
  },
);

export default ContentDetail;
