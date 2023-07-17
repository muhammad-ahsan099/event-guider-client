import { View, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { Text } from '../../components/Text'
import { theme } from '../../theming'
import { Touchable } from '../../components/Touchable'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from '../../components/TextInput'
import Feather from "react-native-vector-icons/Feather";
import { useEffect } from 'react'
import { endPoint } from '../../config/EndPoint'
import { useState } from 'react'
import axios from 'axios'

export default function Search() {
    const navigation = useNavigation();
    const [searchVenues, setSearchVenues] = useState([])
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');


    useEffect(() => {

        const SearchHandler = async () => {
            if (query !== '') {
                // let queryText = query.split(' ').join('+')
                let queryText = query
                try {
                    setLoading(true);
                    let request = {
                        method: 'get',
                        url: `${endPoint}venues/search-venues/?search=${query}`,
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    };
                    let res = await axios(request);
                    console.log('Res of Searchbar: ', res.data);
                    console.log('queryText: ', queryText);

                    if (res.data) {
                        setSearchVenues(res?.data)
                    }
                }
                catch (error) {
                    console.log('Error at Search Movies: ', error);
                }
                finally {
                    setLoading(false)
                }
            }
        }

        SearchHandler();
    }, [query])


    return (
        <View>
            <View style={styles.searchContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Touchable onPress={() => navigation.goBack()} style={styles.menuBtn}>
                        <Feather name='arrow-left' color={theme.colors.white} size={26} />
                    </Touchable>
                </View>

                <TextInput
                    placeholder={'Search venues'}
                    placeholderColor={theme.colors.placeholderColor}
                    containerStyle={styles.textInput}
                    style={[
                        styles.textInputText,
                    ]}
                    // value={email}
                    // onChangeText={(text)=> setEmail(text)}
                    // // onBlur={handleBlur('email')}

                    value={query}
                    onChangeText={(text) => setQuery(text)}
                    onBlur={() => {
                        setQuery('')
                    }}
                />

            </View>
            <View style={styles.venuesContainer}>
                {
                    loading ?
                        <View style={{ marginTop: '50%' }}>
                            <ActivityIndicator
                                size="large"
                                color={theme.colors.primary}
                            />
                        </View>
                        :
                        searchVenues?.map((venue, index) => {
                            return (

                                <Touchable key={index} style={styles.cardContainer} onPress={() => navigation.navigate("DetailPage", { venueId: venue?.id })}>
                                    <Image source={{ uri: venue?.cover_photo }} resizeMode="cover" style={styles.backgroundImage} />
                                    <View style={{ flex: 1 }}>
                                        <Text color='primary' size={16} weight={'semiBold'}>{venue?.title ? (venue.title.length > 20 ? `${venue.title.substring(0, 20).trim()}...` : venue.title) : 'Venue Name'}</Text>
                                        <Text color='black' style={styles.addressText}>{venue?.address ? venue?.address.trim() : 'Canal road, Faisalabad'}</Text>
                                    </View>
                                </Touchable>
                            )
                        })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    searchContainer: {
        height: 70,
        backgroundColor: theme.colors.primary,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        justifyContent: 'space-between'
    },
    menuBtn: {
        marginRight: 10
    },
    textInput: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 46,
        paddingHorizontal: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: theme.colors.white,
        backgroundColor: theme.colors.white,
    },
    textInputText: {
        fontSize: 16,
        fontWeight: '400',
    },
    venuesContainer: {
        height: '100%',
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        marginTop: 14
    },
    cardContainer: {
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
    backgroundImage: {
        height: 60,
        width: 60,
        marginRight: 10,
    },

})