import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Colors from "./colors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const tabHeight = 50;
const galleryGridWidth = Math.floor((windowWidth - 20) / 4);
const galleryGridHeight = Math.floor((windowWidth - 20) / 4);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  popupContainer: {
    backgroundColor: "#fff",
    // marginTop : "60%",
    paddingTop: 20,
    paddingBottom: 20,
  },
  popupSwitch: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row'
  },
  popupText: {
    fontSize: 16,
    color: Colors.black,
    alignSelf: "center",
  },
  inputContainer: {
    marginVertical: 10,
    padding: 10,
  },
  fieldBox: {
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
    flexDirection: "row",
    padding: 3,
    borderRadius: 3,
    borderColor: "#ddd",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    height: "auto",
    justifyContent: "space-between",
  },
  bbw0: {
    borderBottomWidth: 0,
  },
  formBorder: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 3,
  },
  boxBorder: {
    // padding: 5,
    borderRadius: 3,
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  mh5: {
    marginHorizontal: 5,
  },
  textfield: {
    height: "auto",
    fontSize: Colors.textSize,
    color: Colors.textColor,
    textAlign: "left",
    padding: 5,
  },
  textfieldTime: {
    justifyContent: "center",
    height: 30,
    fontSize: Colors.textSize,
    color: Colors.textColor,
    textAlign: "center",
  },

  inputRadio: {
    // justifyContent:'center',
    // alignItems:'center',
    padding: 10,
    width: "62%",
    marginTop: 5,
    flexWrap: "wrap",
    // paddingHorizontal: 10,
  },
  CardBox: {
    padding: 5,
    borderRadius: 3,
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    marginBottom: 5,
    marginTop: 5,
    shadowColor: "#999",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  labelName: {
    color: Colors.labelColor,
    // lineHeight: 40,
    fontSize: Colors.lableSize,
    paddingLeft: 4,
    height: "auto",
    paddingVertical: 10,
  },
  pd0: {
    padding: 0,
    paddingVertical: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
  },
  pd5: {
    padding: 0,
    paddingVertical: 0,
  },
  dateField: {
    backgroundColor: "#fff",
    height: "auto",

    fontSize: Colors.textSize,
    color: Colors.textColor,
    textAlign: "left",
    padding: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 20,
    color: "#fff",
    marginTop: 10,
  },
  textWhite: {
    color: "#fff",
    fontWeight: "bold",
    // paddingVertical: 5,
    fontSize: Colors.lableSize,
  },
  item: {
    height: 35,
    backgroundColor: "#00b386",
    alignItems: "center",
    justifyContent: "center",
  },
  itemtitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: Colors.textSize,
  },
  errorFieldBox: {
    borderWidth: 1,
    borderColor: Colors.tomato,
  },
  searchModalOverlay: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    width: windowWidth,
    height: windowHeight,
  },
  seacrhModalContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    width: windowWidth,
    height: windowHeight,
    elevation: 5,
  },
  searchModalHeader: {
    height: 55,
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.primary,
    elevation: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerBackBtnContainer: {
    width: "20%",
    height: 55,
    paddingLeft: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerTitleContainer: {
    width: "80%",
    height: 55,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  searchModalBody: {
    flex: 1,
    height: windowHeight - 55,
    padding: 6,
  },
  searchingText: {
    fontSize: Colors.textSize,
    color: Colors.textColor,
    opacity: 0.8,
    alignSelf: "center",
    marginTop: 20,
  },
  imagePicker: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 3,
    backgroundColor: "#fff",
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  step_nav: {
    // margin:10,
    padding: 5,
    backgroundColor: Colors.primary,
    width: 30,
    justifyContent: "center",
    height: 30,
    borderRadius: 50,
  },
  inactive_step_nav: {
    backgroundColor: Colors.activeTab,
    padding: 5,
    width: 30,
    justifyContent: "center",
    height: 30,
    borderRadius: 50,
  },

  activeText: {
    textAlign: "center",
    color: Colors.white, // style for active text
    fontSize: Colors.textSize,
  },
  textInputIcon: {
    position: "absolute",
    bottom: 14,
    right: 10,
    marginLeft: 8,
    color: Colors.primary,
    zIndex: 99,
  },
  width50: {
    width: "50%",
  },
  width60: {
    width: "60%",
  },
  plusIcon: {
    fontSize: 24,
    color: Colors.white,
    position: "absolute",
    bottom: 12.5,
  },
  addbutton: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    width: 50,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 50 / 2,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  mt30: {
    marginTop: 30,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderWidth: 1.5,
    borderRadius: 3,
    borderColor: "#ccc",
    alignSelf: "center",
  },
  btnText: {
    fontSize: 16,
    color: Colors.textColor,
    opacity: 0.8,
    textAlign: "center",
  },
  form: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 0,
    paddingHorizontal: Colors.formPaddingHorizontal,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: Colors.formBorderRedius,
  },
  rowContainer: {
    borderColor: "#d2d1cd",
    borderRadius: 10,
    paddingVertical: 2,
    borderRadius: 3,
    // paddingHorizontal: 5,
  },

  row: {
    marginTop: 0,
    flexDirection: "row",
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#cfcfcf",
    borderRadius: 3,
    // height: 45,
    width: "100%",
    alignItems: "center",
  },
  rowLeft: {
    width: "50%",
    backgroundColor: "#fff",
    paddingLeft: 10,
    justifyContent: "center",
    marginTop: 0,
    borderRadius: 3,
    // paddingTop:1,
    // paddingBottom:1,
  },
  rowRight: {
    width: "45%",
    marginLeft: 5,
    backgroundColor: "#fff",
    marginVertical: 5,
    textAlign: "left",
    borderRadius: 3,
    justifyContent: "center",
    // paddingBottom: 6
  },
  textSub: {
    margin: 10,
    color: Colors.textColor,
    fontWeight: "bold",
  },
  tabContainer: {
    width: "100%",
    height: tabHeight,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#d1d1d1",
    borderTopWidth: 1,
    borderTopColor: Colors.primary,
    elevation: 1,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: tabHeight,
  },
  activeTab: {
    height: tabHeight - 1,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },

  activeTexttab: {
    // style for active tab text
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.primary,
  },
  inActiveText: {
    fontSize: 14,
    color: Colors.textColor,
    opacity: 0.8,
  },
  inActiveTab: {
    backgroundColor: Colors.white,
    paddingVertical: 3,
  },
  pendingStatus: {
    textAlign: "right",
    color: Colors.warning,
    fontStyle: "italic",
    fontSize: Colors.textSize,
  },
  approveStatus: {
    textAlign: "right",
    color: Colors.success,
    fontStyle: "italic",
    fontSize: Colors.textSize,
  },
  rejectStatus: {
    textAlign: "right",
    color: Colors.danger,
    fontStyle: "italic",
    fontSize: Colors.textSize,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  saveBtnText: {
    color: Colors.primary,
  },
  exitBtnText: {
    color: Colors.activeTab,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 30,
  },
  // style for search modal

  searchModalOverlay: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    width: windowWidth,
    height: windowHeight,
  },
  seacrhModalContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    width: windowWidth,
    height: windowHeight,
    elevation: 5,
  },
  searchModalHeader: {
    height: 55,
    width: "100%",
    elevation: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Colors.primary,
  },
  searchBackBtn: {
    width: "10%",
    height: 55,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  searchBackground: {
    backgroundColor: Colors.primary,
  },
  headerSearchContainer: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    padding: 5,
    marginTop: -5,
    marginBottom: 5,
    marginHorizontal: 8,
  },
  searchContainer: {
    width: "90%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchFieldBox: {
    width: "100%",
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0, 0.1)",
    borderRadius: 50,
  },
  searchField: {
    width: "90%",
    padding: 3,
    color: Colors.white,
    fontSize: 16,
  },
  searchModalBody: {
    flex: 1,
    height: windowHeight - 55,
  },

  // style for icon and lable list(master)

  title: {
    width: "72%",
    fontSize: 16,
    color: Colors.textColor,
    fontWeight: "bold",
  },
  pl12: {
    paddingLeft: 12,
  },
  icon_btn: {
    // width: Math.floor(windowWidth / 2),
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  imgContainer: {
    width: "20%",
  },
  listContainer: {
    padding: 2,
    height: windowHeight - tabHeight,
  },
  no_bg_color: {
    backgroundColor: "transparent",
  },
  text_bold: {
    fontWeight: "bold",
  },
  leftPart: {
    width: "75%",
    justifyContent: "center",
  },
  rightPart: {
    width: "25%",
    justifyContent: "center",
  },
  rightPartStock: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1 / 2,
  },
  rightPartButton: {
    padding: 5,
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 3,
  },
  rightPartButtonText: {
    color: Colors.white,
  },
  imageContainer: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 3,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  image_h40w40: {
    height: 40,
    width: 40,
  },
  image_h55w55: {
    height: 55,
    width: 55,
  },
  qrCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  galleryContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  galleryGrid: {
    width: galleryGridWidth,
    height: galleryGridHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  galleryImg: {
    width: galleryGridWidth,
    height: galleryGridHeight,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  galleryAddBtn: {
    width: galleryGridWidth,
    height: galleryGridHeight - 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderColor: Colors.primary,
  },
  errorText: {
    textAlign: "right",
    color: Colors.tomato,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  checkboxImgContainer: {
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingRight: 5,
  },
  iconContainer: {
    width: "15%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  selectedItemsContainer: {
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
    paddingVertical: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  rightSection: {
    width: "15%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  qtyContainer: {
    height: 35,
    width: 35,
    borderRadius: 100,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  qty: {
    fontSize: 14,
    color: "#FFF",
  },
  downloadBtn: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 3,
  },
  closerBtn: {
    top: 20,
    bottom: 10,
    padding: 10,
  },
  closeBtnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.tomato,
  },
  angelIconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  backBtnContainer: {
    width: "10%",
    height: 55,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  multiSelectContainer: {
    alignItems: "center",
    width: "100%",
    overflow: "hidden",
    flexDirection: "row",
    padding: 5,
    borderRadius: 3,
    borderColor: "#ddd",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    height: "auto",
    // justifyContent: "space-between",
  },
  selectedItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 3,
    margin: 3,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: Colors.primary,
  },
  dateContainer: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 3,
    paddingVertical: 5,
    marginTop: 5,
    paddingHorizontal: 15,
    marginHorizontal: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: 300,
    height: "auto",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#ddd",
    alignSelf: "flex-start",
  },
  btn: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginBottom: 5,
  },
  btnExtra: {
    width: 130,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginBottom: 5,
  },
  btnDanger: {
    backgroundColor: Colors.danger,
  },
  btnSuccess: {
    backgroundColor: Colors.green,
  },
  btnText: { color: Colors.white },
  categories_rightPart: {
    width: "25%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  low_rightPart: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  qtyBox: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 3,
  },
  qtyText: {
    fontSize: 14,
    color: "#FFF",
  },
  itemTitleContainer: {
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headingText: {
    fontSize: Colors.lableSize,
    color: Colors.textColor,
    fontWeight: "bold",
  },
  capsule: {
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 2,
    borderRadius: 50,
    marginRight: 10,
  },
  capsulePrimary: {
    height: 25,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingBottom: 2,
    marginHorizontal: 3,
    marginVertical: 4,
    // borderRadius: 30,
    borderRadius: 2,
    backgroundColor: Colors.primary,
  },
  itemInfoContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  underlineStyle: {
    backgroundColor: Colors.primary,
    height: 3,
  },
  theadRow: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: Colors.lightGrey,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  tbodyRow: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  itemDetail_imagePicker: {
    width: 50,
    height: 50,
    marginTop: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 3,
    backgroundColor: "#fff",
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  radioField: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
  radioText: {
    marginLeft: 8,
    fontSize: Colors.textSize,
    color: Colors.textColor,
  },
  itemRow: {
    flexDirection: "row",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemsContainer: {
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  modalOverlay: {
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth,
    height: windowHeight,
  },
  itemModalContainer: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Colors.lightGrey,
  },
  itemModalHeader: {
    height: 55,
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.primary,
    elevation: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  itemModalBody: {
    flex: 1,
    height: windowHeight - 55,
    padding: 8,
  },
  radioButton: {
    flexDirection: "row",
    padding: 3,
  },
  radioButtonLabel: {
    fontSize: Colors.textSize,
    color: Colors.textColor,
    marginLeft: 5,
  },
  itemsContainer: {
    marginVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  itemRow: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemRowHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemRowBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
  },
  rowTitleText: {
    fontSize: Colors.textSize,
    color: Colors.textColor,
    fontWeight: "bold",
    lineHeight: 24,
  },
  rowSubText: {
    color: Colors.textColor,
    opacity: 0.8,
    fontSize: Colors.textSize,
  },
  totalRow: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonSec: {
    width: 150,
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    color: "#fff",
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalBody: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    width: Math.floor((windowWidth * 60) / 100),
    minHeight: Math.floor(windowHeight / 5),
    padding: 15,
    borderRadius: 3,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  detailText: {
    textAlign: "center",
  },
  detailsContainer: {
    marginBottom: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  btnContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  itemRemoveContainer: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  firstCol: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxContainer: {
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  // purchase order details

  purchase_modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  purchase_modalBody: {
    backgroundColor: Colors.white,
    width: Math.floor((windowWidth * 90) / 100),
    minHeight: Math.floor(windowHeight / 3),
    borderRadius: 3,
    elevation: 5,
  },
  purchase_modalHeader: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "space-between",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    paddingHorizontal: 10,
  },
  purchase_modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
  },
  mb0: {
    marginBottom: 0,
  },
  incidentbtnCover: {
    width: 70,
    height: 30,
    // paddingVertical: 2,
    backgroundColor: Colors.primary,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  incidentbtns: {
    fontSize: 14,
    color: Colors.white,
  },
  scanModalOverlay: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: windowWidth,
    height: windowHeight,
  },
  qrCodeSacnBox: {
    width: Math.floor((windowWidth * 70) / 100),
    height: Math.floor((windowWidth * 70) / 100),
  },
  cancelButton: {
    position: "absolute",
    zIndex: 11,
    top: 30,
    left: 10,
    backgroundColor: Colors.lightGrey,
    width: 30,
    height: 30,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  cancelButtonText: {
    color: "#000",
    fontSize: 24,
  },

  sectionHeader: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    backgroundColor: Colors.primary,
    marginBottom: 10,
    borderRadius: 3,
  },
  sectionHeaderUser: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    backgroundColor: Colors.white,
    marginBottom: 10,
    borderRadius: 3,
    borderBottomWidth : 1,
    borderBottomColor : Colors.lightGrey
  },
  sectionHeaderLeft: {
    width: "14%",
    alignItems: "flex-end",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: Colors.white,
    paddingRight: 10,
  },
  sectionHeaderRight: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
  },
  closeButton: {
    position: "absolute",
    zIndex: 11,
    top: 3,
    right: 3,
    backgroundColor: "#ddd",
    width: 30,
    height: 30,
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
    elevation: 0,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 26,
  },
  //=========== Added by Tuhin=================
  flex1: { flex: 1 },
  width100: { width: "100%" },
  width85: { width: "85%" },
  width20: { width: "20%" },
  width75: { width: "75%" },
  w100: { width: 100 },
  mt60: { marginTop: 60 },
  mb50: { marginBottom: 50 },
  mb10: { marginBottom: 10 },
  mb0: { marginBottom: 0 },
  ml10: { marginLeft: 10 },
  mr10: { marginRight: 10 },
  mt10: { marginTop: 10 },
  mt5: { marginTop: 5 },
  h50: { height: 50 },
  mh4: { marginHorizontal: 4 },
  p0: { padding: 0 },
  p3: { padding: 3 },
  p5: { padding: 5 },
  p10: { padding: 10 },
  pr5: { paddingRight: 5 },
  pl5: { paddingLeft: 5 },
  pv5: { paddingVertical: 5 },
  h10: { height: 10 },
  heightAuto: { height: "auto" },
  safeAreaViewStyle: { flex: 1, backgroundColor: "transparent" },
  sectionHeaderText: { fontSize: 16, color: Colors.white },
  sectionHeaderTextUser: { fontSize: 16, color: Colors.primary },
  BGWhite: { backgroundColor: Colors.white },
  alignItemsCenter: { alignItems: "center" },
  flexDirectionRow: { display: "flex", flexDirection: "row" },
  justifyContentBetween: { justifyContent: "space-between" },
  justifyContentCenter: { justifyContent: "center" },
  justifyContentAround: { justifyContent: "space-around" },
  textAlignCenter: { textAlign: "center" },
  fontWeightNormal: { fontWeight: "normal" },
  qrDownloadImage: { height: 200, width: 200 },
  downloadFileButtonText: { fontSize: 16, marginHorizontal: 5 },
  listEmptyComponentStyle: {
    color: Colors.textColor,
    textAlign: "center",
    marginTop: 10,
  },
  animalCodeTextInput: { width: "100%", textAlign: "left", fontSize: 14 },
  //============================================
  viewIncidentAndObservationAttachment: {
    marginBottom: 10,
    height: 250
  },
  scrollViewImageContainer: {
    paddingTop: 2,
    padingHorizontal: 10
  },
  incidentAndObservationImage: {
    height: 200,
    width: 200,
    marginHorizontal: 5,
  },
  drawerTop: {
    alignItems: "center",
    position: "relative",
    top: 100,
  },
  itemView: {
    marginTop: 20,
    alignItems: "center",
  },
  itemText: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: '600'
  },
  versionButton: {
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 20,
    color: "#fff",
    marginTop: 10,
  },
  versionButtonText: {
    color: Colors.primary,
    fontWeight: "bold",
    // paddingVertical: 5,
    fontSize: Colors.lableSize,
  },
});
export default styles;
