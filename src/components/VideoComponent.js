import React, { useRef, useState } from 'react';
import {styles} from './VideoComponentStyle'
import { View, Modal,ImageBackground, Platform , Text} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Icon from 'react-native-vector-icons/Ionicons'
import { theme } from '../theming';
// import { secondaryColor } from '../../constants/Colors';
// import Orientation from 'react-native-orientation-locker';


const VideoComponent = ({video_url, video_poster_url}) => {
    
    console.log('video_poster_url: ', video_poster_url);
    console.log('video_url: ', video_url);

    const [pause, setPause] = useState(true)
    const [modalVisible, setModalVisible] = useState(false)
    const [isFullScreen, setIsFullScreen] = useState(false);


    const videoPlayer = useRef(null)

    const onLoad = () => {
        setPause(false)
    }

    const onEnd = ()=>{
        setPause(true)
    }
    const onBack = () => {
        // if(!isFullScreen) {
        //     Orientation.lockToPortrait();
        // }
        // setIsFullScreen(!isFullScreen)
        setModalVisible(false)
        
    }

    // const onFullScreen = () => {
    //     if (!isFullScreen) {
    //         if(Platform.OS === 'ios') {
    //         Orientation.lockToLandscape();
    //         }
    //         Orientation.lockToLandscape();
    //     } 
    //     setIsFullScreen(!isFullScreen);
    // };

    // const onExitScreen = () => {
    //     if (!isFullScreen) {
    //         if(Platform.OS === 'ios') {
    //         Orientation.lockToPortrait();
    //         }
    //         Orientation.lockToPortrait();
    //     }
    //     setIsFullScreen(!isFullScreen);
    // };
  
    return (
        <View style={styles.MainContainer}>

            <View style={styles.backImage}>     
                <ImageBackground
                style={styles.tinyLogo}
                source={{
                    uri: video_poster_url
                }}
                >
                    <View style={styles.videoIcon}>
                    <Icon
                        name='md-play'
                        color='#fff'
                        size={60}
                        backgroundColor='transparent'
                        borderRadius={50}
                        iconStyle={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 0,
                        }}
                        onPress={()=> setModalVisible(true)}
                    />
                    <Text style={{color: '#fff' , fontWeight: 'bold' , fontSize: 22 , marginTop: 0 , position: 'relative', bottom: -34}}> Preview this Video</Text>
                    </View>
                </ImageBackground>
            </View>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"

            >
                <View style={styles.videoContainer}>
                    <VideoPlayer
                    source={{uri: video_url }}
                    resizeMode="cover"                     
                    ref={(ref) => (videoPlayer.current = ref)}
                    paused={pause}
                    // resizeMode={"contain"}
                    fullscreen={false}
                    onLoad={onLoad.bind()}
                    style={styles.video}
                    seekColor={theme.colors.primary}
                    onBack= {()=>onBack()}
                    repeat={true}
                    playInBackground={false}
                    playWhenInactive={false}
                    tapAnywhereToPause={true}
                    disableVolume
                    onEnd= {()=> onEnd()}
                    // onEnterFullscreen={onFullScreen}
                    // onExitFullscreen={onExitScreen}
                    
                />
                </View>
            </Modal>

        </View>
    );

}
export default VideoComponent;
