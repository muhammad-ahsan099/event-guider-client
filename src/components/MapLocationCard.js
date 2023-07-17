import { View, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { theme } from '../theming'
import { Text } from './Text'
import { POST_VENUE } from '../constants/Icons'
import { Touchable } from './Touchable'
import ArrowIcon from 'react-native-vector-icons/AntDesign'
import MapBg from '../assets/images/mapBG.jpeg'

export default function MapLocationCard() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={MapBg}
                resizeMode="cover"
                style={styles.bgMap}
            >

                <Text color='primary' size={18} weight={'semiBold'}>Venue Finder</Text>

                <View style={styles.innerContainer}>
                    {/* <Image source={POST_VENUE} style={styles.img} /> */}
                    <Text color='black' size={14} weight={'regular'}>Interactive Society Maps</Text>
                </View>

                <Touchable style={styles.postBtn}>
                    <Text color={'primary'} size={14} weight={'medium'}>Try it now</Text>
                    <ArrowIcon name='arrowright' size={18} color={theme.colors.primary} />
                </Touchable>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        borderRadius: 8,
        backgroundColor: theme.colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 20,
        elevation: 5,
    },
    bgMap: {
        paddingHorizontal: 12,
        paddingVertical: 14,
    },
    innerContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 50,
        height: 50,
        marginRight: 40
    },
    postBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: 'rgba(248, 29, 29, 0.1)',
        borderRadius: 10,
        marginTop: 20,
        width: 120
    }
})