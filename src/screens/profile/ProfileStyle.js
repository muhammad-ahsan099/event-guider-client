import { StyleSheet } from "react-native";
import { theme } from "../../theming";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    screen: {
        flex: 1,
        paddingHorizontal: 16,
    },
    profileText: {
        marginBottom: 12,
    },
    loginIconDiv: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 20
    },
    iconDiv: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: 'rgba(248, 29, 29, 0.1)',
        borderRadius: 10,
    },
    loginManuDiv: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        backgroundColor: 'white',
        paddingVertical: 14,
        marginTop: 10
    },
    manuDiv: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    manuText: {
        marginLeft: 15
    },
    icons: {
        paddingLeft: 12
    },
    graterIcon: {
        marginRight: 10
    },
    loginBtn: {
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    loginTxt: {
        color: theme.colors.white,
        fontWeight: '600',
        fontSize: 16
    },
})