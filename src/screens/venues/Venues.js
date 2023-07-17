import React, { useEffect, useState } from 'react'
import VenueCard from "../../components/VenueCard";
import { Screen } from '../../components/Screen';
import { styles } from './VenuesStyle';
import Appbar from '../../components/Appbar';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllVenues } from '../../redux/actions/VenueDetailAction';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../theming';

function Venues() {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)
    const allVenues = useSelector(state => state.VenueDetailReducer.all_venues);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllVenues(setLoading))
    }, [])

    const navigationHandler = () => {
        navigation.navigate('Login')
    }
    const navigate = (id) => {
        navigation.navigate("DetailPage", { venueId: id })
    }

    return (
        <Screen
            statusBarStyle="light"
            scroll
            safeArea
            style={{ backgroundColor: 'white' }}
            contentContainerStyle={styles.screen}
        >
            <Appbar backIcon />
            <View style={styles.container}>
                {
                    loading ?
                        <View style={{ marginTop: '50%' }}>
                            <ActivityIndicator
                                size="large"
                                color={theme.colors.primary}
                            />
                        </View>
                        :
                        allVenues?.map((venue) => (
                            <VenueCard
                                key={venue.id}
                                venue={venue}
                                navigate={navigate}
                                navigationHandler={navigationHandler}
                            />
                        ))

                }

            </View>
        </Screen>
    )
}

export default Venues
