import { ActivityIndicator, Animated, ScrollView, View } from 'react-native'
import React, { useRef } from 'react'
import { Text } from '../../components/Text';
import { styles } from "./HomeStyle";
import PostVenueCard from '../../components/PostVenueCard';
import MapLocationCard from '../../components/MapLocationCard';
import HomeVenueCard from '../../components/HomeVenueCard';
import { Touchable } from '../../components/Touchable';
import { venues, venuesOne, venuesTwo } from '../../constants/Data';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMostPopularVenues, fetchRecommendedVenues, fetchViewedVenues } from '../../redux/actions/VenueDetailAction';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProfile } from '../../redux/actions/AuthAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '../../theming';

const { diffClamp } = Animated;
const headerHeight = 60 * 2;

export default function Home() {
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation
  const dispatch = useDispatch()
  const backPress = () => {
    navigation.goBack()
  }

  const mostPopularVenues = useSelector(state => state.VenueDetailReducer.mostPopularVenues)
  const recommendedVenues = useSelector(state => state.VenueDetailReducer.recommendedVenues)
  const viewedVenues = useSelector(state => state.VenueDetailReducer.viewedVenues)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch IDs from local storage
        const idsString = await AsyncStorage.getItem('ids');
        const ids = JSON.parse(idsString) || [];

        console.log("ids: ", ids);
        // Dispatch actions with the IDs
        dispatch(fetchMostPopularVenues(setLoading));
        dispatch(fetchRecommendedVenues(setLoading));
        dispatch(fetchProfile(setLoading));
        dispatch(fetchViewedVenues(setLoading, ids));
      } catch (error) {
        console.log('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [])

  // useEffect(() => {
  //   dispatch(fetchProfile(setLoading))
  // }, [userProfile])

  const ref = useRef(null);

  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight / 2)],
  });

  const translateYNumber = useRef();

  translateY.addListener(({ value }) => {
    translateYNumber.current = value;
  });

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y: scrollY.current,
          },
        },
      },
    ],
    {
      useNativeDriver: true,
      listener: (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
      },
    }
  );

  const getCloser = (value, checkOne, checkTwo) => {
    return Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;
  };

  const handleSnap = ({ nativeEvent }) => {
    const offsetY = nativeEvent.contentOffset.y;
    if (
      !(
        translateYNumber.current === 0 ||
        translateYNumber.current === -headerHeight / 2
      )
    ) {
      if (ref.current) {
        ref.current.scrollTo({
          offset:
            getCloser(translateYNumber.current, -headerHeight / 2, 0) ===
              -headerHeight / 2
              ? offsetY + headerHeight / 2
              : offsetY - headerHeight / 2,
        });
      }
    }
  };



  return (
    <>
      <View style={styles.screen}>

        <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
          <Header {...{ headerHeight }} />
        </Animated.View>

        <Animated.ScrollView
          ref={ref}
          onScroll={handleScroll}
          onMomentumScrollEnd={handleSnap}
          contentContainerStyle={{ paddingTop: headerHeight }}
          scrollEventThrottle={16}
        >
          {
            loading ?
              <View style={{ marginTop: '50%' }}>
                <ActivityIndicator
                  size="large"
                  color={theme.colors.primary}
                />
              </View>
              :
              <View style={styles.container}>
                <View style={styles.recommendCards}>
                  <View style={styles.cardHeader}>
                    <Text color='black' weight={'medium'}>Viewed Venues</Text>
                    <Touchable>
                      <Text size={12} color='secondary'>View all</Text>
                    </Touchable>
                  </View>

                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                      viewedVenues.map((venue, ind) => (
                        <HomeVenueCard key={ind} venue={venue} />
                      ))
                    }
                  </ScrollView>
                </View>

                <MapLocationCard />

                <View style={styles.recommendCards}>
                  <View style={styles.cardHeader}>
                    <Text color='black' weight={'medium'}>Popular Venues</Text>
                    <Touchable>
                      <Text size={12} color='secondary'>View all</Text>
                    </Touchable>
                  </View>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                      mostPopularVenues.map((venue, ind) => (
                        <HomeVenueCard key={ind} venue={venue} />
                      ))
                    }
                  </ScrollView>
                </View>
                <PostVenueCard />
                <View style={styles.recommendCards}>
                  <View style={styles.cardHeader}>
                    <Text color='black' weight={'medium'}>Recommended Venues</Text>
                    <Touchable>
                      <Text size={12} color='secondary'>View all</Text>
                    </Touchable>
                  </View>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                      recommendedVenues?.map((venue, ind) => (

                        <HomeVenueCard key={ind} venue={venue} />
                      ))
                    }
                  </ScrollView>
                </View>

              </View>
          }
        </Animated.ScrollView>
      </View>
    </>
  )
}