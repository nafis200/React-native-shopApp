

import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
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
      <View style={styles.circleSizeContainer}>
          <View style={styles.circle} />
           
           <View style={styles.sizeCircle}>
                <Text style={{color:'black',fontSize:18}}>L</Text>
           </View>

           </View>
           </View>
      <TouchableOpacity>
      <FontAwesome6 name={"trash"} color={"#F68CB5"} size={25} />
      </TouchableOpacity>
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
      flex: 1,
      marginHorizontal:10  
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
    },
    circle:{
        height: 32,
        width: 32, 
        borderRadius: 20, 
        backgroundColor:'#7094C1'
    },
    circleSizeContainer:{
        flexDirection: 'row',
        
    },
    sizeCircle:{
        backgroundColor:'white',
        height:32,
        width:32,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginLeft:10
    }
})