import { StyleSheet, Dimensions, Platform } from "react-native";
import { theme } from "../../theming";
import { bottomInset } from '../../customHooks/useHeaderHeight'
const SLIDER_WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30
  },
  screen: {
    flexGrow: 1,
  },
  headerBtnContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1000,
    top: 10,
    paddingHorizontal: 12
  },
  rightHeaderBtns: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between'
  },
  headerRoundBtn: {
    height: 36,
    width: 36,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white
  },
  imgContainer: {
    width: SLIDER_WIDTH,
    height: 220,
    alignItems: 'center',
  },
  itemImage: {
    width: SLIDER_WIDTH,
    height: 220,
  },
  caruselImg: {
    width: '100%',
    height: '48%',
  },
  productImgContainer: {
    alignItems: 'center',
  },
  caruselContainer: {
    backgroundColor: 'rgba(33, 33, 33, 0.40)',
  },
  productImgInnerContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightBoxHeader: {
    backgroundColor: 'transparent',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexWrap: 'nowrap',
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%',
    position: 'absolute',
    zIndex: 999,
    left: 0,
    right: 0,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  contactDetails: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: Platform.OS == 'ios' ? 70 : 70,
    backgroundColor: theme.colors.white,
    borderTopWidth: 1,
    borderTopColor: 'grey',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3,
  },
  emailBtn: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 4,
    height: 40,
    marginHorizontal: 2,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dotcolor: {
    backgroundColor: '#000',
  },
  dotContainer: {
    position: 'absolute',
    bottom: 20,
    paddingTop: 0,
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotstyle: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: theme.colors.lightGrey,
  },
  detailContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -10,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    // paddingHorizontal: 16
  },
  titleView: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    backgroundColor: theme.colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  addressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14
  },
  locationText: {
    textAlign: 'center',
    paddingTop: 18,
    paddingBottom: 8
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    width: '100%',
    alignItems: 'center',
  },
  roundBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundBtn: {
    padding: 10,
    backgroundColor: 'rgba(248, 29, 29, 0.2)',
    borderRadius: 50,
    marginBottom: 4,
  },
  tabContainer: {
    width: '100%',
    marginTop: 24,
    paddingLeft: 14,
    height: 74,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  tab: {
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapBgContainer: {
    marginTop: 20,
    paddingHorizontal: 14,
    width: '100%',
    paddingBottom: 20
  },
  mapBg: {
    marginVertical: 14,
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  featureContainer: {
    height: 90,
    borderWidth: 1,
    borderColor: theme.colors.placeholderColor,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  featureBox: {
    width: 100,
    borderWidth: 1,
    borderColor: theme.colors.placeholderColor,
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    top: -12,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 50,
    backgroundColor: theme.colors.black,
    marginRight: 10,
  }
})