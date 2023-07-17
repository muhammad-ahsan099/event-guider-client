import { View, Text, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { ACTIVE_LOC_ICON } from '../../../../constants/Icons';
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Touchable } from '../../../../components/Touchable';
import Feather from "react-native-vector-icons/Feather";
import { styles } from './MapsStyle';
import { theme } from '../../../../theming';
import Appbar from '../../../../components/Appbar';
import { useRoute } from '@react-navigation/native';

export default function Maps() {
    Geocoder.init('AIzaSyDr-KzBfswJcnc1wFFXUdzoynXFVPtg8h0');
    const route = useRoute()

    const { locAddress } = route?.params;

    const _map = useRef(null);
    const [coords, setCoords] = useState({
        lat: 31.4444906,
        lng: 73.1385436,
    });

    function fetchCoordinates(location) {
        Geocoder.from(location)
            .then(json => {
                var location = json?.results[0]?.geometry?.location;
                setCoords({
                    lat: location?.lat,
                    lng: location?.lng,
                });
            })
            .catch(error => console.warn(error));
    }



    useEffect(() => {
        // fetchCoordinates("E Canal Rd, Green Town New Green Town, Faisalabad, Punjab, Pakistan")
        fetchCoordinates(locAddress)
    }, [])
    console.log('coords: ', coords);

    return (
        <View style={{ flex: 1 }}>
            <Appbar backIcon={true} />
            {/* <Touchable style={styles.headerRoundBtn} onPress={()=> navigation.goBack()}>
              <Feather name='chevron-left' color={theme.colors.black} size={26} />
            </Touchable> */}
            <View>
                <View style={styles.autoCompleteContainer}>
                    <GooglePlacesAutocomplete
                        placeholder='Search here'
                        minLength={2}
                        autoFocus={true}
                        returnKeyType={'search'}
                        fetchDetails={true}
                        listViewDisplayed={false}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log('my data in the list===>', details.geometry.location);
                            // alert('my data in the list===>', details.geometry.location.lat);

                            // let regionTemp = {
                            //     ...this.state.initialRegionNearLocation,
                            //     longitude: details.geometry.location.lng,
                            //     latitude: details.geometry.location.lat
                            // };
                            // this.setState({
                            //     initialRegionNearLocation: regionTemp,
                            //     lat: details.geometry.location.lat,
                            //     long: details.geometry.location.lng,
                            //     StreetAddress: details.formatted_address
                            // }, () => {
                            //     this.getPropertyByLocationApi();
                            // })

                        }}
                        query={{
                            key: 'AIzaSyDr-KzBfswJcnc1wFFXUdzoynXFVPtg8h0',
                            language: 'en',
                        }}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={200}
                        // textInputProps={{
                        //     placeholderTextColor: appThemeMode === 'light' ? Colors.black : Colors.white
                        // }}
                        styles={{
                            container: {
                                flex: 1,
                                zIndex: 9999
                                // backgroundColor: 'orange'
                            },
                            textInputContainer: {
                                flexDirection: 'row',
                            },
                            textInput: {
                                // backgroundColor: appThemeMode === 'light' ? Colors.white : Colors.black,
                                height: 38,
                                borderRadius: 5,
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                                fontSize: 15,
                                flex: 1,
                                // color: appThemeMode === 'light' ? Colors.black : Colors.white,
                            },
                            poweredContainer: {
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                borderBottomRightRadius: 5,
                                borderBottomLeftRadius: 5,
                                borderColor: '#c8c7cc',
                                borderTopWidth: 0.5,
                            },
                            powered: {minHeight: 200},
                            listView: {
                                position: 'absolute',
                                top: 40, // Adjust the top position according to your needs
                                zIndex: 9999,
                                height: 200,
                              },
                            row: {
                                backgroundColor: '#FFFFFF',
                                padding: 13,
                                height: 44,
                                flexDirection: 'row',

                            },
                            separator: {
                                height: 0,
                                backgroundColor: '#c8c7cc',
                            },
                            description: {},
                            loader: {
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                height: 20,
                            },
                        }}
                    />
                </View>


                <MapView
                    provider={PROVIDER_GOOGLE}
                    ref={_map}
                    loadingEnabled={true}
                    loadingIndicatorColor={"#606060"}
                    loadingBackgroundColor={"#ffffff"}
                    zoomEnabled={true}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: 31.4444906,
                        longitude: 73.1385436,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,

                    }}
                    style={{ width: '100%', height: '100%' }}>
                    {coords && (
                        <Marker
                            tracksViewChanges={false}
                            coordinate={{
                                latitude: coords?.lat,
                                longitude: coords?.lng,
                            }}>
                            <Image
                                source={ACTIVE_LOC_ICON}
                                style={{ width: 30, height: 50 }}
                            />
                        </Marker>
                    )}
                </MapView>

            </View>
        </View>
    )
}



