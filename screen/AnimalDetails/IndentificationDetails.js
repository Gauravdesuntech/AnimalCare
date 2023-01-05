// Created By gaurav shukla
// Created on 4/01/2023


import { StyleSheet, View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';

import { DatePicker } from "../../component";

const IdentificationDetail = () => {
    const [show, setShow] = useState(false);
    const [dob,setDob]=useState(new Date())
    const [dobSelected,setDobSelected]=useState(false)
    const [approxDOBSelected,setApproxDOBSelected]=useState(false)
    // const [sourceDate, setSourceDate] = useState(
    //     data.source_date !== null ?
    //         new Date(data.source_date) : new Date(),)

    const ShowDatePicker = () => {
        setShow(true)
    }

    onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || dob;
        setShow(false)
        setDob(currentDate)
        setDobSelected(true)
        setApproxDOBSelected(false)
    };

    // onChangeSourceDate = (event, selectedDate) => {
    //     const currentDate = selectedDate || this.state.dob;
    //     setSourceDate(currentDate)
    //     setDatePicker(false)
    // };


    return (

        <View style={styles.mainContainer}>

            {/* <View style={styles.inputContainer}>
                <Text style={styles.labels}>Date In :
                    <TouchableOpacity activeOpacity={1} style={[{ flexDirection: 'row', alignItems: 'center', width: '50%' }]} onPress={() => showDatePicker(datePicker) }>
                        <AntDesign name="calendar" color={Colors.primary} size={20} />
                    </TouchableOpacity>
                </Text>
                <TextInput style={styles.inputstyle} autoCapitalize='none'></TextInput>
            </View> */}

            <View style={styles.inputContainer}>
                <DatePicker
                    onPress={ShowDatePicker}
                    show={show}
                    onChange={onChangeDate}
                    mode={"date"}
                    Date={dob}
                />
                <Text style={styles.date_box}>Date IN :</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Entity ID :</Text>
                <TextInput style={styles.inputstyle} paddingHorizontal={110} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Class :</Text>
                <TextInput style={styles.inputstyle} paddingHorizontal={120} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Categroy :</Text>
                <TextInput style={styles.inputstyle} paddingHorizontal={150} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Sub Category :</Text>
                <TextInput style={styles.inputstyle} paddingHorizontal={110} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Common Name :</Text>
                <TextInput style={styles.inputstyle} paddingHorizontal={110} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Scientific Name :</Text>
                <TextInput style={styles.inputstyle} paddingHorizontal={110} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Entity Type :</Text>
                <TextInput style={styles.inputstyle} paddingHorizontal={110} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Collection Type :</Text>
                <TextInput style={styles.inputstyle} paddingHorizontal={110} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Sex :</Text>
                <TextInput style={styles.inputstyle} paddingHorizontal={110} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Hybrid :</Text>
                <TextInput style={styles.inputstyle} paddingHorizontal={110} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Given Name :</Text>
                <TextInput style={styles.inputstyle} paddingHorizontal={110} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Identifications :</Text>
                <TextInput style={styles.inputstyle} paddingHorizontal={110} autoCapitalize='none'></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}>Govt Reg # :</Text>
                <TextInput style={styles.inputstyle} paddingHorizontal={110} autoCapitalize='none'></TextInput>
            </View>
        </View>
        //     <DateTimePickerModal
        //     mode={'date'}
        //     display={Platform.OS == 'ios' ? 'inline' : 'default'}
        //     isVisible={this.state.show}
        //     onConfirm={this.handleConfirm}
        //     onCancel={this.hideDatePicker}
        //   />
    )
};

const styles = StyleSheet.create({

    mainContainer: {
        width: "auto",
        marginVertical: 1,
        borderColor: "black",
        alignItems: "baseline",
    },
    // mainBox: {
    //     height: "auto",
    //     width: "100%",
    //     backgroundColor: 'green',
    // },
    // mainHeading: {
    //     borderWidth:1,
    //     paddingHorizontal: 30,
    //     padding:20,
    //     fontSize: 21,
    //     color: "white"
    // },

    // second_Box: {
    //     width: "100%",
    //     borederWidth: 10,
    //     borderColor:"black",
    //     marginVertical: -1,
    //     paddingHorizontal:9,
    // },

    // identification_Box: {
    //     backgroundColor: "green",
    //     width:"45%",
    //     color:"white",
    //     borderRadius:3,
    //     padding:5,
    //     fontSize:13,
    //     fontWeight:"bold",
    //     paddingVertical:3,
    //     marginVertical:35,
    // },

    inputContainer: {
        width: "100%",
    },

    labels: {
        paddingHorizontal: 2,
        position: "absolute",
        top: -23,
        left: 10,
        fontSize: 20,
    },

    inputstyle: {
        position: "relative",
        top: -32,
        left: 0,
        padding: 8,
        paddingLeft: 80,
        fontWeight:"10%",
        width: "100%",
        borderWidth: 0.8,
        borderColor: "#ddd",
    },
    date_box:{
         position:"relative",
         top:-43,
         left:12,
         fontSize:19,
         fontWeight:"10%",
    },
})

export default IdentificationDetail;