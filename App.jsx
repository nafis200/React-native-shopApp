
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailScreen from './src/screen/ProductDetailScreen';
import Cartscreen from './src/screen/Cartscreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const HomeScreen = ()=>{
//      <Text style={{color:'black'}}>Hellow</Text>
// }

const MyHomestack =()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name="HOME" component={HomeScreen} />
    <Stack.Screen name="Products_detail" component={ProductDetailScreen} />
  </Stack.Navigator>
  )
}



const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
    headerShown: false,
    // tabBarShowLabel:false
    tabBarActiveTintColor:'red'
    }}>
        <Tab.Screen name="HomeStack" component={MyHomestack} options={{
           tabBarIcon: ({color,size,focused})=>{
             return <Entypo name={"home"} 
              color={color} size={size}
             />
           }
        }} />
        <Tab.Screen name="Reorder" component={HomeScreen}  options={{
           tabBarIcon: ({color,size,focused})=>{
             return <MaterialIcons name={"reorder"} 
              color={color} size={size}
             />
           }
        }}  />
        <Tab.Screen name="Cart" component={Cartscreen}  options={{
           tabBarIcon: ({color,size,focused})=>{
             return <MaterialCommunityIcons name={"cart"} 
              color={color} size={size}
             />
           }
        }}  />
        <Tab.Screen name="Account" component={HomeScreen} options={{
           tabBarIcon:({color,size,focused})=>{
              return <FontAwesome6 name={'user'} color={color} size={size} />
           }
        }} />
    
      </Tab.Navigator>

    </NavigationContainer>
  )
}

export default App