import { Pressable, Text, View } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../utils/styles';
import Icon from 'react-native-vector-icons/Ionicons'

const ChatComponent = ({ item }) => {
    const navigation = useNavigation();
    const [ message, setMessage ] = useState({});

    // retrives the last message in the array from the 'item' prop.
    useLayoutEffect(() => {
        setMessage(item.message[item.message.length - 1]);
    }, []);

    // navigates to the messaging screen
    const handleNavigation = () => {
        navigation.navigate('Messaging', {
            id: item.id,
            name: item.name,
        });
    };

    return (
   <Pressable style={styles.cchat} onPress={ handleNavigation } >
        <Icon 
            name='person-circle-outline'
            size={45}
            color='black'
            style={ styles.cavatar }
        />
        <View style={ styles.crightContainer} >
            <View>
                <Text style={ styles.cusername} >{ item.name }</Text>
                <Text style= { styles.cmessage } >
                    {message?.text ?message.text: `Say Hello, to ${item.name}`}
                </Text>
            </View>
            <View>
                <Text style={styles.ctime}>
                    {message?.time ? message.time : 'now'}
                </Text>
            </View>
        </View>
   </Pressable>
  )
}

export default ChatComponent;