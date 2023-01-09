// Created By gaurav shukla
// Created on 4/01/2023


import { StyleSheet, View, Text, TextInput, TouchableOpacity, } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "../../config/colors";
import styles from "../../config/Styles";
import MultiSelectforUser from "./../../component/MultiSelectforUser";
import { DateTimePickerModal } from 'react-native-modal-datetime-picker';
import { DatePicker, InputDropdown } from "../../component";
import {
    getAnimalGroups,
    getAllCategory,
    getAllSubCategory,
    getCommonNames,
} from "../../services/APIServices";
import { getUserDetails } from "../../services/UserManagementServices";
import AppContext from '../../context/AppContext';

const IdentificationDetail = () => {
    const [show, setShow] = useState(false);
    const [dob, setDob] = useState(new Date());
    const [type, setType] = useState("");
    const context = useContext(AppContext);

    //==>this  state for AnimalsGroups(Class)===>
    const [animalGroupsType, setAnimalGroupsType] = useState("");
    const [isAnimalsGroupsTypeMenuOpen, setIsAnimalGroupsTypeMenuOpen] = useState(false);
    const [animalGroups, setAnimalGroups] = useState([])
    //====> this statre  for Category==>
    const [categoryType, setCategoryType] = useState("");
    const [iscategoryTypeMenuOpen, setIsCategoryTypeMenuOpen] = useState(false);
    const [category, setCategory] = useState([])
    //===>this state for Subcategory==>
    const [subCategoryType, setSubCategoryType] = useState("");
    const [isSubCategoryTypeMenuOpen, setIsSubCategoryTypeMenuOpen] = useState(false);
    const [subCategory, setSubCategory] = useState([])
    //===> this state for Common Name ==>
    const [commonNameType, setCommonNameType] = useState("");
    const [isCommonNameTypeMenuOpen, setIsCommonNameTypeMenuOpen] = useState(false);
    const [commonName, setCommonName] = useState([]);

    const ShowDatePicker = (type) => {
        setShow(true)
        setType(type)
    }

    const handleConfirm = (selectDate) => {
        const currentDate = selectDate || dob;
        if (type == 'dob') {
            setDob(currentDate)
        }
        hideDatePicker();
    }

    const hideDatePicker = () => {
        setShow(false)
    }

    //=========>this functions for category ====> 
    const HandleSetAnimalGroupsType = (v) => {
        let cid = context.userDetails.cid;
        setAnimalGroupsType(v.name);
        setIsAnimalGroupsTypeMenuOpen(false);
        getAllSubCategory(cid,v.id).then((response) => {
            let Category = response.map((v) => ({ id: v.id, name: v.cat_name }));
            setCategory(Category);
        }).catch((error) => console.log(error));

    }

    const toggleAnimalGroupsTypeMenu = () => {
        setIsAnimalGroupsTypeMenuOpen(!isAnimalsGroupsTypeMenuOpen)
    };

    //===>this Function for Subcategory==>
    const HandleSetCategoryType = (v) => {
        let cid = context.userDetails.cid;
        setCategoryType(v.name);
        setIsCategoryTypeMenuOpen(false);
        getAllSubCategory(cid,v.id).then((response) => {
            let SubCategory = response.map((v) => ({ id: v.id, name: v.cat_name }));
            setSubCategory(SubCategory);
        }).catch((error) => console.log(error));
    }
    const toggleCategoryTypeMenu = () => {
        setIsCategoryTypeMenuOpen(!iscategoryTypeMenuOpen)
    };
    //===>this Function for Subcategory==>
    const HandleSetSubCategoryType = (v) => {
        setSubCategoryType(v.value);
        setIsSubCategoryTypeMenuOpen(false);
    }
    const toggleSubCategoryTypeMenu = () => {
        setIsSubCategoryTypeMenuOpen(!isSubCategoryTypeMenuOpen)
    };

    //===> this Function for Common name==>
    const HandleSetCommonType = (v) => {
        setCommonNameType(v.value);
        setIsCommonNameTypeMenuOpen(false);
    }
    const toggleCommonNameTypeMenu = () => {
        setIsCommonNameTypeMenuOpen(!isCommonNameTypeMenuOpen)
    };

    useEffect(() => {
        let cid = context.userDetails.cid;
        let methods = [
             getAnimalGroups(cid),
            // getAllCategory(cid),
            // getAllSubCategory(cid),
          //  getCommonNames({ cid }),
        ];

        Promise.all(methods).then((response) => {
            //console.log(response,"hhh")

            let animalGroups = response[0].map((v) => ({ id: v.id, name: v.group_name }));
            setAnimalGroups(animalGroups);

            // let Category = response[1].map((v) => ({ id: v.id, name: v.cat_name }));
            // setCategory(Category);

            // let SubCategory = response[2].map((v) => ({ id: v.id, name: v.sub_category_name }));
            // setSubCategory(SubCategory);

            // let CommonName = response[3].map((v) => ({ id: v.id, name: v.cat_name }));
            // setCommonName(CommonName);

        }).catch((error) => console.log(error));

    }, [])//sub_category_name


    return (
        <>
            <View style={style.mainContainer}>
                <View style={[styles.fieldBox]}>
                    <Text style={styles.labelName}>Date Of Birth: </Text>
                    <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }} onPress={() => { ShowDatePicker("dob") }}>
                        <Text style={styles.dateField}>{dob.toDateString()}</Text>
                        <AntDesign name="calendar" color={Colors.primary} size={20} />
                    </TouchableOpacity>
                </View>

                <View style={style.inputContainer}>
                    <Text style={style.labels}>Entity ID :</Text>
                    <TextInput style={style.inputstyle} autoCapitalize='none'></TextInput>
                </View>

                <InputDropdown
                    label={"Class :"}
                    items={animalGroups}
                    isMandatory={true}
                    value={animalGroupsType}
                    isOpen={isAnimalsGroupsTypeMenuOpen}
                    openAction={toggleAnimalGroupsTypeMenu}
                    closeAction={toggleAnimalGroupsTypeMenu}
                    setValue={HandleSetAnimalGroupsType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, animalGroupsType ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox,
                        // this.state.isIdentificationTypeValidationFailed
                        //   ? styles.errorFieldBox
                        //   : null,
                    ]}
                />


                <InputDropdown
                    label={"Category :"}
                    items={category}
                    isMandatory={true}
                    value={categoryType}
                    isOpen={iscategoryTypeMenuOpen}
                    openAction={toggleCategoryTypeMenu}
                    closeAction={toggleCategoryTypeMenu}
                    setValue={HandleSetCategoryType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, categoryType ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox,
                        // this.state.isIdentificationTypeValidationFailed
                        //   ? styles.errorFieldBox
                        //   : null,
                    ]}
                />

                <InputDropdown
                    label={" SubCategory :"}
                    items={subCategory}
                    isMandatory={true}
                    value={subCategoryType}
                    isOpen={isSubCategoryTypeMenuOpen}
                    openAction={toggleSubCategoryTypeMenu}
                    closeAction={toggleSubCategoryTypeMenu}
                    setValue={HandleSetSubCategoryType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, subCategoryType ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox,
                        // this.state.isIdentificationTypeValidationFailed
                        //   ? styles.errorFieldBox
                        //   : null,
                    ]}
                />

                <InputDropdown
                    label={" Common Name:"}
                    items={commonName}
                    isMandatory={true}
                    value={commonNameType}
                    isOpen={isCommonNameTypeMenuOpen}
                    openAction={toggleCommonNameTypeMenu}
                    closeAction={toggleCommonNameTypeMenu}
                    setValue={HandleSetCommonType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, commonNameType ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox,
                        // this.state.isIdentificationTypeValidationFailed
                        //   ? styles.errorFieldBox
                        //   : null,
                    ]}
                />

                <View style={style.inputContainer}>
                    <Text style={style.labels}>Scientific Name :</Text>
                    <TextInput style={style.inputstyle} autoCapitalize='none'></TextInput>
                </View>
                <View style={style.inputContainer}>
                    <Text style={style.labels}>Entity Type :</Text>
                    <TextInput style={style.inputstyle} autoCapitalize='none'></TextInput>
                </View>


                <View style={style.inputContainer}>
                    <Text style={style.labels}>Scientific Name :</Text>
                    <TextInput style={style.inputstyle} autoCapitalize='none'></TextInput>
                </View>

                <View style={style.inputContainer}>
                    <Text style={style.labels}>Scientific Name :</Text>
                    <TextInput style={style.inputstyle} autoCapitalize='none'></TextInput>
                </View>

                <View style={style.inputContainer}>
                    <Text style={style.labels}>Given Name :</Text>
                    <TextInput style={style.inputstyle} autoCapitalize='none'></TextInput>
                </View>
                <View style={style.inputContainer}>
                    <Text style={style.labels}>Identifications :</Text>
                    <TextInput style={style.inputstyle} autoCapitalize='none'></TextInput>
                </View>
                <View style={style.inputContainer}>
                    <Text style={style.labels}>Govt Reg # :</Text>
                    <TextInput style={style.inputstyle} autoCapitalize='none'></TextInput>
                </View>
            </View>
            <DateTimePickerModal
                mode={'date'}
                display={Platform.OS == 'ios' ? 'inline' : 'default'}
                isVisible={show}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </>
    )
};

const style = StyleSheet.create({

    mainContainer: {
        width: "auto",
        marginVertical: 1,
        borderColor: "black",
        alignItems: "baseline",
    },


    inputContainer: {
        width: "100%",
    },

    labels: {
        position: "absolute",
        top: 9,
        left: 10,
        fontSize: Colors.lableSize,
    },

    inputstyle: {
        position: "relative",
        top: -1,
        left: 0,
        padding: 7,
        paddingLeft: 80,
        fontWeight: "bold",
        width: "100%",
        borderWidth: 0.8,
        borderColor: "#ddd",
    },

})

export default IdentificationDetail;