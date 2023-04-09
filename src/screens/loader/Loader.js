import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
// import { LOGOIMG } from '../../constant/Icons'
import { theme } from '../../theming'
import { Text } from '../../components/Text'

export default function () {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                {/* <Image source={LOGOIMG} style={styles.logoImgStyle} /> */}
                <Text>Logo Image Here</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary
    },
    imgContainer: {
        width: 140,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImgStyle: {
        height: '100%',
        width: '100%',
    }
})