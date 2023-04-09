import { theme } from "../../../theming";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  insetContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
  },
  icon: {
    marginLeft: -10,
    paddingTop: 20
  },
  header: {
    alignItems: 'flex-start',
  },
  headerDescription: {
    textAlign: 'left',
    marginTop: 8,
    color: theme.colors.lightGrey,
    fontWeight: '400',
    marginBottom: 47
  },
  textInput: {
    minHeight: 45,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 1,
    fontSize: 16,
    borderColor: theme.colors.borderColor,
  },
  title: {
    color: theme.colors.lightPrimary,
    fontWeight: '700',
    fontSize: 32,
  },
  emailText: {
    color: theme.colors.lightPrimary,
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 3
  },
  resetBtn: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 20,
  },
  resetTxt: {
    color: theme.colors.white,
    fontWeight: '600',
    fontSize: 16
  }
});
