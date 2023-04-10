import React from 'react'
import VenueCard from "../../components/VenueCard";
import { Screen } from '../../components/Screen';
import { styles } from './VenuesStyle';

function Venues() {
    return (
        <Screen
            statusBarStyle="light"
            scroll
            safeArea
            style={{ backgroundColor: 'white' }}
            contentContainerStyle={styles.screen}
        >
            <VenueCard />
        </Screen>
    )
}

export default Venues
