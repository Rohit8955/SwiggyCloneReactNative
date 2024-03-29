import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MenuCompenent from './MenuCompenent';
const FoodItem = ({item}) => {
    const data = [item];
    const [state,setstate] = useState(['Recommended']);
    const handlestate = (name)=>{
      if(state.includes(name)){
        const a  = [...state]
        const arr = a.filter((title)=>{
          return title !== name
        })
        setstate(arr)
      }
      else{
        setstate(state => [...state,name]);
      }
    }
  return (
    <View className='mt-2 mb-2'>
      {
        data.map((elem,idx)=>(
          <View key={idx}>
            <TouchableOpacity onPress={()=>handlestate(elem.name)} activeOpacity={0.5} className='flex-row items-center justify-between px-3'>
              <Text className='text-[18px] font-[600] '>{elem.name} ({elem.items.length})</Text>
              { !state.includes(elem.name)?<Ionicons name="chevron-forward" size={24} color="black" /> :<AntDesign name="down" size={21} color="black" />}
            </TouchableOpacity>
            {
              state.includes(elem.name)?(
                <View className=''>
                  {
                    elem.items.map((food,index)=>(
                      <MenuCompenent key={index} food={food}/>
                    ))
                  }
                </View>
              ):null
            }
          </View>
        ))
      }
    </View>
  )
}

export default FoodItem