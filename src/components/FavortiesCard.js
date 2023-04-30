import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import image from '../assets/images/venue.jpg';
import { Text } from '../components/Text';
import { Touchable } from './Touchable';
import { theme } from '../theming';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { venuesTwo } from '../constants/Data';

function FavortiesCard() {
    return (
        <>
            <Text color='black' weight={'semiBold'} size={26} style={styles.heading}>
                Favorites & Saved
            </Text>
            {
                venuesTwo.map((items, index) => (
                    <Touchable style={styles.container} key={index}>
                        <Image source={items.url ? {uri: items.url}  :image} resizeMode="cover" style={styles.backgroundImage} />
                        <View>
                            <Text color={theme.colors.grey} size={12} style={styles.daysMargin}>
                                27 days ago
                            </Text>
                            <Text color='primary' size={18} weight={'semiBold'}>{items.title ? items.title : 'Venue Name'}</Text>
                            <Text color='black'>{items.location? items.location : 'Canal road, Faisalabad'}</Text>
                            <View style={styles.heartIcon}>
                                <Ionicons name="heart" size={20} color={theme.colors.primary} />
                            </View>
                            <View style={styles.btnContainer}>
                                <Touchable style={styles.emailBtn}>
                                    <Text weight={'medium'} size={13}>EMAIL</Text>
                                </Touchable>
                                <Touchable style={[styles.emailBtn, { backgroundColor: theme.colors.primary }]}>
                                    <Text weight={'medium'} size={13} color='white'>CALL</Text>
                                </Touchable>
                                <Touchable style={styles.emailBtn}>
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

export default FavortiesCard



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
        borderRadius: 4,
    },
    screen: {
        flex: 1,
        paddingHorizontal: 16,
    },
    backgroundImage: {
        height: 125,
        width: 120,
        marginRight: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 3
    },
    emailBtn: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderRadius: 4,
        paddingHorizontal: 4,
        paddingVertical: 2,
        marginTop: 4,
        marginHorizontal: 2
    },
    heading: {
        marginBottom: 20
    },
    daysMargin: {
        marginBottom: 2
    },
    heartIcon : {
        alignItems:'flex-end'
    }
})