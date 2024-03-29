import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Screens/Home';
import AnotherPage from '../Components/AnotherPage';
import ChangeAddress from '../Components/ChangeAddress';
import { createStackNavigator } from '@react-navigation/stack';
import HotelsItems from '../Components/HotelsItems';
import OrderScreen from '../Screens/OrderScreen';
import LoadingScreen from '../Screens/LoadingScreen';
import DeleiveryScreen from '../Screens/DeleiveryScreen';
const Stack = createStackNavigator();
const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='AnotherPage' component={AnotherPage}/>
        <Stack.Screen name='ChangeAddress' component={ChangeAddress}/>
        <Stack.Screen name='HotelsItems' component={HotelsItems}/>
        <Stack.Screen name='OrderScreen' component={OrderScreen}/>
        <Stack.Screen name='LoadingScreen' component={LoadingScreen}/>
        <Stack.Screen name='DeleiveryScreen' component={DeleiveryScreen}/>
    </Stack.Navigator>
  )
}

export default HomeNavigator