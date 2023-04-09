import { theme } from "../../../theming";
import { selectHeightMedia } from "../../../customHooks/selectHeightMedia";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    insetContainer: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: theme.colors.white
    },
    container: {
      flex: 1,
      paddingBottom: selectHeightMedia({ sm: 20, default: 1 }), // Set paddingBottom to 1 to avoid iOS bug with 0 being ignored
      justifyContent: 'space-between',
    },
    headerContainer: {
      flexGrow: 1,
    },
    headerDescription: {
      textAlign: 'left',
      marginTop: 8,
      color: theme.colors.lightGrey,
      fontWeight: '400',
      marginBottom: 36
    },
    emailText: {
      color: theme.colors.lightPrimary,
      fontWeight: '700',
      fontSize: 32,
    },
    img: {
      width: '100%',
      height: 375,
    },
    loginBtn: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      height: 56,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      position: 'absolute',
      bottom: 20
    },
    loginTxt: {
      color: theme.colors.white,
      fontWeight: '600',
      fontSize: 16
  },
  });
  