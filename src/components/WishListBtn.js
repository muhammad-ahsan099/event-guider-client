
import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Touchable } from './Touchable'
import { theme } from '../theming'
import Ionicons from "react-native-vector-icons/Ionicons";
import { endPoint } from '../config/EndPoint';
import { getToken } from '../utils/LocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Store from '../config/Store';
import { fetchProfile } from '../redux/actions/AuthAction';


export default function WishListBtn({ wishListId, navigationHandler, favoutiesRoute }) {


    const isUserLoggedIn = useSelector(state => state.AuthReducer.isUserLoggedIn)
    const userProfile = useSelector(state => state.AuthReducer.userProfile)
    const [loading, setLoading] = useState(false)
    const [check, setCheck] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        if (isUserLoggedIn) {
            if (userProfile?.user_wishlist?.to_wishlist?.length >= 0) {
                const filterUserWishlist = userProfile?.user_wishlist?.to_wishlist?.filter(item => item?.id === wishListId)
                if (filterUserWishlist.length === 1) {
                    setCheck(true)
                }
            }
        }
    }, [userProfile])

    useEffect(() => {
        if (favoutiesRoute) {
            setCheck(true);
        }
    }, [favoutiesRoute]);

    const AddToWishlist = async () => {
        if (isUserLoggedIn) {
            try {
                const { access_token } = await getToken();
                setLoading(true);

                const creds = {
                    to_wishlist: wishListId
                }
                let request = {
                    method: 'post',
                    url: `${endPoint}user/user-wishlist/`,
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${access_token}`,
                    },
                    data: creds
                };
                let res = await axios(request);
                if (res.data.success) {
                    if (favoutiesRoute) {
                        Store.dispatch({ type: "FILTER_WATCHLIST", payload: wishListId })
                    }
                    dispatch(fetchProfile(setLoading))

                    setTimeout(() =>
                        !favoutiesRoute && setCheck(!check)
                        , 550)
                }
            }

            catch (error) {
                console.log('Error at Add to Wishlist: ', error);
            }
            finally {
                setTimeout(() =>
                    setLoading(false)
                    , 500)
            }
        } else {
            navigationHandler()
        }
    }

    return (
        <View>
            {
                check ?
                    <Touchable style={styles.heartIcon} onPress={() => AddToWishlist()}>
                        <Ionicons name="heart" size={20} color={theme.colors.primary} />
                    </Touchable>
                    :
                    <Touchable style={styles.heartIcon} onPress={() => AddToWishlist()}>
                        <Ionicons name="heart-outline" size={20} color={theme.colors.primary} />
                    </Touchable>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    heartIcon: {
        alignItems: 'flex-end'
    }
})