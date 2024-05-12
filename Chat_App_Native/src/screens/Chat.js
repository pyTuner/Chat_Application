import { React, useState } from 'react';
import { View, Text, SafeAreaView, Pressable, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import ChatComponent from '../components/ChatComponent';
import Modal from '../components/Modal';
import { styles } from '../../utils/styles';

const Chat = () => {

    // dummy rooms
    const rooms = [
        {
            id:'1',
            name:'Collage Group',
            message: [
                {
                    id:'1a',
                    text:'Hey, whats up',
                    time:'01:12',
                    user:'Omkar'
                },
                {
                    id:'1b',
                    text:'Just breathing in, out',
                    time:'01:12',
                    user:'Aditya'
                },
                {
                    id:'1c',
                    text:'LOL 😂',
                    time:'01:14',
                    user:'Makaranda'
                },
            ]
        },
        {
            id:'2',
            name: "Biker's Gang 🍻🏍️" ,
            message: [
                {
                    id:'2a',
                    text:'Is anybody up?',
                    time:'04:20',
                    user:'Tanesh'
                },
                {
                    id:'2b',
                    text:'yeah, just came from the bar🫨🥃🍾',
                    time:'04:22',
                    user:'Ravi'
                },
                {
                    id:'3c',
                    text:'Are you guys for real😳😆',
                    time:'01:14',
                    user:'Shreenidhi'
                },
            ]
        },
        
    ]
    
    const [ visible, setVisible ] = useState(false);

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