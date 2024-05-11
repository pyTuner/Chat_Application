import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>App component</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    mainContainer: {
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        // width:'100%',
        borderWidth:2
    }
})

export default App;