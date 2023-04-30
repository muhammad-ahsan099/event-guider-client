import React from 'react'
import VenueCard from "../../components/VenueCard";
import { Screen } from '../../components/Screen';
import { styles } from './VenuesStyle';
import Appbar from '../../components/Appbar';
import { View } from 'react-native';

function Venues() {
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

                <VenueCard />
            </View>
        </Screen>
    )
}

export default Venues