// https://serpapi.com/search?engine=google_maps_reviews&data_id=ChIJiU4b9QxCIjkRAzyvGyw_Phw&api_key=e706de30a86041b5b0d85fdf57c1d109e5f583dadbab3e70979847a883c892f1

// 0x3922420cf51b4e89:0x1c3e3f2c1baf3c03



// {
//     "search_metadata": {
//         "id": "647e49f3ad7fa99bdb6f745b",
//         "status": "Success",
//         "json_endpoint": "https://serpapi.com/searches/bcf6457220d4be87/647e49f3ad7fa99bdb6f745b.json",
//         "created_at": "2023-06-05 20:47:47 UTC",
//         "processed_at": "2023-06-05 20:47:47 UTC",
//         "google_maps_url": "https://www.google.com/maps/search/Khayyam+Banquet+Hall?hl=en",
//         "raw_html_file": "https://serpapi.com/searches/bcf6457220d4be87/647e49f3ad7fa99bdb6f745b.html",
//         "total_time_taken": 1.11
//     },
//     "search_parameters": {
//         "engine": "google_maps",
//         "type": "search",
//         "q": "Khayyam Banquet Hall",
//         "google_domain": "google.com",
//         "hl": "en"
//     },
//     "search_information": {
//         "local_results_state": "Results for exact spelling",
//         "query_displayed": "Khayyam Banquet Hall"
//     },
//     "local_results": [
//         {
//             "position": 1,
//             "title": "Khayyam Banquet Hall",
//             "place_id": "ChIJiU4b9QxCIjkRAzyvGyw_Phw",
//             "data_id": "0x3922420cf51b4e89:0x1c3e3f2c1baf3c03",
//             "data_cid": "2035133540293622787",
//             "reviews_link": "https://serpapi.com/search.json?data_id=0x3922420cf51b4e89%3A0x1c3e3f2c1baf3c03&engine=google_maps_reviews&hl=en",
//             "photos_link": "https://serpapi.com/search.json?data_id=0x3922420cf51b4e89%3A0x1c3e3f2c1baf3c03&engine=google_maps_photos&hl=en",
//             "gps_coordinates": {
//                 "latitude": 31.4663233,
//                 "longitude": 73.0806758
//             },
//             "place_id_search": "https://serpapi.com/search.json?engine=google_maps&google_domain=google.com&hl=en&place_id=ChIJiU4b9QxCIjkRAzyvGyw_Phw",
//             "rating": 4.3,
//             "reviews": 1093,
//             "unclaimed_listing": true,
//             "type": "Event venue",
//             "types": [
//                 "Event venue"
//             ],
//             "address": "F38J+G7F, Sargodha Rd, Canal Block Shadman Town, Faisalabad, Punjab, Pakistan",
//             "phone": "+92 41 8783642",
//             "website": "https://www.facebook.com/pages/Khayyam-Banquet/477357092296378",
//             "thumbnail": "https://lh5.googleusercontent.com/p/AF1QipNp39bVEsycn_UCyteaSkz-4jO0DUuw9QHdSsdl=w80-h106-k-no"
//         },
//         {
//             "position": 2,
//             "title": "Khayyam Qila Banquet Hall Faisalabad",
//             "place_id": "ChIJx_WSOoNCIjkR_49fhaWUFNw",
//             "data_id": "0x392242833a92f5c7:0xdc1494a5855f8fff",
//             "data_cid": "15858463626506506239",
//             "reviews_link": "https://serpapi.com/search.json?data_id=0x392242833a92f5c7%3A0xdc1494a5855f8fff&engine=google_maps_reviews&hl=en",
//             "photos_link": "https://serpapi.com/search.json?data_id=0x392242833a92f5c7%3A0xdc1494a5855f8fff&engine=google_maps_photos&hl=en",
//             "gps_coordinates": {
//                 "latitude": 31.433176,
//                 "longitude": 73.0839386
//             },
//             "place_id_search": "https://serpapi.com/search.json?engine=google_maps&google_domain=google.com&hl=en&place_id=ChIJx_WSOoNCIjkR_49fhaWUFNw",
//             "rating": 4.1,
//             "reviews": 588,
//             "price": "$$$",
//             "unclaimed_listing": true,
//             "type": "Restaurant",
//             "types": [
//                 "Restaurant",
//                 "Banquet hall"
//             ],
//             "address": "C3MM+7HG, Race Course Rd, Civil Lines, Faisalabad, Punjab, Pakistan",
//             "open_state": "Closed ⋅ Opens 11 AM",
//             "hours": "Closed ⋅ Opens 11 AM",
//             "operating_hours": {
//                 "tuesday": "11 AM–12 AM",
//                 "wednesday": "11 AM–12 AM",
//                 "thursday": "11 AM–12 AM",
//                 "friday": "11 AM–12 AM",
//                 "saturday": "11 AM–12 AM",
//                 "sunday": "11 AM–12 AM",
//                 "monday": "11 AM–12 AM"
//             },
//             "phone": "+92 306 1636345",
//             "service_options": {
//                 "dine_in": true,
//                 "takeout": true,
//                 "delivery": true
//             },
//             "thumbnail": "https://lh5.googleusercontent.com/p/AF1QipMpdaNACsSvz29TZ3mDQtyKarlofR8LJmIZrHBb=w122-h92-k-no"
//         }
//     ],
//     "serpapi_pagination": {
//         "next": "https://serpapi.com/search.json?engine=google_maps&google_domain=google.com&hl=en&q=Khayyam+Banquet+Hall&start=20&type=search"
//     }
// }



