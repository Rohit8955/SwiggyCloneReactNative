import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { increaseQuantity,decreaseQuantity } from '../store/CartSlice';
const Cartitemdetails = (props) => {
    const dispatch = useDispatch();
  return (
    <><View className='flex-row items-center justify-around' style={props.index>0?style.marginclass:null}>
      <Text className='w-[120px] font-[600] text-[15px]'>{props.item.name}</Text>
      <View className='border-[1px] border-gray-400 w-[67px] h-[26px] rounded-[6px] flex-row items-center justify-evenly'>
        <TouchableOpacity onPress={()=>dispatch(decreaseQuantity(props.item))}><Entypo name="minus" size={20} color="green" /></TouchableOpacity>
        <Text className='text-[16px] text-green-700 font-[600] '>{props.item.quantity}</Text>
        <TouchableOpacity onPress={()=>dispatch(increaseQuantity(props.item))}><Entypo name="plus" size={20} color="green" /></TouchableOpacity>
      </View>
      <Text className='text-[15px] w-[50px] font-[600] '>₹{props.item.price*props.item.quantity}</Text>
    </View>
    </>
  )
}

export default Cartitemdetails

const style = StyleSheet.create({
    marginclass:{
        marginTop: 12
    }
})