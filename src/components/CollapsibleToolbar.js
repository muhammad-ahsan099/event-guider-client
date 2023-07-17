import React, { useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import { theme } from '../theming'
import SafeArea from './SafeArea';

const HEADER_EXPANDED_HEIGHT = 150;
const HEADER_COLLAPSED_HEIGHT = 56;

const TITLE_EXPANDED_HEIGHT = 24;
const TITLE_COLLAPSED_HEIGHT = 16;
const { width: SCREEN_WIDTH } = Dimensions.get('screen');

export default function CollapsibleToolbar(props) {

    // const [scrollY, setScrollY] = useState(new Animated.Value(0));

    const scrollY = useRef(new Animated.Value(0)).current;
    const [open, setOpen] = useState(true);

    console.log('Open: ---', open);
    console.log('scrollY: ---', scrollY);

    function onLayout(event) {
        const { x, y, height, width } = event.nativeEvent.layout;
        setOpen(height === HEADER_COLLAPSED_HEIGHT ? false : true)
    }

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp',
    });
    console.log('headerHeight: ', headerHeight);

    const headerSlide = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [0, 32],
        extrapolate: 'clamp',
    });

    const headerTitleSize = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [TITLE_EXPANDED_HEIGHT, TITLE_COLLAPSED_HEIGHT],
        extrapolate: 'clamp',
    });

    const headerTitleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [0.5, 0],
        extrapolate: 'clamp',
    });


    return (
        <SafeArea
            statusBarColor={
                open ? props.headerColor : props.headerColorDark
            }
            bottomBarColor={
                props.bottomBarColor ? props.bottomBarColor : theme.colors.white
            }
            statusBarStyle={open ? 'dark-content' : 'light-content'}>
            <View style={styles.container}>
                <Animated.View
                    onLayout={event => onLayout(event)}
                    style={[
                        styles.header,
                        {
                            height: headerHeight,
                            transform: [{ translateY: headerSlide }],
                            backgroundColor: props.headerColor
                                ? props.headerColor
                                : theme.colors.primary,
                        },
                    ]}
                >
                    <Animated.Text
                        style={[
                            styles.headerTitle,
                            styles.maxHeader,
                            {
                                color: theme.colors.black,
                                paddingLeft: headerSlide,
                                fontSize: headerTitleSize,
                                opacity: headerTitleOpacity,
                            },
                        ]}>
                        {props.title ? props.title : ' Title'}
                    </Animated.Text>
                    <View style={styles.appBar}>
                        <TouchableOpacity onPress={() => props.backPress()}>
                            <Image
                                style={styles.backIcon}
                                source={require('../assets/images/sports.png')}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>
                        {!open && (
                            <Text style={styles.minHeader}>
                                {props.title ? props.title : 'Title'}
                            </Text>
                        )}
                    </View>

                    <Animated.Image
                        style={[styles.image, { opacity: imageOpacity }]}
                        source={props.image}
                    />
                </Animated.View>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    // onScroll={Animated.event([
                    //     {
                    //         nativeEvent: {
                    //             contentOffset: {
                    //                 y: scrollY,
                    //             },
                    //         },
                    //     },
                    // ], { useNativeDriver: true })}
                    scrollEventThrottle={16}>
                    {props.children}
                </ScrollView>
            </View>
        </SafeArea>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    scrollContainer: {
        paddingTop: HEADER_EXPANDED_HEIGHT,
    },
    header: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        top: 0,
        left: 0,
        zIndex: 2,
    },
    title: {
        marginVertical: 16,
        fontWeight: 'bold',
        fontSize: 24,
    },
    headerTitle: {
        letterSpacing: 0,
        textAlign: 'center',
        position: 'absolute',
        bottom: 16,
        zIndex: 99,
    },
    maxHeader: {
        fontSize: 24,
        left: 16,
        lineHeight: 38,
    },
    minHeader: {
        fontSize: 16,
        paddingLeft: 16,
        color: theme.colors.black,
    },
    backIcon: {
        zIndex: 99,
        height: 20,
        width: 20,
    },
    image: {
        resizeMode: 'contain',
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingTop: 16,
    },
});