// Reviews Api 

// {
//     "search_metadata": {
//         "id": "647e4a73a4be1057fc9e5c83",
//         "status": "Success",
//         "json_endpoint": "https://serpapi.com/searches/3537d34de43cb8af/647e4a73a4be1057fc9e5c83.json",
//         "created_at": "2023-06-05 20:49:55 UTC",
//         "processed_at": "2023-06-05 20:49:55 UTC",
//         "google_maps_reviews_url": "https://www.google.com/async/reviewDialog?hl=en&async=feature_id:0x3922420cf51b4e89:0x1c3e3f2c1baf3c03,sort_by:,next_page_token:,associated_topic:,_fmt:pc",
//         "raw_html_file": "https://serpapi.com/searches/3537d34de43cb8af/647e4a73a4be1057fc9e5c83.html",
//         "total_time_taken": 14.66
//     },
//     "search_parameters": {
//         "engine": "google_maps_reviews",
//         "data_id": "0x3922420cf51b4e89:0x1c3e3f2c1baf3c03",
//         "hl": "en"
//     },
//     "place_info": {
//         "title": "Khayyam Banquet Hall",
//         "address": "F38J+G7F, Sargodha Rd, Canal Block Shadman Town, Faisalabad, Pakistan",
//         "rating": 4.3,
//         "reviews": 1093
//     },
//     "topics": [
//         {
//             "keyword": "service",
//             "mentions": 50,
//             "id": "/m/018tkd"
//         },
//         {
//             "keyword": "food quality",
//             "mentions": 20,
//             "id": "/m/01fn90"
//         },
//         {
//             "keyword": "taste",
//             "mentions": 20,
//             "id": "/m/0cp_p"
//         },
//         {
//             "keyword": "marriage",
//             "mentions": 20,
//             "id": "/m/04ztj"
//         },
//         {
//             "keyword": "management",
//             "mentions": 15,
//             "id": "/m/04_tv"
//         },
//         {
//             "keyword": "ceremony",
//             "mentions": 12,
//             "id": "/m/016c4t"
//         },
//         {
//             "keyword": "decorated",
//             "mentions": 10,
//             "id": "/m/05ykl4"
//         },
//         {
//             "keyword": "meal",
//             "mentions": 7,
//             "id": "/g/1hb_dgt1p"
//         },
//         {
//             "keyword": "arrangements",
//             "mentions": 6,
//             "id": "/m/0z9w"
//         },
//         {
//             "keyword": "marquee",
//             "mentions": 5,
//             "id": "/m/078y54"
//         }
//     ],
//     "reviews": [
//         {
//             "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURoeXRycXpRRRAB!2m1!1s0x0:0x1c3e3f2c1baf3c03!3m1!1s2@1:CIHM0ogKEICAgIDhytrqzQE%7CCgwI8_WVoAYQkKu4hAM%7C?hl=en-US",
//             "user": {
//                 "name": "Azhar Hussain",
//                 "link": "https://www.google.com/maps/contrib/113334460857191369826?hl=en-US&sa=X&ved=2ahUKEwiyqtLigK3_AhUmPkQIHTCwBYIQvvQBegQIARBB",
//                 "thumbnail": "https://lh3.googleusercontent.com/a-/AD_cMMQHpb_5S4IAcnF1ldw_3TWvDBXCIiVKxiLJYDekNQ=s40-c-c0x00000000-cc-rp-mo-ba5-br100",
//                 "local_guide": true,
//                 "reviews": 154,
//                 "photos": 635
//             },
//             "rating": 4.0,
//             "date": "2 months ago",
//             "snippet": "I visited this marquee for the first time at the baraat ceremony hosted by Rana Sahib. Parking was arranged and well arranged through the valet parking entry. The lobby was good, too. Now I will talk about seating arrangements so that sofas are available but the problem is that there was no proper table available to sit and eat!!!!! So please solve this problem. Now if I talk about dinner, the food was great but I like Manchurian and rice the most. Come",
//             "likes": 12,
//             "images": [
//                 "https://lh5.googleusercontent.com/p/AF1QipOh_HJqq4idvi69FscOE4i-gclJTPqd4jK4dxqA=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipPiBtpKFfe3MXxRMan_0AtqmXVlc-z6yL90-FO4=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipNkbn3lUtstclgUoRX1UnDRPad9FKZeIh05gqDG=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipNsLOw1GhpTJQ6qBhUgKYP1hJTQZrrr9mXOeyUF=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipNvSzt5eW1uiRfb2RnGAFF4nMvxrxpJH_G6bvtf=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipNoyiOYVRpGFhC-1-8YQars0gfFv44TLAKFH0MT=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipO_DuozxhKO3Z1Yz68ae67xA__j9KIDwusnrV8P=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipPHaULokdiokyOKPYWksA-yQc2TLnjZ7Piq34mo=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipMAPtJz1jh4-EIdU8vd-7Vbr8SX0mITMLGloxND=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipPBLDeotjfDmmYEahxHxg7SqjOzL1urKO2BTMar=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipOGkJUNL7JwiSocjXqQlsVm7gjhvNg2UoQXDULj=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipNytb90hXQg4Q3OqSY_Dw-nN_Qdl4CZtcmUrCG0=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipOrS7PTbEzrn0z--rExDBhpZO6ndoNqr0AEMQiJ=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipOjyVw7RBFP7emd7hhS4_jfb8tb0rHW_e6wCrZw=w100-h100-p-n-k-no"
//             ]
//         },
//         {
//             "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNoMWVmY2p3RRAB!2m1!1s0x0:0x1c3e3f2c1baf3c03!3m1!1s2@1:CIHM0ogKEICAgICh1efcjwE%7CCgwI9PTjnwYQ6LqwiwM%7C?hl=en-US",
//             "user": {
//                 "name": "Muneeb Shafique",
//                 "link": "https://www.google.com/maps/contrib/116580304604475575744?hl=en-US&sa=X&ved=2ahUKEwiyqtLigK3_AhUmPkQIHTCwBYIQvvQBegQIARBo",
//                 "thumbnail": "https://lh3.googleusercontent.com/a-/AD_cMMRpUzdcJQe5YUNHrY_acI2NYOJVn-ocsn65yvnag1I=s40-c-c0x00000000-cc-rp-mo-ba5-br100",
//                 "local_guide": true,
//                 "reviews": 176,
//                 "photos": 209
//             },
//             "rating": 5.0,
//             "date": "3 months ago",
//             "snippet": "** Khayyam Banquetes Review ** First time visited this marquee for the Barat event hosted by Rana Sb. Parking was organised and well managed by Valet parking 🅿️. Entrance was decent. Lobby was also good especially the stairs with a Door 🚪 was an interesting 🤓 stop for photoshoot. Now I'll talk about sitting arrangements so Sofas were available BUT the problem is there were NO suitable tables available for Sit and eat!!!!! So please resolve this issue. Now if I talk about dinner then food was excellent but I like the Manchurian and rice the most. Finally, At the end of the Barat attended the Qawalli program, so overall it was a decent first time experience for me.",
//             "likes": 14,
//             "images": [
//                 "https://lh5.googleusercontent.com/p/AF1QipPGoGTEkpVMv5T2LtAK_PF5GVnAgnHD2vdl_wMS=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipMBcz-smzfMQrwbC3j4L1GAE0FSshPrxsmpLNmG=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipM9CRIb50Oen8sMFIH8VzXD1h7vvTTMs4q2w0Dk=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipOsEMmbP002Ksz27nwfjEIjhvEarjyTJz1fjB4M=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipOm_zraDjvLjXfH0UoX0Cu9msRfYkcCn3urYfxG=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipNlDaNPblgsbPvKYXRffgCX-qMe_6GToaM9GvcA=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipOvVwveRn0jWOBgeEd-0cNO409VIajGsqyiJVyh=w100-h100-p-n-k-no"
//             ]
//         },
//         {
//             "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUQta283WHNRRRAB!2m1!1s0x0:0x1c3e3f2c1baf3c03!3m1!1s2@1:CIHM0ogKEICAgID-ko7XsQE%7CCgwIqZ2DnAYQkNfStAE%7C?hl=en-US",
//             "user": {
//                 "name": "Muhammad Junaid",
//                 "link": "https://www.google.com/maps/contrib/106713086685725353576?hl=en-US&sa=X&ved=2ahUKEwiyqtLigK3_AhUmPkQIHTCwBYIQvvQBegUIARCIAQ",
//                 "thumbnail": "https://lh3.googleusercontent.com/a-/AD_cMMRBkZlsap-wp_3koZWstvGU85FhoFiW7wZXG31kCA4=s40-c-c0x00000000-cc-rp-mo-ba3-br100",
//                 "local_guide": true,
//                 "reviews": 70,
//                 "photos": 35
//             },
//             "rating": 5.0,
//             "date": "6 months ago",
//             "snippet": "Excellent service venu and menu. The rest of the things like viewing experience is fantastic. Highly recommended",
//             "likes": 10,
//             "images": [
//                 "https://lh5.googleusercontent.com/p/AF1QipOAdZjEpfGNNSSaFNJXxNGuJZpKSkhRDTXwSq7S=w100-h100-p-n-k-no"
//             ]
//         },
//         {
//             "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNSc05HbE9REAE!2m1!1s0x0:0x1c3e3f2c1baf3c03!3m1!1s2@1:CIHM0ogKEICAgICRsNGlOQ%7CCgwI6LnwoAYQkNTh2QE%7C?hl=en-US",
//             "user": {
//                 "name": "jazib aslam",
//                 "link": "https://www.google.com/maps/contrib/112871168048829123522?hl=en-US&sa=X&ved=2ahUKEwiyqtLigK3_AhUmPkQIHTCwBYIQvvQBegUIARCiAQ",
//                 "thumbnail": "https://lh3.googleusercontent.com/a/AAcHTtf-5X0GgiQoQblsnLZb4tK2UEXl4pRHE3yK7BMU=s40-c-c0x00000000-cc-rp-mo-br100",
//                 "reviews": 11,
//                 "photos": 29
//             },
//             "rating": 4.0,
//             "date": "2 months ago",
//             "snippet": "The hall has really improved on the inside! The issue may be average, but the lobby, and hall itself are great! Lighting could be improved however. The food was very good",
//             "likes": 10,
//             "images": [
//                 "https://lh5.googleusercontent.com/p/AF1QipPUSBHXzxmKxfOv5qrOMqsXXwL6KjiFJE_rp9lV=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipOpu2jmQJ_X8dKjzxZ-zYDCZkWZ-8LQypw5oTRm=w100-h100-p-n-k-no"
//             ]
//         },
//         {
//             "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUN4cW9QZDlRRRAB!2m1!1s0x0:0x1c3e3f2c1baf3c03!3m1!1s2@1:CIHM0ogKEICAgICxqoPd9QE%7CCgwIsPeHowYQ8PCrjgI%7C?hl=en-US",
//             "user": {
//                 "name": "M ASIF",
//                 "link": "https://www.google.com/maps/contrib/110313476988553804590?hl=en-US&sa=X&ved=2ahUKEwiyqtLigK3_AhUmPkQIHTCwBYIQvvQBegUIARC9AQ",
//                 "thumbnail": "https://lh3.googleusercontent.com/a-/AD_cMMRi2d4_eul-AjP1N_j17E09Y3E8POn0mZ14N1gjRA=s40-c-c0x00000000-cc-rp-mo-ba4-br100",
//                 "local_guide": true,
//                 "reviews": 52,
//                 "photos": 157
//             },
//             "rating": 4.0,
//             "date": "3 weeks ago",
//             "snippet": "For events this place is fine but when we reached we didn’t find parking, cuz parking space is small & we parked very far on road side",
//             "images": [
//                 "https://lh5.googleusercontent.com/p/AF1QipNa6twhPtVSvqu7HiqTClVtYZQWqr8kI4CjEWPh=w100-h100-p-n-k-no"
//             ]
//         },
//         {
//             "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNocXZxM2hRRRAB!2m1!1s0x0:0x1c3e3f2c1baf3c03!3m1!1s2@1:CIHM0ogKEICAgIChqvq3hQE%7CCgwIu4eYnwYQuK-wkQI%7C?hl=en-US",
//             "user": {
//                 "name": "Ramiii A",
//                 "link": "https://www.google.com/maps/contrib/115791921045004752939?hl=en-US&sa=X&ved=2ahUKEwiyqtLigK3_AhUmPkQIHTCwBYIQvvQBegUIARDZAQ",
//                 "thumbnail": "https://lh3.googleusercontent.com/a-/AD_cMMR2rc1WIKWdyvqEF5GwdkzTxw2CcmkO3e8NTnwD3w=s40-c-c0x00000000-cc-rp-mo-br100",
//                 "reviews": 41,
//                 "photos": 29
//             },
//             "rating": 4.0,
//             "date": "3 months ago",
//             "snippet": "Nice fancy banquet hall. Attended a wedding here. Good food.",
//             "likes": 13,
//             "images": [
//                 "https://lh5.googleusercontent.com/p/AF1QipOjjKzWKXUekVoCWWJTuJQmFrnoL3RKs-aiUDO5=w100-h100-p-n-k-no"
//             ]
//         },
//         {
//             "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURCNl9uVGJ3EAE!2m1!1s0x0:0x1c3e3f2c1baf3c03!3m1!1s2@1:CIHM0ogKEICAgIDB6_nTbw%7CCgwIieHYngYQoJqligI%7C?hl=en-US",
//             "user": {
//                 "name": "muzammil mazhar",
//                 "link": "https://www.google.com/maps/contrib/110642719212752266369?hl=en-US&sa=X&ved=2ahUKEwiyqtLigK3_AhUmPkQIHTCwBYIQvvQBegUIARDzAQ",
//                 "thumbnail": "https://lh3.googleusercontent.com/a-/AD_cMMTz9RJVbAIXw0PPVqkaLKssOJmecWk15Uy4ttZs0g=s40-c-c0x00000000-cc-rp-mo-ba3-br100",
//                 "local_guide": true,
//                 "reviews": 17,
//                 "photos": 29
//             },
//             "rating": 3.0,
//             "date": "4 months ago",
//             "snippet": "Nice Environment but need to Improve Food Quality",
//             "images": [
//                 "https://lh5.googleusercontent.com/p/AF1QipMhZ7jWF5HKOkyE9TNvkKJNycpL4zXFpLXa-Fz_=w100-h100-p-n-k-no"
//             ]
//         },
//         {
//             "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNCMUxmd0JBEAE!2m1!1s0x0:0x1c3e3f2c1baf3c03!3m1!1s2@1:CIHM0ogKEICAgICB1LfwBA%7CCgwI_cj7nAYQiPmBuQE%7C?hl=en-US",
//             "user": {
//                 "name": "Muhammad Hamza",
//                 "link": "https://www.google.com/maps/contrib/111696589323785658355?hl=en-US&sa=X&ved=2ahUKEwiyqtLigK3_AhUmPkQIHTCwBYIQvvQBegUIARCNAg",
//                 "thumbnail": "https://lh3.googleusercontent.com/a-/AD_cMMS8ZTtlw0M3U-1J1Mn6lR3gYujSXmgeGllgGv-yjg=s40-c-c0x00000000-cc-rp-mo-ba4-br100",
//                 "local_guide": true,
//                 "reviews": 73,
//                 "photos": 125
//             },
//             "rating": 5.0,
//             "date": "5 months ago",
//             "snippet": "Nice Location, Well Decorated 💕❤️",
//             "likes": 10,
//             "images": [
//                 "https://lh5.googleusercontent.com/p/AF1QipNPNT70G9qCMjNMPFC1R9JFvjUexXOlHaYJcuiU=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipPIBY64lJ4NLoM1S9A3xv4EHX2u-4fzLSwM8izs=w100-h100-p-n-k-no"
//             ]
//         },
//         {
//             "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURtajZHRnFnRRAB!2m1!1s0x0:0x1c3e3f2c1baf3c03!3m1!1s2@1:CIHM0ogKEICAgIDmj6GFqgE%7CCgsI3q2gkAYQoLvzHA%7C?hl=en-US",
//             "user": {
//                 "name": "Ali Younes",
//                 "link": "https://www.google.com/maps/contrib/100001667534484479075?hl=en-US&sa=X&ved=2ahUKEwiyqtLigK3_AhUmPkQIHTCwBYIQvvQBegUIARCoAg",
//                 "thumbnail": "https://lh3.googleusercontent.com/a-/AD_cMMR0Bh4qiQ5VsK_LR35WT7fP9Cit89aanqPMm9bn7w=s40-c-c0x00000000-cc-rp-mo-ba4-br100",
//                 "local_guide": true,
//                 "reviews": 64,
//                 "photos": 192
//             },
//             "rating": 5.0,
//             "date": "a year ago",
//             "snippet": "Another Pearl by Khayyam, it was a pleasant evening and well managed event by Khayyam. Khayyam maintains it's popularity in this location.",
//             "likes": 11,
//             "images": [
//                 "https://lh5.googleusercontent.com/p/AF1QipOB5MXoUyG6nVEgk_4kyHqFIrLNZ2gtBO96C6r2=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipMqyqxg1mUOPHt9OzecNyvpeg6h3HWiNA9dUPDW=w100-h100-p-n-k-no",
//                 "https://lh5.googleusercontent.com/p/AF1QipNYSk1oxVvt9BTXS3GanSRcPITLP-tX_WkN_Yfd=w100-h100-p-n-k-no"
//             ]
//         },
//         {
//             "link": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNoN3ZuY0hnEAE!2m1!1s0x0:0x1c3e3f2c1baf3c03!3m1!1s2@1:CIHM0ogKEICAgICh7vncHg%7CCgwI0vLTnwYQoOv-jQI%7C?hl=en-US",
//             "user": {
//                 "name": "Bilal Asghar Gujjar",
//                 "link": "https://www.google.com/maps/contrib/111114751705870917994?hl=en-US&sa=X&ved=2ahUKEwiyqtLigK3_AhUmPkQIHTCwBYIQvvQBegUIARDEAg",
//                 "thumbnail": "https://lh3.googleusercontent.com/a-/AD_cMMS19K7MMcRmP32IvFH7bfL_vmIhsQpw0Mc61DksSQ=s40-c-c0x00000000-cc-rp-mo-ba4-br100",
//                 "local_guide": true,
//                 "reviews": 111,
//                 "photos": 37
//             },
//             "rating": 4.0,
//             "date": "3 months ago",
//             "snippet": "This banquet Hall Situated near Chniote hospital Faisalabad. It contains a number of beautiful and well decorated halls for marriage and other family and official functions and get together. Meals are relatively hieghganic fresh and delicious as compared with other banquets of the area."
//         }
//     ],
//     "serpapi_pagination": {
//         "next": "https://serpapi.com/search.json?data_id=0x3922420cf51b4e89%3A0x1c3e3f2c1baf3c03&engine=google_maps_reviews&hl=en&next_page_token=CAESBkVnSUlDZw%3D%3D",
//         "next_page_token": "CAESBkVnSUlDZw=="
//     }
// }




