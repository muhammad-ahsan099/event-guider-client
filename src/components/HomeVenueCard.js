import { Image, StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import { Text } from './Text'
import { theme } from '../theming'
import { VENUE_IMAGE } from '../constants/Icons'
import { Touchable } from './Touchable'
import { useNavigation } from '@react-navigation/native'

const SCREEN_WIDTH = Dimensions.get('window').width;
const cardWidth = SCREEN_WIDTH * 0.45;


export default function HomeVenueCard({venue}) {

  const TruncatedText = (text) => {
    let truncatedText = text;
    if (truncatedText.length > 40) {
      truncatedText = text.slice(0, 40) + '...';
    }

    return truncatedText
  }

  const navigation = useNavigation()
  return (
    <Touchable style={styles.container} onPress={()=> navigation.navigate("DetailPage", {venueId: venue.id})}>
      <Image source={venue?.cover_photo ? {uri: venue?.cover_photo} : VENUE_IMAGE}  style={styles.backgroundImage} />
      <Text color='black' size={16} weight={'medium'}>{venue?.title ? venue?.title : 'Venue Name'}</Text>
      <Text color='lightGrey' size={12} weight={'regular'}>{venue?.address ? TruncatedText(venue?.address) :'Canal road, Faisalabad'}</Text>
    </Touchable>
  )
}


const styles = StyleSheet.create({
    container: {
        width: cardWidth,
        height: 'auto',
        paddingLeft: 12,
        paddingVertical: 14,
        marginVertical: 8,
        borderRadius: 8,
        marginRight: 14
    },
    backgroundImage: {
        width: cardWidth,
        height: 100,
        marginBottom: 6
    }
})