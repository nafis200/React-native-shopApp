
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import Cartcard from '../components/Cartcard'

const Cartscreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3','#FFFBFC']} style={styles.conatiner}>

        <View style={styles.headerContainer}>
        <Header isCart={true} />
        </View>
        <Cartcard/>
        <Cartcard/>
        <View>
         
        <View>
        <Text style={{color:'black'}}>Total: </Text>
        <Text style={{color:'black'}}>$119.7 </Text>
        </View>

        <View>  
        <Text style={{color:'black'}}>Shipping: </Text>
        <Text style={{color:'black'}}>$0.0: </Text>

        </View>

        </View>
    </LinearGradient>
  )
}

export default Cartscreen

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        padding: 15
    },
    headerContainer:{
       marginBottom:20,
    }
})