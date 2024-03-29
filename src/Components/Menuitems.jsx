import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Menuitems = ({data}) => {
    const {navigate} = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigate('HotelsItems',{
      name:data.name,
      image: data.image,
      rating: data.rating,
      time: data.time,
      adress:data.adress,
      cost_for_two:data.cost_for_two,
      cuisines:data.cuisines,
      menu: data.menu
    })} activeOpacity={0.8}>
      <View className=' h-[170px] w-full flex-row gap-1 mt-3 px-[10px]'>
        <View>
            <Image style={{height:170,width:140, resizeMode:'cover',borderRadius:7}} source={data.image}/>
            <TouchableOpacity className='absolute top-2 right-2'><AntDesign name="hearto" size={20} color="white" /></TouchableOpacity>
        </View>
        
        <View className='flex gap-[6px]'>
            <Text className='text-[18px] font-[600]'>{data.name}</Text>
            
            <View><View className='flex-row gap-[4px] items-center'>
                <MaterialIcons name="stars" size={22} color="green" />
                <Text className='font-[600] text-gray-600'>{data.rating}</Text>
                <Entypo name="dot-single" size={24} color="gray" />
                <Text className='font-[600] text-gray-600'>{data.time} mins</Text>
            </View></View>
            <Text className='font-[600] text-gray-600 text-[14px] '>{data.adress}</Text>
            <View><View className='flex-row items-center gap-[5px]'>
                <FontAwesome5 name="rupee-sign" size={14} color="gray" />
                <Text className='text-[16px] text-gray-700 font-[600]'>{data.cost_for_two} for two</Text>
            </View></View>
            <View><View className='flex-row items-center gap-[5px]'>
                <MaterialCommunityIcons name="bike-fast" size={20} color="black" />
                <Text className='text-[14px] text-gray-600 font-[600]   '>FREE DELIEVERY</Text>
            </View></View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Menuitems