import React from 'react'
import FavortiesCard from '../../components/FavortiesCard'
import { styles } from "./FavoritesStyle";
import { Screen } from "../../components/Screen";

export default function Favorties() {
  return (
    <Screen
      statusBarStyle="light"
      scroll
      safeArea
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={styles.screen}
    >
      <FavortiesCard />
    </Screen>
  )
}