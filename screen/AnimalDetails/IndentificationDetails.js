// Created By gaurav shukla
// Created on 4/01/2023


import { StyleSheet, View, Text, TextInput, TouchableOpacity, } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "../../config/colors";
import styles from "../../config/Styles";
import Configs from "../../config/Configs";
import { DateTimePickerModal } from 'react-native-modal-datetime-picker';
import { DatePicker, InputDropdown } from "../../component";

const IdentificationDetail = () => {
    const [show, setShow] = useState(false);
    const [dob, setDob] = useState(new Date());
    const [type, setType] = useState("");
    const [identificationType, setIdentificationType] = useState("");
    const [isIdentificationTypeMenuOpen, setIsIdentificationTypeMenuOpen] = useState(false);




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

    const HandleSetIdentificationType = (v) => {
        setIdentificationType(v.value);
        setIsIdentificationTypeMenuOpen(false);
    }
    const toggleIdentificationTypeMenu = () => {
        setIsIdentificationTypeMenuOpen(!isIdentificationTypeMenuOpen)
    };


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
                    label={"Class:"}
                    value={identificationType}
                    isOpen={isIdentificationTypeMenuOpen}
                    items={Configs.ANIMAL_IDENTIFICATION_TYPES}
                    openAction={toggleIdentificationTypeMenu}
                    closeAction={toggleIdentificationTypeMenu}
                    setValue={HandleSetIdentificationType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, identificationType ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox,
                        //     isIdentificationTypeValidationFailed
                        //   ? styles.errorFieldBox
                        //   : null,
                    ]}
                />
                <InputDropdown
                    label={"Categroy:"}
                    value={identificationType}
                    isOpen={isIdentificationTypeMenuOpen}
                    items={Configs.ANIMAL_IDENTIFICATION_TYPES}
                    openAction={toggleIdentificationTypeMenu}
                    closeAction={toggleIdentificationTypeMenu}
                    setValue={HandleSetIdentificationType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, identificationType ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox,
                        //     isIdentificationTypeValidationFailed
                        //   ? styles.errorFieldBox
                        //   : null,
                    ]}
                />
                <InputDropdown
                    label={"Sub Categroy:"}
                    value={identificationType}
                    isOpen={isIdentificationTypeMenuOpen}
                    items={Configs.ANIMAL_IDENTIFICATION_TYPES}
                    openAction={toggleIdentificationTypeMenu}
                    closeAction={toggleIdentificationTypeMenu}
                    setValue={HandleSetIdentificationType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, identificationType ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox,
                        //     isIdentificationTypeValidationFailed
                        //   ? styles.errorFieldBox
                        //   : null,
                    ]}
                />
                <InputDropdown
                    label={"Common Name:"}
                    value={identificationType}
                    isOpen={isIdentificationTypeMenuOpen}
                    items={Configs.ANIMAL_IDENTIFICATION_TYPES}
                    openAction={toggleIdentificationTypeMenu}
                    closeAction={toggleIdentificationTypeMenu}
                    setValue={HandleSetIdentificationType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, identificationType ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox,
                        //     isIdentificationTypeValidationFailed
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
                <InputDropdown
                    label={"Collection Type :"}
                    value={identificationType}
                    isOpen={isIdentificationTypeMenuOpen}
                    items={Configs.ANIMAL_IDENTIFICATION_TYPES}
                    openAction={toggleIdentificationTypeMenu}
                    closeAction={toggleIdentificationTypeMenu}
                    setValue={HandleSetIdentificationType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, identificationType ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox,
                        //     isIdentificationTypeValidationFailed
                        //   ? styles.errorFieldBox
                        //   : null,
                    ]}
                />
                <InputDropdown
                    label={"Sex :"}
                    value={identificationType}
                    isOpen={isIdentificationTypeMenuOpen}
                   // items={Configs.ANIMAL_IDENTIFICATION_TYPES}
                    openAction={toggleIdentificationTypeMenu}
                    closeAction={toggleIdentificationTypeMenu}
                    setValue={HandleSetIdentificationType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, identificationType ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox,
                        //     isIdentificationTypeValidationFailed
                        //   ? styles.errorFieldBox
                        //   : null,
                    ]}
                />
                
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