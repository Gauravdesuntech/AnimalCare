import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  TextInput,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Container } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Configs } from "../../config";
import { Header, ListEmpty, Loader } from "../../component";
import { getAllocationSections } from "../../services/AllocationServices";
import { fetchProfile } from "../../services/UserManagementServices";
import AppContext from "../../context/AppContext";
import { capitalize } from "../../utils/Util";
import Users from "./../staff/Users";
import styles from './Styles'
import globalStyles from '../../config/Styles'


export default class WorkAllocation extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      sections: [],
      isSearching: true,
      isSearchModalOpen: false,
      searchValue: "",
      searchData: [],
    };

    this.searchInput = React.createRef();
  }

  componentDidMount = () => {
    this.focusListener = this.props.navigation.addListener(
      "focus",
      this.onScreenFocus
    );
  };

  onScreenFocus = () => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        this.loadSections();
      }
    );
  };

  handelRefresh = () => {
    this.setState(
      {
        isLoading: true,
      },
      () => {
        this.loadSections();
      }
    );
  };

  loadSections = () => {
    let cid = this.context.userDetails.cid;
    console.log(cid);
    getAllocationSections(cid)
      .then((response) => {
        // console.log("response......",response);
        this.setState({
          isLoading: false,
          sections: response,
        });
      })
      .catch((error) => console.log(error));
  };

  openSearchModal = () => {
    this.setState({
      isSearching: true,
      searchValue: "",
      searchData: [],
      isSearchModalOpen: true,
    });

    setTimeout(() => {
      this.searchInput.current.focus();
    }, 500);
  };

  closeSearchModal = () => {
    this.setState({
      isSearching: true,
      searchValue: "",
      searchData: [],
      isSearchModalOpen: false,
    });
  };

  searchData = () => {
    let { searchValue, sections } = this.state;
    let data = sections.filter((item) => {
      let name = item.name.toLowerCase();
      let index = name.indexOf(searchValue.toLowerCase());
      return index > -1;
    });

    this.setState({
      isSearching: false,
      searchData: data,
    });
  };

  gotoAddSection = () => {
    this.props.navigation.navigate("AddAllocation");
  };

  gotoFeedMenu = (item) => {
    this.closeSearchModal();
    this.props.navigation.navigate("FeedMenu", {
      data: item,
    });
  };

  gotoEditSection = (item) => {
    this.closeSearchModal();
    this.props.navigation.navigate("AddSection", {
      id: item.id,
      name: item.name,
      imageURI: item.image,
      screen_title: "Edit Section",
    });
  };

  checkEditActionPermissions = (item) => {
    if (this.context.userDetails.action_types.includes("Edit")) {
      this.gotoEditSection(item);
    }
  };

  renderListItem = ({ item }) => {
    let users = item.users.map((user) => {
      return user?.full_name;
    });
    users = users.join(" , ");
    return (
      <TouchableHighlight
        underlayColor={"#eee"}
        onPress={this.gotoFeedMenu.bind(this, item)}
        // onLongPress={this.checkEditActionPermissions.bind(this, item)}
      >
        <View style={styles.view}>
          <View style={[globalStyles.justifyContentCenter,{ width: "20%" }]}>
            <Image
              style={styles.image}
              source={{ uri: item.image }}
              resizeMode="contain"
            />
          </View>
          <View style={[globalStyles.flex1,globalStyles.justifyContentCenter,globalStyles.paddingRight5]}
           >
            <Text style={styles.name}>{capitalize(item.name)}</Text>
            <Text style={[styles.name, globalStyles.fontSize]}>{users}</Text>
          </View>

          {/* {this.context.userDetails.action_types.includes(Configs.USER_ACTION_TYPES_CHECKING.stats) ? (
					(
						<View style={styles.angelIconContainer}>
							<View style={styles.qtyContainer}>
								<Text style={styles.qty}>{item.total_animal}</Text>
							</View>
							<Ionicons name="chevron-forward" style={styles.iconStyle} />
						</View>
					)
				) : null} */}
        </View>
      </TouchableHighlight>
    );
  };

  checkAddActionPermissions = () => {
    if (this.state.isLoading == false) {
      if (this.context.userDetails.action_types.includes("Add")) {
        return this.gotoAddSection;
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  };

  render = () => (
    <Container>
      <Header
        title={"Allocation"}
        searchAction={this.state.isLoading ? undefined : this.openSearchModal}
      />

      {this.state.isLoading ? (
        <Loader />
      ) : (
        <FlatList
          ListEmptyComponent={() => <ListEmpty />}
          data={this.state.sections}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={this.renderListItem}
          initialNumToRender={this.state.sections.length}
          refreshing={this.state.isLoading}
          onRefresh={this.handelRefresh}
          contentContainerStyle={
            this.state.sections.length === 0 ? styles.container : null
          }
        />
      )}

      {/*Search Modal*/}
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isSearchModalOpen}
        onRequestClose={this.closeSearchModal}
      >
        <SafeAreaView style={[globalStyles.flex1,globalStyles.no_bg_color]}
         >
          <View style={styles.searchModalOverlay}>
            <View style={styles.seacrhModalContainer}>
              <View style={styles.searchModalHeader}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.backBtnContainer}
                  onPress={this.closeSearchModal}
                >
                  <Ionicons name="arrow-back" size={28} color={Colors.white} />
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                  <View style={styles.searchFieldBox}>
                    <Ionicons name="search" size={24} color={Colors.white} />
                    <TextInput
                      ref={this.searchInput}
                      value={this.state.searchValue}
                      onChangeText={(searchValue) =>
                        this.setState(
                          {
                            searchValue: searchValue,
                            isSearching: true,
                          },
                          () => {
                            this.searchData();
                          }
                        )
                      }
                      autoCompleteType="off"
                      autoCapitalize="none"
                      placeholder="Type Section Name"
                      placeholderTextColor={Colors.white}
                      style={styles.searchField}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.searchModalBody}>
                {this.state.searchValue.trim().length > 0 ? (
                  this.state.isSearching ? (
                    <Text style={styles.searchingText}>Searching...</Text>
                  ) : (
                    <FlatList
                      data={this.state.searchData}
                      keyExtractor={(item, index) => item.id.toString()}
                      renderItem={this.renderListItem}
                      initialNumToRender={this.state.searchData.length}
                      ListEmptyComponent={() => (
                        <Text style={styles.searchingText}>
                          No Result Found
                        </Text>
                      )}
                    />
                  )
                ) : null}
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </Container>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 5,
//   },
//   view: {
//     flexDirection: "row",
//     borderBottomColor: "#eee",
//     borderBottomWidth: 1,
//     paddingHorizontal: 5,
//     paddingVertical: 3,
//   },
//   image: {
//     width: 50,
//     height: 50,
//   },
//   name: {
//     fontSize: 18,
//     color: Colors.textColor,
//   },
//   qtyContainer: {
//     height: 35,
//     width: 35,
//     borderRadius: 100,
//     backgroundColor: Colors.primary,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   qty: {
//     fontSize: 14,
//     color: "#FFF",
//   },
//   angelIconContainer: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   iconStyle: {
//     fontSize: 18,
//     color: "#cecece",
//   },
//   searchModalOverlay: {
//     justifyContent: "center",
//     alignItems: "center",
//     width: windowWidth,
//     height: windowHeight,
//   },
//   seacrhModalContainer: {
//     flex: 1,
//     width: windowWidth,
//     height: windowHeight,
//     backgroundColor: Colors.white,
//   },
//   searchModalHeader: {
//     height: 55,
//     width: "100%",
//     elevation: 5,
//     paddingHorizontal: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     backgroundColor: Colors.primary,
//   },
//   backBtnContainer: {
//     width: "10%",
//     height: 55,
//     alignItems: "flex-start",
//     justifyContent: "center",
//   },
//   searchContainer: {
//     width: "90%",
//     height: 55,
//     alignItems: "flex-start",
//     justifyContent: "center",
//   },
//   searchFieldBox: {
//     width: "100%",
//     height: 40,
//     paddingHorizontal: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "rgba(0,0,0, 0.1)",
//     borderRadius: 50,
//   },
//   searchField: {
//     padding: 5,
//     width: "90%",
//     color: Colors.white,
//     fontSize: 15,
//   },
//   searchModalBody: {
//     flex: 1,
//     height: windowHeight - 55,
//   },
//   searchingText: {
//     fontSize: 12,
//     color: Colors.textColor,
//     opacity: 0.8,
//     alignSelf: "center",
//     marginTop: 20,
//   },
// });
