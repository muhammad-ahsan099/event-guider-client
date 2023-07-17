import { View, Dimensions, SafeAreaView, Modal, Image, ActivityIndicator, Linking, ImageBackground } from 'react-native'
import React, { useRef, useEffect } from 'react'
import { Screen } from '../../components/Screen'
import { styles } from './DetailPageStyle'
import ImageViewer from 'react-native-image-zoom-viewer';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler'
import WhiteClose from '../../assets/images/white-close-icon.svg';
import ProductPlaceHolder from '../../assets/images/product-placeholder.png';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import MapBg from '../../assets/images/mapBG.jpeg'
import VtBr from '../../assets/images/vrBg.png'

import { theme } from '../../theming'
import { Text } from '../../components/Text'
import { Touchable } from '../../components/Touchable'
import { useHeaderHeight } from '../../customHooks/useHeaderHeight'
import Tabs from './components/tabs/Tabs';
import { UseDetailPage } from './UseDetailPage';
import VideoComponent from '../../components/VideoComponent';
import { Rating } from 'react-native-ratings';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;

export default function DetailPage() {
  const { bottomInset } = useHeaderHeight();
  const isCarousel = useRef(null);
  const [{
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
    venueReviews
  }] = UseDetailPage()

  const newRef = useRef()


  // useEffect(() => {
  //   setTimeout(() => {
  //     if (newRef.current) {
  //       newRef.current.scrollTo({ x: 100, animated: true })
  //     }
  //   }, 2000)
  // }, [newRef])


  const openEmailApp = (email) => {
    const recipientEmail = email; // Replace with the recipient email address
    const url = `mailto:${recipientEmail}`;

    Linking.openURL(url)
      .catch((error) => console.error('An error occurred', error));
  };

  const openPhoneCall = (phone) => {
    const phoneNumber = '03056496364'; // Replace with the desired phone number
    const url = `tel:${phoneNumber}`;

    Linking.openURL(url)
      .catch((error) => console.error('An error occurred', error));
  };

  const openMessagingApp = (phone) => {
    const phoneNumber = '03056496364'; // Replace with the desired phone number
    const message = 'Hello!'; // Replace with the desired message
    const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    Linking.openURL(url)
      .catch((error) => console.error('An error occurred', error));
  };

  const openWhatsApp = (phone) => {
    const phoneNumber = '1234567890'; // Replace with the desired phone number
    const message = 'Hello!'; // Replace with the desired message
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    Linking.openURL(url)
      .catch((error) => console.error('An error occurred', error));
  };

  const ProductImg = ({ item, index }) => {
    return (
      <View style={styles.productImgContainer} key={index}>
        {!imgClick ? (
          <TouchableOpacity onPress={() => actionOnRow()}>
            <Image
              source={
                !imageError && item.poster_url
                  ? {
                    uri: item.poster_url,
                  }
                  : ProductPlaceHolder
              }
              onError={() => setEmageError(true)}
              resizeMode={'contain'}
              style={styles.itemImage}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.caruselContainer}>
            <Modal
              visible={modalVisible}
              transparent={false}
              animationType="fade"
              onRequestClose={closeModal}>
              <ImageViewer
                backgroundColor={'rgba(0, 0, 0, 0.8)'}
                imageUrls={imageError ? placeHolderImage : venueDetail?.image_gallery}
                enableSwipeDown={true}
                saveToLocalByLongPress={false}
                onSwipeDown={() => closeModal()}
                renderArrowLeft={() => (
                  <Icon
                    name="chevron-thin-left"
                    style={{ color: '#fff', fontSize: 40 }}
                  />
                )}
                renderArrowRight={() => (
                  <Icon
                    name="chevron-thin-right"
                    style={{ color: '#fff', fontSize: 40 }}
                  />
                )}
                loadingRender={() => (
                  <ActivityIndicator
                    size="large"
                    color={theme.colors.primary}
                  />
                )}
                renderIndicator={() => null}
                renderHeader={() => {
                  return (
                    <View style={styles.headerContainer}>
                      <SafeAreaView />
                      <TouchableOpacity
                        onPress={() => closeModal()}
                        style={styles.lightBoxHeader}>
                        <WhiteClose />
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </Modal>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {
        loading ?
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator
              size="large"
              color={theme.colors.primary}
            />
          </View>
          :
          <Screen
            statusBarStyle="light"
            scroll
            // style={{ backgroundColor: 'white' }}
            contentContainerStyle={styles.screen}
          >
            {/* <Appbar /> */}
            <View style={styles.imgContainer}>

              <View style={styles.headerBtnContainer}>
                <Touchable style={styles.headerRoundBtn} onPress={() => navigation.goBack()}>
                  <Feather name='chevron-left' color={theme.colors.black} size={26} />
                </Touchable>
                <View style={styles.rightHeaderBtns}>
                  <Touchable style={styles.headerRoundBtn}>
                    <Ionicons name='md-share-social' color={theme.colors.black} size={24} />
                  </Touchable>
                  <Touchable style={styles.headerRoundBtn}>
                    <Ionicons name='md-heart-outline' color={theme.colors.black} size={26} style={{ marginTop: 1 }} />
                  </Touchable>
                </View>
              </View>

              <Carousel
                data={venueDetail?.image_gallery}
                ref={isCarousel}
                renderItem={ProductImg}
                onSnapToItem={index => setaAtiveSlide(index)}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                scrollEnabled={true}
              />
              {images?.length === 1 ? (
                <View style={styles.dotContainer}>
                  <View style={styles.dotstyle}></View>
                </View>
              ) : (
                <Pagination
                  dotsLength={images?.length}
                  activeDotIndex={activeSlide}
                  carouselRef={isCarousel}
                  containerStyle={styles.dotContainer}
                  dotStyle={styles.dotstyle}
                  tappableDots={true}
                  inactiveDotStyle={styles.dotcolor}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={1}
                />
              )}

            </View>

            <View style={styles.detailContainer}>
              <View style={styles.titleView}>
                <Text size={22} color='black' weight={'medium'}>{venueDetail ? venueDetail?.title : "Regency Grand Marquee"}</Text>
              </View>

              <View style={styles.addressContainer}>
                <Image source={{ uri: venueDetail?.logo_url }} style={{ width: 60, height: 60, borderRadius: 10 }} />

                <Text color='black' size={18} style={styles.locationText}>{venueDetail?.address ? venueDetail?.address : "E Canal Rd, Green Town New Green Town, Faisalabad, Punjab"}</Text>

                {/* <WishListBtn wishListId={id} navigationHandler={navigationHandler} /> */}

                <View style={styles.contactContainer}>
                  <Touchable style={styles.roundBtnContainer} onPress={() => openEmailApp(venueDetail?.email)}>
                    <View style={styles.roundBtn}>
                      <FontAwesome name='envelope' color={theme.colors.primary} size={28} />
                    </View>
                    <Text color='primary' size={14} weight={'medium'}>EMAIL</Text>
                  </Touchable>
                  <Touchable style={styles.roundBtnContainer} onPress={() => openMessagingApp(venueDetail?.phone_number)}>
                    <View style={styles.roundBtn}>
                      <MaterialIcons name='sms' color={theme.colors.primary} size={28} />
                    </View>
                    <Text color='primary' size={14} weight={'medium'}>SMS</Text>
                  </Touchable>
                  <Touchable style={styles.roundBtnContainer} onPress={() => openWhatsApp(venueDetail?.whatsapp_number)}>
                    <View style={styles.roundBtn}>
                      <Ionicons name="ios-logo-whatsapp" size={28} color={theme.colors.primary} />
                    </View>
                    <Text color='primary' size={14} weight={'medium'}>WHATSAPP</Text>
                  </Touchable>

                  <Touchable style={styles.roundBtnContainer} onPress={() => openPhoneCall(venueDetail?.phone_number)}>
                    <View style={styles.roundBtn}>
                      <MaterialIcons name='call' color={theme.colors.primary} size={28} />
                    </View>
                    <Text color='primary' size={14} weight={'medium'}>CALL</Text>
                  </Touchable>
                </View>
              </View>

              <Tabs
                ref={newRef}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                venueId={venueDetail?.id}
              />


              {
                selectedTab === 1 && (
                  <View style={styles.mapBgContainer}>
                    <Text color='black' size={16} style={{}}>{venueDetail?.description}</Text>
                  </View>
                )
              }
              {
                selectedTab === 2 && (
                  <View style={styles.mapBgContainer}>
                    {
                      venueDetail?.features?.map(feature => (
                        <View style={styles.featureContainer}>
                          <View style={styles.featureBox}>
                            <Text color='black' size={12} weight={'medium'}>Main Feature</Text>
                          </View>
                          <Text color='black' size={16}>{feature}</Text>
                        </View>
                      ))
                    }
                  </View>
                )
              }

              {
                selectedTab === 3 && (
                  <View style={styles.mapBgContainer}>
                    <Text size={18} weight={'bold'} color='black'>Location</Text>
                    <Touchable onPress={() => navigation.navigate('Maps', {locAddress: venueDetail?.address})}>
                      <ImageBackground
                        source={MapBg}
                        resizeMode="cover"
                        style={styles.mapBg}
                      >
                        <Text style={{ marginTop: 50 }} color='black' size={16} weight={'medium'}>View</Text>
                        <Text color='black' size={16} weight={'medium'}>Location on</Text>
                        <Text color='black' size={16} weight={'medium'}>the Map</Text>
                      </ImageBackground>
                    </Touchable>
                  </View>
                )
              }
              {
                selectedTab === 4 && (
                  <View style={styles.mapBgContainer}>
                    <Text size={18} weight={'bold'} color='white'>Virtual Tour</Text>
                    <Touchable onPress={() => navigation.navigate('VirtualTour')}>
                      <ImageBackground
                        source={VtBr}
                        resizeMode="cover"
                        style={styles.mapBg}
                      >
                        <Text style={{ marginTop: 50 }} color='white' size={16} weight={'medium'}>View</Text>
                        <Text color='white' size={16} weight={'medium'}>Virtual Tour on</Text>
                        <Text color='white' size={16} weight={'medium'}>the Matterport</Text>
                      </ImageBackground>
                    </Touchable>
                  </View>
                )
              }
              {
                selectedTab === 5 && (
                  <View style={styles.mapBgContainer}>
                    <Text>Video Compoent</Text>
                    {
                      venueDetail &&
                      venueDetail?.video_gallery?.map(item => (
                        <VideoComponent
                          video_url={item?.video_url}
                          video_poster_url={item?.video_poster_url}
                        />

                      ))
                    }
                  </View>
                )
              }

              {
                selectedTab === 6 && (
                  <View style={styles.mapBgContainer}>
                    {
                      venueReviews?.map((review, index) => {
                        return (
                          <View key={index} style={{ marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <Image source={{ uri: review?.google_user_thumbnail }} style={{ width: 50, height: 50, borderRadius: 50, marginRight: 12 }} />
                              <Text color='black' size={14} weight={'semiBold'}>{review?.google_username ? review?.google_username : "Ahsan"}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                              <Rating
                                // type='heart'
                                ratingCount={5}
                                imageSize={16}
                                showRating={false}
                                readonly={true}
                                startingValue={review?.google_user_rated ? review?.google_user_rated : 3}
                              />
                              <Text style={{ marginLeft: 10 }} color='grey' size={13} weight={'normal'}>{review ? review?.google_review_date : "a year ago"}</Text>
                            </View>
                            <Text color={'black'} size={14} >{review?.review_body ? review?.review_body : "Ahsan"}</Text>

                            <View>
                              <View style={{ padding: 6, borderRadius: 20, borderWidth: 1, borderColor: theme.colors.grey, flexDirection: 'row', alignItems: 'center', width: 100, marginTop: 10 }}>
                                <Feather color={theme.colors.primary} size={14} name='thumbs-up' style={{marginRight: 6}}/>
                                <Text size={12} color='primary'>{`Helpful (${review?.google_user_likes})`}</Text>
                              </View>
                            </View>

                          </View>
                        )
                      }
                      )
                    }
                  </View>
                )
              }

            </View>
          </Screen>
      }
      {/* <View style={[styles.contactDetails, { marginBottom: bottomInset }]}>
        <View style={styles.btnContainer}>
          <Touchable style={styles.emailBtn}>
            <Text weight={'medium'} size={16}>EMAIL</Text>
          </Touchable>
          <Touchable style={styles.emailBtn}>
            <Text weight={'medium'} size={16}>SMS</Text>
          </Touchable>
          <Touchable style={[styles.emailBtn, { backgroundColor: theme.colors.primary, width: '40%' }]}>
            <Text weight={'medium'} size={16} color='white'>CALL</Text>
          </Touchable>
          <Touchable style={[styles.emailBtn, { backgroundColor: theme.colors.primary, width: '12%' }]}>
            <Ionicons name="ios-logo-whatsapp" size={20} color={theme.colors.white} />
          </Touchable>
        </View>
      </View> */}
    </View>

  )
}