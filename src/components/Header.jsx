
import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
    <View style={styles.appIconContainer}>
    <Image source={require("../assets/apps.png")} style={styles.appIcon} />
    </View>
    <Text style={{color:'black'}}>Headers</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    appIcon:{
        height:40,
        width:40,
    },
    appIconContainer:{
        backgroundColor:'#FFFFFF',
        height:44,
        width:44,
        borderRadius:22
    }
})