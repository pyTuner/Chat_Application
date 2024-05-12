import { React, useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, SafeAreaView, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import ChatComponent from '../components/ChatComponent';
import Modal from '../components/Modal';
import { styles } from '../../utils/styles';
import socket from '../../utils/socket';

const Chat = () => {

    // dummy rooms
    const [rooms, setRooms] = useState([]);
    const [ visible, setVisible ] = useState(false);
    
    // Executes when component mounts
    useLayoutEffect(() => {
        // console.log('hit')
        const fetchGroups = () => {
            fetch('http://192.168.0.166:4000/api')
                .then((res) => res.json())
                .then((data) => setRooms(data))
                .catch((error) => console.error(error));
        }
        fetchGroups();
    }, []);


    // Executes whenever there is new trigger from the backend
    useEffect(() => {
        socket.on('roomsList', (rooms) => {
            setRooms(rooms);
        } )
    }, [socket])

    return (
        <SafeAreaView style={ styles.chatscreen }>
            <View style={ styles.chattopContainer }>
                <View style={ styles.chatheader }>
                    <Text style={ styles.chatheading}>Chats</Text>

                    <Pressable onPress={ () => setVisible(true)} >
                        <Icon name='edit' size={24} color='green' />
                    </Pressable>
                </View>
            </View>
            <View style={styles.chatlistContainer}>
                {
                    rooms.length > 0 ? (
                        <FlatList 
                            data={ rooms }
                            renderItem={ 
                                ({item}) => <ChatComponent item={item} /> 
                            }
                            keyExtractor={(item) => item.id}
                        />
                    ) : (
                        <View style={ styles.chatemptyContainer} >
                            <Text style={styles.chatemptyText}>No rooms created!</Text>
                            <Text>Click the icon above to create a Chat room</Text>
                        </View>
                    )
                }
            </View>
            {visible ? <Modal setVisible={setVisible} /> : ''}
        </SafeAreaView>
    )
}

export default Chat;