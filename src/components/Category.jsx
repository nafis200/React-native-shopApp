
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = ({item,selectedCategory,setSelectedCategory}) => {
 
  return (
    <View>
      <Text style={styles.categoryText}>{item}</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    categoryText:{
        fontSize:16,
        fontWeight:"600",
        backgroundColor:'#E96E6E',
        color:'white',
        padding:20,
        textAlign:'center',
        borderRadius:16,
        marginHorizontal:10
    }
})