import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import image from '../assets/images/venue.jpg';
import { Text } from '../components/Text';
import { Touchable } from './Touchable';
import { theme } from '../theming';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function VenueCard() {
    return (
        <>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((items, index) => (
                    <Touchable style={styles.container} key={index}>
                        <Image source={image} resizeMode="cover" style={styles.backgroundImage} />
                        <View>
                            <Text color='primary' size={16} weight={'semiBold'}>Venue Name</Text>
                            <Text color='black'>Canal road, Faisalabad</Text>

                            <View style={styles.btnContainer}>
                                <Touchable style={styles.emailBtn}>
                                    <Text weight={'medium'} size={13}>EMAIL</Text>
                                </Touchable>
                                <Touchable style={[styles.emailBtn, {  backgroundColor: theme.colors.primary }]}>
                                    <Text weight={'medium'} size={13} color='white'>CALL</Text>
                                </Touchable>
                                <Touchable weight={'medium'} style={styles.emailBtn}>
                                    <Text weight={'medium'} size={13}>SMS</Text>
                                </Touchable>
                                <Touchable style={[styles.emailBtn, { paddingHorizontal: 4 }]}>
                                    <Ionicons name="ios-logo-whatsapp" size={18} color={theme.colors.primary} />
                                </Touchable>
                            </View>
                        </View>
                    </Touchable>
                ))
            }
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
        height: 100,
        width: 100,
        marginRight: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    emailBtn: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderRadius: 4,
        paddingHorizontal: 4,
        paddingVertical: 2,
        marginTop: 4,
        marginHorizontal: 2
    }
})