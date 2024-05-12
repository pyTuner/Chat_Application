import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "../../utils/styles";


const Model = ({ setVisible }) => {
    const [ groupName, setGroupName ] = useState('');

    // close the Modal component
    const closeModal = () => setVisible(false);

    const handleCreateRoom = () => {
        console.log({ groupName });
        closeModal();
    }

    return (
        <View style={ styles.modalContainer } >
            <Text style={ styles.modalsubheading}>Enter your Group name</Text>
            <TextInput 
                style={ styles.modalinput }
                placeholder="Group name"
                onChangeText={(value) => setGroupName(value)}
            />

            <View style={ styles.modalbuttonContainer } >
                <Pressable 
                    style={ styles.modalbutton } 
                    onPress={handleCreateRoom} 
                >
                    <Text style={ styles.modaltext }>CREATE</Text>
                </Pressable>
                <Pressable 
                    style={[ styles.modalbutton, { backgroundColor:'#E14D2A' }]}
                    onPress={closeModal}
                 >
                    <Text style={styles.modaltext}>CANCEL</Text>
                 </Pressable>
            </View>
        </View>
    )
}

export default Model;