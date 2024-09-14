
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
const Tab = createBottomTabNavigator();

// const HomeScreen = ()=>{
//      <Text style={{color:'black'}}>Hellow</Text>
// }

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
    headerShown: false,
    // tabBarShowLabel:false
    tabBarActiveTintColor:'red'
    }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
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
        <Tab.Screen name="Cart" component={HomeScreen}  options={{
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