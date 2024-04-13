import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { addresschange } from '../store/ChangeAdd';
import { useDispatch } from 'react-redux';
const ChangeAddress = () => {
  const gobacknaviagte = useNavigation();
  const [query,setquery] = useState('');
  const dispatch = useDispatch();
  return (
    <ScrollView className='mt-[29px]'>
      <Text style={{borderColor:'gray',borderWidth:0.3, height:1}}/>
      <View className='flex-row items-center justify-between px-3 bg-white py-2'>
        <View className='flex-row items-center gap-2'>
          <TouchableOpacity onPress={()=>gobacknaviagte.goBack()}><Ionicons name="arrow-back-outline" size={24} color="black" /></TouchableOpacity>
          <TextInput onChangeText={(text)=>{setquery(text); dispatch(addresschange(query))}} className='text-[16px] w-[80%]' placeholder='Enter area, street name...'/>
        </View>
        <AntDesign name="search1" size={24} color="black" />
      </View>
      <Text style={{borderColor:'gray',borderWidth:0.3, height:0.1}}/>

      <View>
        <View className='bg-white h-screen mt-3'>
          <TouchableOpacity className='flex-row gap-4 items-center px-2 py-2'>
            <MaterialIcons name="location-searching" size={24} color="black" />
            <View className='w-[85%]'>
              <Text className='text-[16px] font-[500]'>Use Current Location</Text>
              <Text className='text-gray-400'>Using GPS</Text>
              <Text style={{borderColor:'gray',borderWidth:0.3, height:0.1,marginTop:16}}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default ChangeAddress