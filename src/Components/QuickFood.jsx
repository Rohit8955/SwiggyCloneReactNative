import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import dataquickfood from '../data/dataquickfood';
import { ScrollView } from 'react-native-gesture-handler';
const QuickFood = () => {
    const data = dataquickfood;
  return (
    <View className='mt-3'>
      <View>
        <Text className='text-[18px] font-[600] px-4 '>Get it Quickly</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-2'>
           <View  className='flex-row gap-[10px] px-[10px]'>
            {
                data.map((elem,idx)=>{
                    return (
                        <TouchableOpacity activeOpacity={0.8} className='h-[215px] bg-white rounded-md' key={idx}>
                            <View>
                                <Image style={{height:160, aspectRatio:6/6, resizeMode:'cover', borderTopLeftRadius:6,borderTopRightRadius:6}} source={elem.image}/>
                                <Text className='absolute text-[22px] font-bold left-2 bottom-2 text-white'>{elem.offer} OFF</Text>
                            </View>
                            <View className='px-1'>
                                <Text className='text-[16px] font-[600]'>{elem.name}</Text>
                                <View className='flex-row items-center gap-[2px] mt-[1px]'>
                                    <MaterialIcons name="stars" size={24} color="green" />
                                    <Text className='font-[600]'>{elem.rating}</Text>
                                    <Entypo name="dot-single" size={24} color="black" />
                                    <Text className='font-[600]'>{elem.time} mins</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
           </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default QuickFood