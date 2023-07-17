import { StyleSheet } from "react-native";
import { theme } from "../../theming";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginBottom:30 
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 80,
    },

    header: {
        position: 'absolute',
        backgroundColor: 'transparent',
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1,
        borderBottomEndRadius: 10
      },

    recommendCards: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: theme.colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 20,
        elevation: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})