

import { View, Text, TextInput, FlatList,ScrollView,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json'
// '#FDF0F3','#FFFBFC'

const categories = ['Tranding Now','All','New','Mens','Womens']

const HomeScreen = () => {
   const [products,setProducts] = useState(data.products)
   
   const [selectedCategory,setSelectedCategory] = useState('All')

   const handleLiked =(item)=>{
      const newProducts = products.map((prod)=>{
            if(prod.id === item.id){
               return{
                   ...prod,
                   isLiked:true
               }
            }
            return prod
      })
      setProducts(newProducts)
   }

  return (
    
     <SafeAreaView>
      <View>
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
       keyExtractor={(item)=>item.id}
       />
       {/* <Category/> */}
       {/* <View style={{flexDirection:'row',gap:10}}>
         <ProductCard/>
         <ProductCard/>
       </View> */}
       <FlatList 
        numColumns={2} 
        data={products} 
        renderItem={({ item,index }) => <ProductCard item={item} image = {item.image} handleLiked={handleLiked}  /> } 
        
/>

       {/* <View style={{flexDirection:'row',gap:10}}>
         <ProductCard/>
         <ProductCard/>
       </View> */}
     </LinearGradient>
      </View>
     </SafeAreaView>

  )
}

const styles = StyleSheet.create({
   conatiner:{
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