import React from "react";
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	FlatList,
	Modal,
	Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../config/colors";

export default class Dropdown extends React.Component {
	state = {
		searchValue: "",
		isOpen: false,
	};

	getData = () => {
		let { searchValue } = this.state;
		let items = this.props.items || [];

		let data = items.filter((element) => {
			let name = element.name.toLowerCase();
			let index = name.indexOf(searchValue.toLowerCase());
			return index > -1;
		});

		return data;
	};

	openModal = () => this.setState({ searchValue: "", isOpen: true });

	closeModal = () => this.setState({ searchValue: "", isOpen: false });

	setValue = (item) => {
		this.setState(
			{
				searchValue: "",
				isOpen: false,
			},
			() => {
				this.props.onChange(item);
			}
		);
	};

	renderListItem = ({ item }) => (
		<TouchableOpacity
			activeOpacity={1}
			style={styles.listItem}
			onPress={this.setValue.bind(this, item)}
		>
			<Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemText}>
				{item.name}
			</Text>
		</TouchableOpacity>
	);

	listEmptyComponent = () => (
		<Text style={styles.emptyText}>No Result Found</Text>
	);

	listFooterComponent = () => <View style={{ height: 50 }} />;

	render = () => {
		let listData = this.getData();
		return (
			<>
				<TouchableOpacity activeOpacity={1} onPress={this.openModal}>
					<View style={[styles.fieldBox, this.props.style]}>
						<Text style={[styles.labelName, this.props.labelStyle]}>
							{this.props.label}
							{this.props.isMandatory ? (
								<Text style={{ color: Colors.tomato }}> *</Text>
							) : null}
						</Text>
						<Text
						style={this.props.value ? [styles.textfield, this.props.textFieldStyle] : [styles.textfield, this.props.textFieldStyle,{opacity:0.7}] }
					>{this.props.value ? this.props.value : this.props.placeholder }</Text>
						{/* <TextInput
							editable={false}
							value={this.props.value}
							placeholder={
								typeof this.props.placeholder !== "undefined"
									? this.props.placeholder
									: "Select an option"
							}
							style={[styles.textfield, this.props.textFieldStyle]}
						/> */}
					</View>
				</TouchableOpacity>
				{this.state.isOpen ? (
					<Modal
						animationType="none"
						transparent={true}
						statusBarTranslucent={true}
						visible={true}
					>
						<View style={styles.modalOverlay}>
							<View style={styles.modalContainer}>
								<View style={styles.modalHeader}>
									<TouchableOpacity
										activeOpacity={1}
										style={styles.closeBtn}
										onPress={this.closeModal}
									>
										<Ionicons name="close" size={26} color={Colors.textColor} />
									</TouchableOpacity>
									<View style={styles.searchContainer}>
										<Ionicons name="search" size={18} color="#ddd" />
										<TextInput
											value={this.state.searchValue}
											onChangeText={(searchValue) =>
												this.setState({ searchValue })
											}
											autoCompleteType="off"
											placeholder="Type something..."
											style={styles.searchField}
										/>
									</View>
								</View>

								<View style={styles.modalBody}>
									<FlatList
										data={listData}
										renderItem={this.renderListItem}
										keyExtractor={(item, index) => item.id.toString()}
										showsVerticalScrollIndicator={false}
										initialNumToRender={listData.length}
										ListEmptyComponent={this.listEmptyComponent.bind(this)}
										ListFooterComponent={this.listFooterComponent.bind(this)}
										keyboardShouldPersistTaps="handled"
									/>
								</View>
							</View>
						</View>
					</Modal>
				) : null}
			</>
		);
	};
}

const windowHeight = Dimensions.get("screen").height;
const styles = StyleSheet.create({
	fieldBox: {
		width: "100%",
	},
	labelName: {
		color: Colors.textColor,
		fontSize: 14,
	},
	textfield: {
		height: 40,
		fontSize: 12,
		color: Colors.textColor,
		width: "100%",
		padding: 5,
	},
	modalOverlay: {
		height: windowHeight,
		backgroundColor: "rgba(0,0,0,0.2)",
		justifyContent: "flex-end",
	},
	modalContainer: {
		backgroundColor: "#fff",
		height: Math.floor(windowHeight * 0.5),
		elevation: 20,
	},
	modalHeader: {
		height: 50,
		flexDirection: "row",
		borderTopWidth: StyleSheet.hairlineWidth,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: "#ccc",
		elevation: 0.4,
		alignItems: "center",
	},
	closeBtn: {
		width: "10%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	searchContainer: {
		width: "90%",
		flexDirection: "row",
		alignItems: "center",
	},
	searchField: {
		width: "80%",
		paddingVertical: 4,
		color: Colors.textColor,
		fontSize: 15,
	},
	modalBody: {
		flex: 1,
		paddingVertical: 8,
	},
	listItem: {
		paddingHorizontal: 10,
		paddingVertical: 8,
		justifyContent: "center",
	},
	itemText: {
		fontSize: 16,
		color: Colors.textColor,
		opacity: 0.9,
	},
	emptyText: {
		textAlign: "center",
		lineHeight: 40,
		fontSize: 14,
		color: "#555",
		opacity: 0.8,
	},
});
