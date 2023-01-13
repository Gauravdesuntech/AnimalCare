// Created By gaurav shukla
// Created on 13/01/2023

import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, ScrollView, FlatList } from 'react-native';
import styles from "../../config/Styles";
import Colors from "../../config/colors";
import { DateTimePickerModal } from 'react-native-modal-datetime-picker';
import { InputDropdown } from "../../component";
import { AntDesign } from "@expo/vector-icons";
import Configs from "../../config/Configs";
const Necropsy = () => {
    const [showNecropsyDate, setShowNecropsyDate] = useState(false);
    const [necropsydob, setNecropsydob] = useState(new Date());
    const [NecropsyType, setNecropsyType] = useState("");
    const [showRequestedDate, setShowRequestedDate] = useState(false);
    const [requesteddob, setRequesteddob] = useState(new Date());
    const [requestedType, setRequestedType] = useState("");
    const [requeste, setRequestd] = useState("");
    const [isRequesetedMenuOpen, setIsRequestedMenuOpen] = useState(false);
    const [animalGroups, setAnimalGroups] = useState([])
    const [performed, setPerformed] = useState("");
    const [isperformedMenuOpen, setIsPerformedMenuOpen] = useState(false);
    const [performedGroups, setPerformedGroups] = useState([]);
    const [histopathology, setHistopathology] = useState("");
    const [isHistopathologyMenuOpen, setIsHistopathologyMenuOpen] = useState(false);
    const [lebRequest, setLebRequest] = useState("");
    const [isLebRequestMenuOpen, setIsLebRequestMenuOpen] = useState(false);
    const [measurements, setMeasurements] = useState("");
    const [isMeasurementsMenuOpen, setIsMeasurementsMenuOpen] = useState(false);

    //====this datePicker function is Necropsy ====>
    const ShowNecropsyDatePicker = (NecropsyType) => {
        setShowNecropsyDate(true)
        setNecropsyType(NecropsyType)
    }
    const handleConfirmNecropsyDate = (selectDate) => {
        const currentDate = selectDate || necropsydob;
        if (NecropsyType == 'necropsydob') {
            setNecropsydob(currentDate)
        }
        NecropsyHideDatePicker();
    }
    const NecropsyHideDatePicker = () => {
        setShowNecropsyDate(false)
    }

    //====this datePicker function is Requested date ====>
    const ShowRequestedDatePicker = (requestedType) => {
        setShowRequestedDate(true)
        setRequestedType(requestedType)
    }
    const handleConfirmRequestedDate = (selectDate) => {
        const currentDate = selectDate || requesteddob;
        if (requestedType == 'requesteddob') {
            setRequesteddob(currentDate)
        }
        RequestedHideDatePicker();
    }
    const RequestedHideDatePicker = () => {
        setShowRequestedDate(false)
    }

    //=========>this functions for Requested BY====> 
    const HandleSetRequestedType = (v) => {
        //let cid = context.userDetails.cid;
        setRequestd(v.name);
        setIsRequestedMenuOpen(false);
        // getAllCategory(cid, v.id).then((response) => {
        //     let Category = response.map((v) => ({ id: v.id, name: v.cat_name }));
        //     setCategory(Category);
        // }).catch((error) => console.log(error));
    }
    const toggleRequestedTypeMenu = () => {
        setIsRequestedMenuOpen(!isRequesetedMenuOpen)
    };

       //=========>this functions for Performed BY====> 
    const HandleSetPerformedType = (v) => {
        //let cid = context.userDetails.cid;
        setPerformed(v.name);
        setIsPerformedMenuOpen(false);
        // getAllCategory(cid, v.id).then((response) => {
        //     let Category = response.map((v) => ({ id: v.id, name: v.cat_name }));
        //     setCategory(Category);
        // }).catch((error) => console.log(error));
    }
    const togglePerformedTypeMenu = () => {
        setIsPerformedMenuOpen(!isperformedMenuOpen)
    };


    //=========>this functions for Histopathology ====> 
    const HandleSetHistopathologyType = (v) => {
        setHistopathology(v.name);
        setIsHistopathologyMenuOpen(false);
    }
    const toggleHistopathologyTypeMenu = () => {
        setIsHistopathologyMenuOpen(!isHistopathologyMenuOpen)
    };

    //=========>this functions for LebRequest ====> 
    const HandleSetLebRequestType = (v) => {
        setLebRequest(v.name);
        setIsLebRequestMenuOpen(false);
    }
    const toggleLebRequestTypeMenu = () => {
        setIsLebRequestMenuOpen(!isLebRequestMenuOpen)
    };

     //=========>this functions for Measurements ====> 
     const HandleSetMeasurementsType = (v) => {
        setMeasurements(v.name);
        setIsMeasurementsMenuOpen(false);
    }
    const toggleMeasurementsTypeMenu = () => {
        setIsMeasurementsMenuOpen(!isLebRequestMenuOpen)
    };


    return (
        <>
            <View>
                <View style={style.inputContainer}>
                    <Text style={style.labels}>Necropsy ID  :</Text>
                    <TextInput style={style.inputstyle} autoCapitalize='none'></TextInput>
                </View>
                <View style={[styles.fieldBox]}>
                    <Text style={styles.labelName}>Necropsy Date : </Text>
                    <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }} onPress={() => { ShowNecropsyDatePicker("necropsydob") }}>
                        <Text style={styles.dateField}>{necropsydob.toDateString()}</Text>
                        <AntDesign name="calendar" color={Colors.primary} size={20} />
                    </TouchableOpacity>
                </View>
                <View style={[styles.fieldBox]}>
                    <Text style={styles.labelName}>Requested Date : </Text>
                    <TouchableOpacity activeOpacity={1} style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }} onPress={() => { ShowRequestedDatePicker("requesteddob") }}>
                        <Text style={styles.dateField}>{requesteddob.toDateString()}</Text>
                        <AntDesign name="calendar" color={Colors.primary} size={20} />
                    </TouchableOpacity>
                </View>
                <InputDropdown
                    label={"Requested By :"}
                    //  items={animalGroups}
                    isMandatory={true}
                    value={requeste}
                    isOpen={isRequesetedMenuOpen}
                    openAction={toggleRequestedTypeMenu}
                    closeAction={toggleRequestedTypeMenu}
                    setValue={HandleSetRequestedType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, requeste ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox
                    ]}
                />

                <InputDropdown
                    label={"Performed By :"}
                    // items={animalGroups}
                    isMandatory={true}
                    value={performed}
                    isOpen={isperformedMenuOpen}
                    openAction={togglePerformedTypeMenu}
                    closeAction={togglePerformedTypeMenu}
                    setValue={HandleSetPerformedType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, performed ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox
                    ]}
                />


                <InputDropdown
                    label={"Histopathology :"}
                    items={Configs.Histopathology}
                    //isMandatory={true}
                    value={histopathology}
                    isOpen={isHistopathologyMenuOpen}
                    openAction={toggleHistopathologyTypeMenu}
                    closeAction={toggleHistopathologyTypeMenu}
                    setValue={HandleSetHistopathologyType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, histopathology ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox
                    ]}
                />


                   <InputDropdown
                    label={"Lab Request :"}
                     items={Configs.LAB_REQUEST}
                    value={lebRequest}
                    isOpen={isLebRequestMenuOpen}
                    openAction={toggleLebRequestTypeMenu}
                    closeAction={toggleLebRequestTypeMenu}
                    setValue={HandleSetLebRequestType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, lebRequest ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox
                    ]}
                />

                   <InputDropdown
                    label={"Measurements :"}
                     items={Configs.Measurements}
                   // isMandatory={true}
                    value={measurements}
                    isOpen={isMeasurementsMenuOpen}
                    openAction={toggleMeasurementsTypeMenu}
                    closeAction={toggleMeasurementsTypeMenu}
                    setValue={HandleSetMeasurementsType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, measurements ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox
                    ]}
                />

                {/*    <InputDropdown
                    label={"Performed By :"}
                    // items={animalGroups}
                    isMandatory={true}
                    value={performed}
                    isOpen={isperformedMenuOpen}
                    openAction={togglePerformedTypeMenu}
                    closeAction={togglePerformedTypeMenu}
                    setValue={HandleSetPerformedType}
                    labelStyle={styles.labelName}
                    textFieldStyle={[styles.textfield, performed ? [styles.width50, { paddingLeft: 0 }] : null,]}
                    style={[
                        styles.fieldBox
                    ]}
                /> */}

                <View style={style.inputContainer}>
                    <Text style={style.labels}>Remarks  :</Text>
                    <TextInput style={style.inputstyle} autoCapitalize='none'></TextInput>
                </View>

            </View>
            <DateTimePickerModal
                mode={'date'}
                display={Platform.OS == 'ios' ? 'inline' : 'default'}
                isVisible={showNecropsyDate}
                onConfirm={handleConfirmNecropsyDate}
                onCancel={NecropsyHideDatePicker}
            />
            <DateTimePickerModal
                mode={'date'}
                display={Platform.OS == 'ios' ? 'inline' : 'default'}
                isVisible={showRequestedDate}
                onConfirm={handleConfirmRequestedDate}
                onCancel={RequestedHideDatePicker}
            />
        </>
    )
}
const style = StyleSheet.create({

    mainContainer: {
        position: "relative",
        bottom: 9,
        left: 0,
        width: "auto",
        marginVertical: 10,
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
        paddingLeft: 130,
        fontWeight: "bold",
        width: "100%",
        borderWidth: 0.8,
        borderColor: "#ddd",
    },
})

export default Necropsy;