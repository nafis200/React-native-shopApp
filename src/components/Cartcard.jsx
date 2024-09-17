

import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
const ImageUrl =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png";
const Cartcard = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.coverImage} source={{uri: ImageUrl}} />
      
      <View style={styles.cardContent}>       
      <Text style={[{color:'black'},styles.title]}>Jacket Jeans</Text>
      <Text style={[{color:'black'},styles.price]}>$39.5</Text>
      </View>
      <Text style={{color:'black'}}>CartCard</Text>
      <FontAwesome6 name={"trash"} color={"#F68CB5"} size={25} />
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
    },
    title:{
       fontSize: 18,
       color:"#444444",
       fontWeight:"500"
    },
    price:{
        color: "#797979",
        marginVertical:10,
        fontSize:18
    }
})