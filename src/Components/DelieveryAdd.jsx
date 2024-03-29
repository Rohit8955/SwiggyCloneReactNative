import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import img from '../assets/profile.jpeg'
import { useNavigation } from '@react-navigation/native';
const DelieveryAdd = () => {
    const {navigate} = useNavigation();
  return (
    <View>
      <View>
        <View className='flex-row items-center gap-[6px] px-4'>
            <Text className='text-[18px] text-orange-400 font-[600] '>Deliever to</Text>
            <TouchableOpacity onPress={()=>navigate('ChangeAddress')}><Entypo name="chevron-down" size={26} color="orange" /></TouchableOpacity>
        </View>
        <View className='flex-row items-center justify-between px-4 mt-2'>

            <View className='flex gap-1'>
                <Text className='text-[17px] font-[600] '>904 Oak Ave</Text>
                <Text className='text-[17px] font-[600] '>Brooklyn, New York</Text>
            </View>

            <TouchableOpacity><Image className='h-[50px] w-[50px] rounded-[25px] ' source={img}/></TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

export default DelieveryAdd