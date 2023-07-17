import React from 'react'
import { View, StyleSheet, Image, Linking } from 'react-native'
import image from '../assets/images/venue.jpg';
import { Text } from '../components/Text';
import { Touchable } from './Touchable';
import { theme } from '../theming';
import Ionicons from "react-native-vector-icons/Ionicons";
import { venuesTwo } from '../constants/Data';
import WishListBtn from './WishListBtn';

export default function VenueCard({ venue, navigationHandler, navigate }) {

    const openEmailApp = (email) => {
        const recipientEmail = email; // Replace with the recipient email address
        const url = `mailto:${recipientEmail}`;

        Linking.openURL(url)
            .catch((error) => console.error('An error occurred', error));
    };

    const openPhoneCall = (phone) => {
        const phoneNumber = '03056496364'; // Replace with the desired phone number
        const url = `tel:${phoneNumber}`;

        Linking.openURL(url)
            .catch((error) => console.error('An error occurred', error));
    };

    const openMessagingApp = (phone) => {
        const phoneNumber = '03056496364'; // Replace with the desired phone number
        const message = 'Hello!'; // Replace with the desired message
        const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
        Linking.openURL(url)
            .catch((error) => console.error('An error occurred', error));
    };

    const openWhatsApp = (phone) => {
        const phoneNumber = '1234567890'; // Replace with the desired phone number
        const message = 'Hello!'; // Replace with the desired message
        const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        Linking.openURL(url)
            .catch((error) => console.error('An error occurred', error));
    };

    return (
        <>
            {/* { */}
            <Touchable style={styles.container} onPress={()=> navigate(venue?.id)}>
                <Image source={venue?.cover_photo ? { uri: venue?.cover_photo } : image} resizeMode="cover" style={styles.backgroundImage} />
                <View style={{flex: 1}}>
                    <Text color='primary' size={16} weight={'semiBold'}>{venue?.title ? (venue.title.length > 20 ? `${venue.title.substring(0, 20).trim()}...` : venue.title) : 'Venue Name'}</Text>
                    <Text color='black' style={styles.addressText}>{venue?.address ? venue?.address.trim() : 'Canal road, Faisalabad'}</Text>


                    <View style={{alignItems: 'flex-end', width: '100%'}}>
                        <WishListBtn wishListId={venue.id} navigationHandler={navigationHandler} />
                    </View>
                    <View style={styles.btnContainer}>
                        <Touchable style={styles.emailBtn} onPress={() => openEmailApp(venue?.email)}>
                            <Text weight={'medium'} size={13}>EMAIL</Text>
                        </Touchable>
                        <Touchable style={[styles.emailBtn, { backgroundColor: theme.colors.primary }]} onPress={() => openPhoneCall(venue?.email)}>
                            <Text weight={'medium'} size={13} color='white'>CALL</Text>
                        </Touchable>
                        <Touchable weight={'medium'} style={styles.emailBtn} onPress={() => openMessagingApp(venue?.email)}>
                            <Text weight={'medium'} size={13}>SMS</Text>
                        </Touchable>
                        <Touchable style={[styles.emailBtn, { paddingHorizontal: 4 }]} onPress={() => openWhatsApp(venue?.email)}>
                            <Ionicons name="ios-logo-whatsapp" size={18} color={theme.colors.primary} />
                        </Touchable>
                    </View>
                </View>
            </Touchable>

            {/* } */}
        </>

    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 4
    },
    screen: {
        flex: 1,
        paddingHorizontal: 16,
    },
    backgroundImage: {
        height: 110,
        width: 100,
        marginRight: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    emailBtn: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderRadius: 4,
        paddingHorizontal: 4,
        paddingVertical: 2,
        marginTop: 4,
        marginRight: 4
    },
    addressText: {
        flex: 1,
        marginTop: 4,
        maxWidth: '100%', // Set a maximum width for the text
        flexWrap: 'wrap',
    },
})