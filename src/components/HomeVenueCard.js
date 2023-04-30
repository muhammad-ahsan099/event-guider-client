import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from './Text'
import { theme } from '../theming'
import { VENUE_IMAGE } from '../constants/Icons'

export default function HomeVenueCard({venues}) {
  return (
    <View style={styles.container}>
      
      <Image source={venues?.url ? {uri: venues?.url} : VENUE_IMAGE} resizeMode="cover" style={styles.backgroundImage} />
      <Text color='black' size={16} weight={'medium'}>{venues?.title ? venues?.title : 'Venue Name'}</Text>
      <Text color='lightGrey' size={12} weight={'regular'}>{venues?.location ? venues?.location :'Canal road, Faisalabad'}</Text>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        width: '20%',
        height: 'auto',
        paddingLeft: 12,
        paddingVertical: 14,
        marginVertical: 8,
        borderRadius: 8,
    },
    backgroundImage: {
        width: 140,
        height: 100,
        marginBottom: 6
    }
})