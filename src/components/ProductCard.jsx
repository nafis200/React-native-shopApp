
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const ProductCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Image source={require("../assets/girl2.png")} style={styles.coverImage} />
      <View style={styles.content}>
      <Text style={styles.title}>Jackson Jeans</Text>
      <Text style={styles.price}>$45</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    coverImage:{
        height:256,
        width:"100%",
        borderRadius:20,
        marginVertical:10,
        
    },
    container:{
        flex:1,
        marginTop:20
    },
    title:{
        color:'black',
        fontSize:18, 
        fontWeight:'600'
    },
    price:{
        fontSize:18,
        color:"#9C9C9C",
        fontWeight:'600'
    },
    content:{
        paddingLeft:15
    }
})