
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
        <View style={styles.priceContainer}>

        <View style={styles.priceAndTitle}>
        <Text style={[{color:'black'},styles.text]}>Total: </Text>
        <Text style={[{color:'black'},styles.text]}>$119.7 </Text>
        </View>

        <View style={styles.priceAndTitle}>  
        <Text style={[{color:'black'},styles.text]}>Shipping: </Text>
        <Text style={[{color:'black'},styles.text]}>$0.0: </Text>
        </View>

        </View>
        <View style={styles.divider} />
          
        <View style={styles.priceAndTitle}>  
        <Text style={[{color:'black'},styles.text]}>Grand Total: </Text>
        <Text style={[{color:'black',fontWeight:'700'},styles.text]}>$0.0: </Text>
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
    },
    priceContainer:{
        marginTop:30
    },
    priceAndTitle:{
        flexDirection: "row",
        justifyContent:'space-between',
        marginHorizontal:20
    },
    text:{
        fontSize:18,
    },
    divider:{
        borderWidth: 2,
        borderColor:"#C0C0C0",
        marginTop:5,
        marginBottom:5
    }
})