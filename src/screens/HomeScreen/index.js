import { View, Text } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  const signOut = () => {
    Auth.signOut()
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text
      onPress={signOut}
      style={{
        width:'100%',
        textAlign: 'center',
        color:'red',
        marginTop:'auto',
        marginVertical:20,
        fontSize:20,
      }}
      >
        Sign Out
      </Text>
    </View>
  )
}

export default HomeScreen