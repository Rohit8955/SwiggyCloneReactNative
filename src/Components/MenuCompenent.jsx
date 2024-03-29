import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import img from '../assets/q7.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { addtocart,increaseQuantity,decreaseQuantity } from '../store/CartSlice';
const MenuCompenent = ({food}) => {
    const dispatch = useDispatch();
    const data = food;

    const handleaddtocart = (food)=>{
      dispatch(addtocart(food));
    }
    const cartdata = useSelector((state)=>state.cart.cart);
    const ispresentfood = cartdata.find((item)=>item.id===food.id)

  return (
    <>
    <View className='flex-row justify-between px-3 mt-7'>
      <View>
        <Text className='text-[16px] font-[500]'>{data.name}</Text>
        <Text className='text-[16px] font-[500]'>₹{data.price}</Text>
        <View className='flex-row gap-1'>
            {
                [0,0,0,0].map((elem,idx)=>{
                    return <FontAwesome key={idx} name="star" size={20} color="orange" />
                })
            }
        </View>
        <Text className='w-[150px] text-gray-500 font-[500] text-[14px] '>{data.description.length>35?data.description.slice(0,35) + "...":data.description}</Text>
      </View>
      <View>
        <Image style={{height:120,width:120,resizeMode:'cover',borderRadius:10}} source={data.image}/>
        

        {
          ispresentfood?
          (<View className='bg-white w-[70px] py-[6px] rounded-[5px] absolute bottom-0 left-7 flex items-center'><View className='flex-row items-center gap-2'>
            <TouchableOpacity activeOpacity={0.7} onPress={()=>dispatch(decreaseQuantity(food))}><Entypo name="minus" size={20} color="green" /></TouchableOpacity>
            <Text className='text-green-700 font-[500] text-[16px] '>{ispresentfood.quantity}</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={()=>dispatch(increaseQuantity(food))}><Entypo name="plus" size={20} color="green" /></TouchableOpacity>
        </View></View>):(
          <TouchableOpacity onPress={()=>handleaddtocart(food)} activeOpacity={0.6} className='absolute bottom-[0px] left-7'><Text className='bg-white text-[16px] text-green-700 font-[500] px-4 py-[5px] rounded-md'>ADD</Text></TouchableOpacity>
        )
        }

      </View>
    </View>
    </>
  )
}

export default MenuCompenent