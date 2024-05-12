import React from 'react';

// screens
import Login from './src/screens/Login';
import Messaging from './src/screens/Messaging';
import Chat from './src/screens/Chat';

// react navigation configuration
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


// implimentation of navigation routes
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
          name='Login' 
          component={Login} 
          options={{ headerShown:false }} 
        />
        <Stack.Screen 
          name='Chat' 
          component={ Chat} 
          options={{ title:'Chats', headerShown:false }}
        />
        <Stack.Screen
          name='Messaging'
          component={Messaging}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;