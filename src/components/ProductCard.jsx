
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
const ProductCard = ({isLiked,setIsLiked}) => {
   return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Image source={require("../assets/girl2.png")} style={styles.coverImage} />
      <View style={styles.content}>
      <Text style={styles.title}>Jackson Jeans</Text>
      <Text style={styles.price}>$45</Text>
      </View>
      
      <Pressable
  onPress={() => {
     
  }}
  style={styles.likeContainer}
>
  {isLiked ? (
    <AntDesign name={"heart"} size={20} color={"red"} />
  ) : (
    <AntDesign name={"hearto"} size={20} color={"red"} />
  )}
</Pressable>

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
        marginTop:20,
        position:'relative'
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
    },
    likeContainer:{
      height:34,
      width:34, 
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:17,
      position:'absolute',
      top:20,
      right:10, 
    }
})