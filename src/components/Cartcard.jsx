

import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
const ImageUrl =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png";
const Cartcard = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.coverImage} source={{uri: ImageUrl}} />
      
      <View style={styles.cardContent}>       
      <Text style={[{color:'black'}]}>Jacket Jeans</Text>
      <Text style={[{color:'black'}]}>$39.5</Text>
      </View>
      <Text style={{color:'black'}}>CartCard</Text>
    </View>
  )
}

export default Cartcard

const styles = StyleSheet.create({
    coverImage:{
        height: 125, 
        width:"25%"
    },
    container:{
         marginVertical:10,
         flexDirection:'row'
    },
    cardContent:{
      flex: 1    
    }
})