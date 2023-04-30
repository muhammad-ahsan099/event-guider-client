import { StyleSheet } from "react-native";
import { theme } from "../../theming";

export const styles = StyleSheet.create({
    screen: {
        
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 80,
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
    }
})