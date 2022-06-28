import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {styles} from './DetailRating.styles';
import RatingBox from '../rating-box';
import HorizontalBarGraph from '../horizontal-bar-graph';
import {ContentRating} from '../../../store/modules/contents/contents.types';
import {getGraphData} from './utils';

interface DetailRatingProps {
  onMorePress: () => void;
  rate: number;
  ratingData: ContentRating;
  contentColor: string;
  style?: any;
}

export default function DetailRating({
  rate,
  ratingData,
  contentColor,
  onMorePress,
  style,
}: DetailRatingProps) {
  const graphData = useMemo(() => getGraphData(ratingData), [ratingData]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.titleGrid}>
        <Text style={styles.titleText}>{'Rating & reviews'}</Text>
      </View>
      <View style={styles.graphGrid}>
        <RatingBox rate={rate} ratingData={ratingData} />
        <HorizontalBarGraph
          graphData={graphData?.friendsData}
          contentColor={contentColor}
          style={styles.barGraph}
        />
      </View>
    </View>
  );
}
