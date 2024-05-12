import AsyncStorage from '@react-native-async-storage/async-storage';
import { React, useLayoutEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Pressable } from 'react-native';
import { styles } from '../../utils/styles';
import MessageComponent from '../components/MessageComponent';

const Messaging = ({ route, navigation }) => {
    const [chatMessages, setChatMessages ] = useState([
        {
            id:'1',
            text:'Hey, whats up',
            time:'01:12',
            user:'Omkar'
        },
        {
            id:2,
            text:'Just breathing in, out',
            time:'01:12',
            user:'Aditya'
        },
        {
            id:3,
            text:'LOL 😂',
            time:'01:14',
            user:'Makaranda'
        }
    ]);
    const [ message, setMessage ] = useState('');
    const [ user, setUser ] = useState('');

    // access chat room name, id
    const { name, id } = route.params;

    // fetch username from async-storage
    const getUsername = async () => {
        try {
            const value = await AsyncStorage.getItem('username');
            if (value !== null ) {
                setUser(value);
            }
        } catch (error) {
            console.error('Error while loading username!');
        }
    };

    // set header title to the chatroom.
    useLayoutEffect(() => {
        navigation.setOptions({ title: name });
        getUsername();
    }, []);

    /*
        get the time when the user sends a message, then console the
        username, message, timestamp 
    */
   const handleNewMessage = () => {
    const hour = 
        new Date().getTime() < 10
            ? `0${new Date().getHours()}`
            : `${new Date().getMinutes()}`;
    const mins = 
        new Date().getMinutes() < 10
            ? `0${new Date().getMinutes()}`
            : `${new Date().getMinutes()}`;

    console.log({
        message,
        user,
        timestamp: { hour, mins }
    })
   }

    return (
        <View style={ styles.messagingscreen }>
            <View 
                style={[
                    styles.messagingscreen,
                    { paddingVertical: 15, paddingHorizontal: 10 },
                ]}
            >
                { chatMessages && chatMessages[0] ? (
                    <FlatList
                        data={ chatMessages }
                        renderItem={({ item }) => (
                            <MessageComponent item={item} user={user} />
                        )}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    ''
                )}
            </View>
            <View style={styles.messaginginputContainer} >
                <TextInput 
                    style={styles.messaginginput}
                    onChangeText={(value) => setMessage(value)}
                />
                <Pressable 
                    style={styles.messagingbuttonContainer}
                    onPress={handleNewMessage}
                >
                    <View>
                        <Text style={{ color:'#f2f0f1', fontSize:20 }}>SEND</Text>
                    </View>
                </Pressable>


            </View>
        </View>
    )
}

export default Messaging;