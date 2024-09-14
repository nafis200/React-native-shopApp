
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProductCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Image source={require("../assets/girl2.png")} style={styles.coverImage} />
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
    }
})