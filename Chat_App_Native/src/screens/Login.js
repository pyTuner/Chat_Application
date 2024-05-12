import { React, useState } from 'react';
import { Alert, Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import { styles } from '../../utils/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {

    const [ username, setUsername ] = useState('');

    // asyncstore machanisum and navigation
    const storeUsername = async () => {
        try {
            // async function saves the username to AsyncStorage
            // redirecting to the Chat Page

            await AsyncStorage.setItem('username', username)
            navigation.navigate('Chat');
        } catch (error) {
            Alert.alert('Error! While saving username');
        }
    }

    // SignIn Event
    const handleSignIn = () => {
        if (username.trim()) {
            // console.log(username);
            storeUsername();
        } else {
            Alert.alert('Username is required!');
        }
    }
    return (
       <SafeAreaView style={ styles.loginscreen } >
            <View style={ styles.loginscreen } >
                <Text style={ styles.loginheading } >Sign In</Text>
                <View style={ styles.logininputContainer} >
                    <TextInput
                        autoCorrect={false}
                        placeholder='Enter your username'
                        style={styles.logininput}
                        onChangeText={(value) => setUsername(value)}
                    />
                </View>
                <Pressable onPress={ handleSignIn } style={ styles.loginbutton }>
                    <View>
                        <Text style={ styles.loginbuttonText } >Get Started</Text>
                    </View>
                </Pressable> 
            </View>  
       </SafeAreaView>
    )
}

export default Login;
