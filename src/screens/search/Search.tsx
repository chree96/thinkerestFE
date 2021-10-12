import React, {memo, useCallback, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationStackProp} from 'react-navigation-stack';
import ContentSectionImage from '../../components/atoms/content-section-image';
import HeaderText from '../../components/molecules/header-text';
import {SearchContent} from '../../store/modules/contents/contents.types';
import {globalStyle} from '../../style';
import {ContentGenre, ContentSearchSections} from '../../types/content';
import {styles} from './Search.styles';
import {getSectionTitle} from './utils';
import AnimatedLoader from 'react-native-animated-loader';

interface SearchProps {
  searchedContentPreview?: any;
  setHiddenHeader: (payload: any) => void;
  retrieveSearchSectionContents: () => void;
  navigation: NavigationStackProp;
  isLoading: boolean;
  contentColor: string;
  searchSectionContent: any;
}

const Search = memo<SearchProps>(
  ({
    searchedContentPreview,
    setHiddenHeader,
    isLoading,
    contentColor,
    navigation,
    retrieveSearchSectionContents,
    searchSectionContent,
  }) => {
    useEffect(() => {
      setHiddenHeader(false);
      retrieveSearchSectionContents();
    }, []);

    const renderSearchedContentList = useCallback(
      ({item}) => (
        <View style={styles.searchedContentContainer}>
          <Text style={styles.searchedContentText}>{item.text}</Text>
        </View>
      ),
      [],
    );

    const renderSingleContent = useCallback(
      ({item}) => (
        <ContentSectionImage
          contentSectionImg={{uri: item?.image?.url}}
          onPress={() => navigation.navigate('Login', {data: 'ciao'})}
        />
      ),
      [navigation],
    );

    const sectionTitle = useCallback(
      (section: ContentSearchSections, genre?: ContentGenre) =>
        getSectionTitle(section, genre),
      [],
    );

    const getContents = useCallback(
      (section: ContentSearchSections, genre?: ContentGenre) => {
        switch (section) {
          case ContentSearchSections.TOP_RATED:
            return searchSectionContent?.topRated;
          case ContentSearchSections.GENRE:
            switch (genre) {
              case ContentGenre.ACTION:
                return searchSectionContent?.byGenre?.action;
              case ContentGenre.ADVENTURE:
                return searchSectionContent?.byGenre?.adventure;
              case ContentGenre.ROMANTIC:
                return searchSectionContent?.byGenre?.romantic;
              default:
                [];
            }
            return searchSectionContent?.byGenre;
          case ContentSearchSections.RECOMMENDED:
            return searchSectionContent?.recommended;
          default:
            return [];
        }
      },
      [
        searchSectionContent?.byGenre,
        searchSectionContent?.recommended,
        searchSectionContent?.topRated,
      ],
    );

    const renderContentSections = useCallback(
      () =>
        Object.keys(ContentSearchSections).map(section => {
          let title = sectionTitle(section as ContentSearchSections);
          let content = getContents(section as ContentSearchSections);

          if (section === ContentSearchSections.GENRE) {
            return Object.keys(ContentGenre).map(genre => {
              title = sectionTitle(
                section as ContentSearchSections,
                genre as ContentGenre,
              );
              content = getContents(
                section as ContentSearchSections,
                genre as ContentGenre,
              );
              return (
                <View
                  key={section + '-' + genre + '-section'}
                  style={styles.contentContainer}>
                  <HeaderText text={title} />
                  <FlatList
                    data={content as SearchContent[]}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => section + index}
                    renderItem={renderSingleContent}
                    horizontal
                  />
                </View>
              );
            });
          }

          return (
            <View key={section + '-section'} style={styles.contentContainer}>
              <HeaderText text={title} />
              <FlatList
                data={content as SearchContent[]}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => section + index}
                renderItem={renderSingleContent}
                horizontal
              />
            </View>
          );
        }),
      [sectionTitle, getContents, renderSingleContent],
    );

    return isLoading ? (
      <View style={[styles.pageContainer, globalStyle.loaderContainer]}>
        <AnimatedLoader
          visible={true}
          // overlayColor="rgba(255,255,255,0.75)"
          source={require('../../../assets/animations/loader-bars-mono-color.json')}
          animationStyle={globalStyle.lottieLoader}
          speed={1}
        />
      </View>
    ) : (
      <View style={styles.pageContainer}>
        {searchedContentPreview.length ? (
          <FlatList
            data={searchedContentPreview}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => 'searched-content-' + index}
            renderItem={renderSearchedContentList}
          />
        ) : (
          <ScrollView>{renderContentSections()}</ScrollView>
        )}
      </View>
    );
  },
);

export default Search;
