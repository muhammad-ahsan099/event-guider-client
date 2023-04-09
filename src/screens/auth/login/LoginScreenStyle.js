
import { StyleSheet, Platform, Dimensions } from "react-native";
import { selectHeightMedia } from "../../../customHooks/selectHeightMedia";
import { theme } from "../../../theming";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screen: {
        flex: 1,
        paddingHorizontal: 16,
    },
    logo: {
        alignItems: 'center',
        marginBottom: 30,
    },
    card: {
        marginTop: 40
    },
    loginText: {
        fontWeight: '700',
        color: theme.colors.lightPrimary
    },
    subLoginText: {
        fontWeight: '400',
        color: theme.colors.lightGrey,
        marginTop: 6
    },
    inputContainer: {
        marginTop: 48,
    },
    emailText: {
        color: theme.colors.lightPrimary,
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 3
    },
    forgotPasswordLink: {
        fontSize: 16,
        textAlign: 'right',
        fontWeight: '500',
        color: theme.colors.secondary
    },
    textInput: {
        alignItems: 'center',
        height: 48,
        marginBottom: 16,
        paddingHorizontal: 15,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
    },
    textInputText: {
        fontSize: 16,
        fontWeight: '400',
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
    signupBtn: {
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderRadius: 8,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupTxt: {
        color: theme.colors.primary,
        fontWeight: '600',
        fontSize: 16
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dividerLine: {
        height: 1,
        flex: 1,
        backgroundColor: theme.colors.lightGrey,
    },
    dividerTxt:{
        fontWeight: '400',
        fontSize: 12,
        textAlign: 'center',
        width: 38,
        color: theme.colors.lightGrey,
    },
    googleBtn:{
        backgroundColor: theme.colors.white,
        borderRadius: 8,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.colors.dropDownText,
    },
    googleBtnText: {
        fontWeight: '600',
        fontSize: 16,
        color: theme.colors.dropDownText,
        marginLeft: 10
    },
    footer: {
        marginTop: 10,
        alignItems: 'center',
        ...Platform.select({
            android: {
                marginBottom: 10,
            },
            ios: {
                marginBottom: selectHeightMedia({ sm: 10, default: 0 }),
            },
        }),
    },
    textAlignCenter: {
        textAlign: 'center',
    },
})
