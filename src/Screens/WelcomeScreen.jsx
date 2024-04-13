import {  Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import img from '../assets/q11.jpg'
import { useNavigation } from '@react-navigation/native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
const WelcomeScreen = () => {
    const navigate = useNavigation();
    const ring1padding = useSharedValue(0)
    const ring2padding = useSharedValue(0)
    useEffect(()=>{
        ring1padding.value = 0;
        ring2padding.value = 0;
        setTimeout(() => ring1padding.value = withSpring(ring1padding.value+32), 100);
        setTimeout(() => ring1padding.value = withSpring(ring2padding.value+40), 300);
        setTimeout(()=>{
            navigate.replace('LoginScreen');
        },3000)
    },[])
  return (
    <View className='flex-1 justify-center items-center bg-amber-500'>
      <StatusBar style='light'/>
      <Animated.View className='bg-white/20 rounded-full' style={{padding:ring1padding}}>
        <Animated.View className='bg-white/20 rounded-full' style={{padding:ring2padding}}>
            <Image className='h-[120px] w-[120px] rounded-full' style={{resizeMode:'cover'}} source={require('../assets/q10.jpg')}/>
        </Animated.View>
      </Animated.View>

      <View className='flex items-center mt-3'>
        <Text className='text-[24px] text-white font-bold'>Foody</Text>
        <Text className='text-white font-[500] text-[17px]'>Food is always right!</Text>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})