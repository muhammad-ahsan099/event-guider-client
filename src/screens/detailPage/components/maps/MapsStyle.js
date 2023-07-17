import { StyleSheet, Dimensions, Platform } from "react-native";
import { theme } from "../../../../theming";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  autoCompleteContainer: {
    width: '100%', 
    height: 50 ,  
    justifyContent: 'center', 
    paddingHorizontal: 16, 
    marginTop: 6,
    position: 'absolute',
    zIndex: 1000,
    top: 0
  },
  headerRoundBtn: {
    height: 36,
    width: 36,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    position: 'absolute',
    top: 20,
    zIndex: 1000,
    // bottom: 50,
  },
})