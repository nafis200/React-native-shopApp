
import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
// '#FDF0F3','#FFFBFC'
const HomeScreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3','#FFFBFC']} style={styles.conatiner}>
       <Header/>
       <Text style={styles.matchText}>Match Your Style</Text>
       <View style={styles.inputcontainer}>
           <View>
           <Fontisto name={"search"} size={26} color={"#C0C0C0"}
           />
           </View>
           <TextInput style={styles.textinput}/>
       </View>
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
    },
    textinput:{
        flex:1,
        borderWidth:1,
    }
})

export default HomeScreen