import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { fetchVenueDetail, fetchReviews } from "../../redux/actions/VenueDetailAction";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UseDetailPage = () => {
    const [loading, setLoading] = useState(false)
    const [activeSlide, setaAtiveSlide] = useState(0);
    const [imgClick, setImgClick] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [imageError, setEmageError] = useState(false);
    const [selectedTab, setSelectedTab] = useState(1)
    const navigation = useNavigation()
    const route = useRoute()
    const dispatch = useDispatch()

    const venueDetail = useSelector(state => state.VenueDetailReducer.venueDetail);
    const venueReviews = useSelector(state => state.VenueDetailReducer.venueReviews);

    const { venueId } = route?.params;
    // console.log("venueIdL ", venueId);

    const closeModal = () => {
        if (modalVisible) {
            setImgClick(false);
            setModalVisible(false);
        }
    };
    const actionOnRow = () => {
        setImgClick(true);
        setModalVisible(!modalVisible);
    };

    const images = [
        {
            url: 'https://res.cloudinary.com/series-ta/image/upload/v1683229501/The-Palm-Marquee-Karachi-Rentkea-Karachi-1_gloskp.jpg'
        },
        {
            url: 'https://res.cloudinary.com/series-ta/image/upload/v1683229318/3_vzwg8p.jpg',
        },
        {
            url: 'https://res.cloudinary.com/series-ta/image/upload/v1683229318/2_dv3wrs.jpg',
        },
        {
            url: 'https://res.cloudinary.com/series-ta/image/upload/v1683229318/1_hxihzv.jpg',
        },
    ];
    const placeHolderImage = [
        {
            url: 'https://res.cloudinary.com/digidata/image/upload/v1660915475/ir83ey6ghpzg5npmtagf.png',
        },
    ];

    useEffect(() => {
        if (venueId) {
            dispatch(fetchVenueDetail(setLoading, venueId))
            setTimeout(() => {
                dispatch(fetchReviews(setLoading, venueId))
            }, 2000)
        }
    }, [venueId])

    useEffect(() => {
        const addIdToStorage = async () => {
          try {
            const existingIds = JSON.parse(await AsyncStorage.getItem('ids')) || [];
      
            // Check if the new ID already exists in the array
            const newId = venueId; // Replace with the actual ID you want to save
            const isIdExists = existingIds.includes(newId);
      
            if (!isIdExists) {
              // Add the new ID to the array
              const updatedIds = [...existingIds, newId];
      
              // Save the updated array of IDs back to AsyncStorage
              await AsyncStorage.setItem('ids', JSON.stringify(updatedIds));
            }
          } catch (error) {
            // Handle error
          }
        };
      
        addIdToStorage();
      }, []);

    return [{
        loading,
        navigation,
        selectedTab, setSelectedTab,
        activeSlide, setaAtiveSlide,
        imgClick,
        modalVisible,
        imageError, setEmageError,
        images,
        placeHolderImage,
        closeModal,
        actionOnRow,
        venueDetail,
        venueReviews,
    }]
}