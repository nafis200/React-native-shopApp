
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
const ImageUrl = "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png"

const sizes = ["S","M","L","XL"]

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

      <View style={styles.sizeContainer}>
      
       <Text style={[styles.sizetext,{color:'black'},styles.title]}>
        
        {
            sizes.map((size,index)=>{
                return(
                    <TouchableOpacity style={styles.sizeValueContainer} key={index}>
                        <Text style={[styles.title,styles.sizeValue]}>{size}</Text>
                    </TouchableOpacity>
                )
            })
        }

       </Text>
 
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
    },
    sizetext:{
       marginHorizontal:20
    },
    sizeContainer:{

        marginHorizontal:20,
    },
    sizeValueContainer:{
        height:36,
        width:36,
        borderRadius:18,
        backgroundColor:'white',
        rowGap:10,
        gap:10,
        
    },
    sizeValue:{
         fontSize:18,
         
    }
})