
import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'

const HomeScreen = () => {
  return (
    <View>
      <Text style={{color:'black'}}>HomeScreen</Text>
      <Icon name={"facebook"}  color="#3b5998"
      size={35}
      />
      <AntDesign name={'arrowright'} color="black"
      size={35}
      ></AntDesign>
    </View>
  )
}

export default HomeScreen