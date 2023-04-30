import React from 'react'
import FavortiesCard from '../../components/FavortiesCard'
import { styles } from "./FavoritesStyle";
import { Screen } from "../../components/Screen";
import Appbar from '../../components/Appbar';
import { View } from 'react-native';

export default function Favorties() {
  return (
    <Screen
      statusBarStyle="light"
      scroll
      safeArea
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={styles.screen}
    >
      <Appbar />
      <View style={styles.container}>
      <FavortiesCard />
      </View>
    </Screen>
  )
}