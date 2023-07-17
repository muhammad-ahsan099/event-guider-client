import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        // height: 150,
        marginBottom: 20
    },
    backImage: {
        marginTop: 10,
    },
    videoIcon: {
        alignItems: 'center', 
        justifyContent: 'center',
    } ,
    videoContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },
    video: {
        height: '100%',
        width: '100%',
    },
    imgContainer: {
        width: '100%',
        flex: 1
      },
      tinyLogo: {
        height: 200,
        width: '100%',
        borderRadius: 10,
        flex: 1,
        justifyContent: "center" , 
        overflow: 'hidden'

      },

})