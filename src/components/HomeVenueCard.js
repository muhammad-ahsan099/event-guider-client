import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from './Text'
import { theme } from '../theming'
import { VENUE_IMAGE } from '../constants/Icons'

export default function HomeVenueCard() {
  return (
    <View style={styles.container}>
      
      <Image source={VENUE_IMAGE} resizeMode="cover" style={styles.backgroundImage} />
      <Text color='black' size={16} weight={'medium'}>Venue Name</Text>
      <Text color='lightGrey' size={12} weight={'regular'}>Canal road, Faisalabad</Text>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        // flex:1,
        // flexDirection: 'row',
        width: 'auto',
        height: 'auto',
        paddingLeft: 12,
        // paddingRight: 20,
        paddingVertical: 14,
        marginVertical: 8,
        borderRadius: 8,
    },
    backgroundImage: {
        width: '100%',
        height: 80,
        marginBottom: 6
    }
})