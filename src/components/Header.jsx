
import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Header = ({isCart}) => {
  return (
    <View style={styles.container}>
    <View style={styles.appIconContainer}>
      {
          isCart ? <Ionicons name={"chevron-back"} color={"red"} size={30} /> : <Image source={require("../assets/apps.png")} style={styles.appIcon} />
      }
    </View>
     {
       isCart && <Text style={[{color:'black'},styles.mycart]}>My cart</Text>
     }
     <Image source={require("../assets/Ellipse2.png")} style={styles.appIcon} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    appIcon:{
        height:40,
        width:40
    },
    appIconContainer:{
        backgroundColor:'#FFFFFF',
        height:44,
        width:44,
        borderRadius:22,
        justifyContent:'center',
        alignItems:'center',
    
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
        
    },
    mycart:{
       fontSize: 28,
       
    }
})