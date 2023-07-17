import React from 'react'
import FavortiesCard from '../../components/FavortiesCard'
import { styles } from "./FavoritesStyle";
import { Screen } from "../../components/Screen";
import Appbar from '../../components/Appbar';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Text } from '../../components/Text';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useEffect } from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme } from '../../theming';

export default function Favorties() {

  const [userData, setUserData] = useState(null)

  const navigation = useNavigation()
  let userProfile = useSelector(state => state.AuthReducer.userProfile);
  const userWishlist = useMemo(() => userProfile?.user_wishlist, [userProfile]);

  useEffect(() => {
    if (userWishlist) {
      setUserData(userWishlist)
    }
  }, [userProfile])

  const navigationHandler = () => {
    navigation.navigate('Login')
  }
  // console.log("USer Profile At Favourites: ", userWishlist);
  return (
    <Screen
      statusBarStyle="light"
      scroll
      safeArea
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={styles.screen}
    >
      <Appbar />
      <Text color='black' weight={'semiBold'} size={26} style={styles.heading}>
        Favorites & Saved
      </Text>
      <View style={styles.container}>
        {
          userData?.to_wishlist.length < 1 ?

            <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: '30%' }}>
              <MaterialCommunityIcons name='text-box-remove-outline' color={theme.colors.primary} size={70} />
              <Text size={16} weight={'medium'}>NO RESULTS FOUND!</Text>
              <Text style={{width: '91%', textAlign: 'center', marginTop: 10}} color='black' weight={'regular'}>Hi, it looks like youen't added any Favourite Venue yet. You can add a venue listing to your Favourite by tapping the <Ionicons name="heart" size={20} color={theme.colors.danger} /> icon on top right corner of the Venue.</Text>
            </View>
            :
            userData?.to_wishlist.map((wishListVenue, index) => {
              return (
                // <Text>{wishListVenue.address}</Text>
                <FavortiesCard
                  key={index}
                  wishListVenue={wishListVenue}
                  id={wishListVenue?.id}
                  favoutiesRoute={true}
                  navigationHandler={navigationHandler}
                />
              )
            })
        }
      </View>
    </Screen>
  )
}