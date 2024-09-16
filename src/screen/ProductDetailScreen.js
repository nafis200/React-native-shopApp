
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
const ImageUrl = "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png"

const ProductDetailScreen = () => {

  return (
    <LinearGradient colors={['#FDF0F3','#FFFBFC']} style={styles.container} >
       
      <View style={styles.HeaderContainer}>
         <Header/>
      </View> 
      <Image source={{uri: ImageUrl}} style={styles.coverimage} />

      <View style={styles.contentContainer}>
         <Text style={[styles.title,{color:'black'}]}>Winter Coat</Text>
         <Text style={[styles.price,{color:'black'}]}>$35.00</Text>
      </View>

    </LinearGradient>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    HeaderContainer:{
        padding:20
    },
    coverimage:{
        width:"100%",
        height:420
    },
    contentContainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginHorizontal:20,
        marginVertical:20
    },
    title:{
        fontSize:20,
        color:'#444444'
    },
    price:{
        fontSize:20,
        color:'#4D4C4C'
    }
})