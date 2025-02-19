
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({item,selectedCategory,setSelectedCategory}) => {
 
  return (
    <TouchableOpacity onPress={()=>setSelectedCategory(item)}>
      <Text style={[styles.categoryText, selectedCategory===item && {color:'#FFFFFF',backgroundColor:'#E96E6E'}]}>{item}</Text>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    categoryText:{
        fontSize:16,
        fontWeight:"600",
        // backgroundColor:'#E96E6E',
        backgroundColor:'#938F8F',
        color:'white',
        padding:20,
        textAlign:'center',
        borderRadius:16,
        marginHorizontal:10
    }
})