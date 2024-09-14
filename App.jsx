
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const HomeScreen = ()=>{
     <Text style={{color:'black'}}>Hellow</Text>
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Reorder" component={HomeScreen} />
        <Tab.Screen name="Cart" component={HomeScreen} />
        <Tab.Screen name="Account" component={HomeScreen} />
    
      </Tab.Navigator>

    </NavigationContainer>
  )
}

export default App