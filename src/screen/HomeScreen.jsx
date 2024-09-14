
import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
// '#FDF0F3','#FFFBFC'
const HomeScreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3','#FFFBFC']} style={styles.conatiner}>
       <Header/>
     </LinearGradient>
  )
}

const styles = StyleSheet.create({
   conatiner:{
      flex:1,
   },
   texts:{
    color:'black'
   }
})

export default HomeScreen