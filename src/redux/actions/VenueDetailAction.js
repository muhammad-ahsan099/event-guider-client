import { VIEWED_VENUES, SEARCH_VENUES, ALL_VENUES, VENUE_DETAIL, MOST_POPULAR_VENUES, ADD_RATING, UPDATE_RATING, DELETE_RATINGS, VENUE_REVIEW, RECOMMENDED_VENUES } from "../type/Type"
import axios from "axios";
import { endPoint } from '../../config/EndPoint';
import { getToken } from "../../common/localStorage/LocalStorage";

export const fetchAllVenues = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}venues/home-venues/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);
        // console.log("Res of Fetch All Venues: ", res.data);

        if (res.data) {
            dispatch({
                type: ALL_VENUES,
                payload: res?.data?.results,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Home Venues: ', error);
    }
    finally {
        setLoading(false)
    }
}


export const fetchVenueDetail = (setLoading, id) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}venues/venue/${id}`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);

        if (res.data?.success) {
            dispatch({
                type: VENUE_DETAIL,
                payload: res?.data?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Fetch Venue Detail: ', error);
    }
    finally {
        setLoading(false)
    }
}


export const fetchMostPopularVenues = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}venues/most-popular-venues/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);
        // console.log('Res of Popular Venues: ', res.data );

        if (res.data) {
            dispatch({
                type: MOST_POPULAR_VENUES,
                payload: res?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Most Popular Venues: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const fetchRecommendedVenues = (setLoading) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}venues/recommended-venues/`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);

        if (res.data) {
            dispatch({
                type: RECOMMENDED_VENUES,
                payload: res?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Get Most Popular Venues: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const ratingToVenue = (setLoading, creds) => async (dispatch) => {
    try {
        setLoading(true);
        const { access_token } = getToken()
        let request = {
            method: 'post',
            url: `${endPoint}venues/rating/`,
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${access_token}`,
            },
            data: creds
        };
        let res = await axios(request);

        if (res.data.success) {
            dispatch({
                type: ADD_RATING,
                payload: res?.data?.success,
            })
        }
    }
    catch (error) {
        console.log('Error at Rating to Venue: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const updateRatingToVenue = (setLoading, creds, id) => async (dispatch) => {
    try {
        setLoading(true);
        const { access_token } = getToken()
        let request = {
            method: 'put',
            url: `${endPoint}venues/rating/${id}/`,
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${access_token}`,
            },
            data: creds
        };
        let res = await axios(request);
        console.log('Res Update:', res.data);

        if (res.data.success) {
            dispatch({
                type: UPDATE_RATING,
                payload: res?.data?.success,
            })
        }
    }
    catch (error) {
        console.log('Error at Update Ratings to Venue: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const deleteRatingToVenue = (setLoading, id) => async (dispatch) => {
    try {
        setLoading(true);
        const { access_token } = getToken()
        let request = {
            method: 'delete',
            url: `${endPoint}venues/rating/${id}/`,
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${access_token}`,
            },
        };
        let res = await axios(request);
        console.log('Del Rating Res:', res.data);

        if (res.data.success) {
            dispatch({
                type: DELETE_RATINGS,
                payload: res?.data?.success,
            })
        }
    }
    catch (error) {
        console.log('Error at Update Ratings to Venue: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const fetchReviews = (setLoading, id) => async (dispatch) => {
    try {
        setLoading(true);
        console.log("Receive id for Review to be fetch: ", id);

        let request = {
            method: 'get',
            // url: `${endPoint}venues/review/`,
            url: `http://127.0.0.1:8000/api/venues/review/`,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let res = await axios(request);
        // console.log("Res of Review: ", res.data);
        if (res.data) {
            dispatch({
                type: VENUE_REVIEW,
                payload: res?.data?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Review Venues: ', error);
    }
    finally {
        setLoading(false)
    }
}

export const venuesReview = (setLoading, creds) => async (dispatch) => {
    try {
        setLoading(true);
        const { access_token } = getToken()
        let request = {
            method: 'post',
            url: `${endPoint}venues/review/`,
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${access_token}`,
            },
            data: creds
        };
        let res = await axios(request);
        if (res.data.success) {
            dispatch({
                type: VENUE_REVIEW,
                payload: res?.data?.results,
            })
        }
    }
    catch (error) {
        console.log('Error at Review Venues: ', error);
    }
    finally {
        setTimeout(() =>
            setLoading(false)
            , 1000)
    }
}


export const fetchSearchVenues = (setLoading, query) => async (dispatch) => {
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

        if (res.data) {
            dispatch({
                type: SEARCH_VENUES,
                payload: res?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Search Venues: ', error);
    }
    finally {
        setLoading(false)
    }
}
export const fetchViewedVenues = (setLoading, ids) => async (dispatch) => {
    try {
        setLoading(true);
        let request = {
            method: 'get',
            url: `${endPoint}venues/viewed_venues?ids[]=${ids.join('&ids[]=')}`,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        let res = await axios(request);
        console.log('Res of Viewed Venues: ', res.data);

        if (res.data) {
            dispatch({
                type: VIEWED_VENUES,
                payload: res?.data,
            })
        }
    }
    catch (error) {
        console.log('Error at Viewd Venues: ', error);
    }
    finally {
        setLoading(false)
    }
}