
import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Category from '../components/Category';
// '#FDF0F3','#FFFBFC'

const categories = ['Tranding Now','All','New','Mens','Womens']

const HomeScreen = () => {
   const [selectedCategory,setSelectedCategory] = useState(null)
  return (
    <LinearGradient colors={['#FDF0F3','#FFFBFC']} style={styles.conatiner}>
       <Header/>
       <Text style={styles.matchText}>Match Your Style</Text>
       <View style={styles.inputcontainer}>
           <View style={styles.iconContainer}>
           <Fontisto name={"search"} size={26} color={"#C0C0C0"}
           />
           </View>
           <TextInput style={styles.textinput}
           placeholder="Search"
           placeholderTextColor="#C0C0C0"
           />
       </View>
       <FlatList data={categories} renderItem={({item}) => <Category item={item} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />} keyExtractor={(item)=>item}  horizontal={true}
       showsHorizontalScrollIndicator={false}
       />
       {/* <Category/> */}
     </LinearGradient>
  )
}

const styles = StyleSheet.create({
   conatiner:{
      flex:1,
      padding:20,
  
   },
   texts:{
    color:'black'
   },
   matchText:{
     fontSize:28,
     color:'black',
     marginTop:20
   },
   inputcontainer:{
      backgroundColor:'#FFFFFF',
      height:48,
      borderRadius:12,
      alignItems:'center',
      flexDirection:'row',
      marginVertical:20
    },
    textinput:{
        flex:1,
        color:'black'
    },
    iconContainer:{
       marginHorizontal:20,
    }
})

export default HomeScreen