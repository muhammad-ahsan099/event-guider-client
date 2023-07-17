import { View, ScrollView } from 'react-native'
import { Text } from '../../../../components/Text';
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import Icon from 'react-native-vector-icons/Entypo';
import { styles } from '../../DetailPageStyle';
import { theme } from '../../../../theming';
// import Feather from "react-native-vector-icons/Feather";
import { Touchable } from '../../../../components/Touchable';
import { useDispatch } from 'react-redux';
import { fetchReviews } from '../../../../redux/actions/VenueDetailAction';


export default React.forwardRef(function Tabs({ selectedTab, setSelectedTab, venueId }, ref) {

    // const dispatch = useDispatch()

    // const fetchReview = () => {
    //     if (venueId) {
    //         dispatch(fetchReviews(venueId))
    //     }
    // }

    return (
        <View style={styles.tabContainer}>
            <ScrollView ref={ref} horizontal showsHorizontalScrollIndicator={false}>
                <Touchable style={styles.tab} onPress={() => setSelectedTab(1)}>
                    <MaterialCommunityIcons name='dots-grid' color={selectedTab === 1 ? theme.colors.primary : theme.colors.lightGrey} size={30} />
                    <Text color={selectedTab === 1 ? 'primary' : 'grey'} size={11} >OVERVIEW</Text>
                </Touchable>
                <Touchable style={styles.tab} onPress={() => setSelectedTab(2)}>
                    <Icon name='star' color={selectedTab === 2 ? theme.colors.primary : theme.colors.grey} size={30} />
                    <Text color={selectedTab === 2 ? 'primary' : 'grey'} size={11} >FEATURES</Text>
                </Touchable>
                <Touchable style={styles.tab} onPress={() => setSelectedTab(3)}>
                    <Fontisto name='map-marker-alt' color={selectedTab === 3 ? theme.colors.primary : theme.colors.grey} size={30} />
                    <Text color={selectedTab === 3 ? 'primary' : 'grey'} size={11} >MAP</Text>
                </Touchable>
                <Touchable style={styles.tab} onPress={() => setSelectedTab(4)}>
                    <Feather name='box' color={selectedTab === 4 ? theme.colors.primary : theme.colors.grey} size={30} />
                    <Text color={selectedTab === 4 ? 'primary' : 'grey'} size={11} >VIRTUAL TOUR</Text>
                </Touchable>
                <Touchable style={styles.tab} onPress={() => setSelectedTab(5)}>
                    <Icon name='folder-video' color={selectedTab === 5 ? theme.colors.primary : theme.colors.grey} size={30} />
                    <Text color={selectedTab === 5 ? 'primary' : 'grey'} size={11} >VIDEOS</Text>
                </Touchable>
                <Touchable style={styles.tab} onPress={() => { setSelectedTab(6)}}>
                    <Feather name='message-circle' color={selectedTab === 6 ? theme.colors.primary : theme.colors.grey} size={30} />
                    <Text color={selectedTab === 6 ? 'primary' : 'grey'} size={11} >REVIEWS</Text>
                </Touchable>
            </ScrollView>
        </View>
    )
})
