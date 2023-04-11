import { ScrollView, View } from 'react-native'
import React from 'react'
import { Screen } from '../../components/Screen';
import { Text } from '../../components/Text';
import { styles } from "./HomeStyle";
import { theme } from "../../theming";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from '../../components/Button';
import PostVenueCard from '../../components/PostVenueCard';
import MapLocationCard from '../../components/MapLocationCard';
import HomeVenueCard from '../../components/HomeVenueCard';
import Appbar from '../../components/Appbar';

export default function Home() {
  return (
    <>
      <Screen
        statusBarStyle="light"
        scroll
        safeArea
        style={{ backgroundColor: 'white' }}
        contentContainerStyle={styles.screen}
      >
        <Appbar />

        <View style={styles.container}>
        <View style={styles.recommendCards}>
          <Text color='black' weight={'medium'}>Viewed Venues</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              [1, 2, 3, 4, 5].map((ind) => (
                <HomeVenueCard key={ind} />
              ))
            }
          </ScrollView>
        </View>

        <MapLocationCard />

        <View style={styles.recommendCards}>
          <Text color='black' weight={'medium'}>Recommended Venues</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              [1, 2, 3, 4, 5].map((ind) => (
                <HomeVenueCard key={ind} />
              ))
            }
          </ScrollView>
        </View>
        <PostVenueCard />
        </View>
      </Screen>
    </>
  )
}