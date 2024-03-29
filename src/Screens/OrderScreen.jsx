import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import Cartitemdetails from '../Components/Cartitemdetails';
import { clearcart } from '../store/CartSlice';
const OrderScreen = () => {
    const {navigate} = useNavigation();
    const gobacknaviagte = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();
    const cartdata = useSelector((state)=>state.cart.cart);
    const amount = useSelector((state)=>state.cart.amount)
    const items = useSelector((state)=>state.cart.items);
  return (
    items>0 ?
    (<>
    <ScrollView showsVerticalScrollIndicator={false} className='mt-9 mb-[60px]'>
      <View className='px-2'>
        <View className='flex-row items-center'>
            <TouchableOpacity onPress={()=>gobacknaviagte.goBack()}><Ionicons name="arrow-back" size={24} color="black" /></TouchableOpacity>
            <Text className='text-[18px] font-[600] ml-2 '>{route.params.name}</Text>
        </View>

        <View className='flex items-center mt-3'><View className='w-[90%] bg-white rounded-[6px] flex-row items-center justify-between h-[37px] px-2'>
            <Text className='font-[500]'>Ordering for someone else?</Text>
            <TouchableOpacity><Text className='text-red-600 font-[600]'>Add Details</Text></TouchableOpacity>
        </View></View>

        <Text className='text-[16px] font-[600] mt-3 ml-3 '>Cart Items ({items})</Text>

        <View className='flex items-center mt-4'><View className='w-[90%] bg-white rounded-[6px] px-2 py-2'>
        <View className='flex'>
        {
            cartdata.map((elem,idx)=>{
                return <Cartitemdetails key={idx} index={idx} item={elem}/>
            })
        } 
        </View>
        </View></View>

        <Text className='text-[16px] font-[500] mt-3 ml-2 '>Delievery Instructions</Text>

        <View className='flex items-center mt-3'><View className='w-[90%] flex-row gap-[5px]'>
            <TouchableOpacity activeOpacity={0.6} className='bg-white p-2 w-[72px] rounded-[10px]'>
                <FontAwesome6 name="bell" size={22} color='gray' />
                <Text className='text-gray-600 font-[500]'>Avoid Ringing</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} className='bg-white p-2 w-[72px] rounded-[10px]'>
                <FontAwesome5 name="door-open" size={22} color="gray" />
                <Text className='text-gray-600 font-[500]'>Leave at the door</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} className='bg-white p-2 w-[73px] rounded-[10px]'>
                <FontAwesome5 name="directions" size={22} color="gray" />
                <Text className='text-gray-600 font-[500]'>Direction to reach</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} className='bg-white p-2 w-[72px] rounded-[10px]'>
                <Zocial name="call" size={22} color="gray" />
                <Text className='text-gray-600 font-[500]'>Avoid Calling</Text>
            </TouchableOpacity>
        </View></View>

        <Text className='text-[16px] font-[500] mt-3 ml-2 '>Billing Details</Text>

        <View className='w-full flex items-center mt-3'><View className='w-[90%] bg-white p-3 rounded-[6px]'> 
        <View className='flex-row items-center justify-between'>
            <Text className='font-[500] text-gray-500 text-[15px]'>Item Total</Text>
            <Text className='font-[500]  text-gray-500  text-[15px]'>₹{amount}</Text>
        </View>

        <View className='flex-row items-center justify-between mt-1'>
            <Text className='font-[500]  text-gray-500  text-[15px]'>Delievery Fee | 1.2 Kms</Text>
            <Text className='font-[500] text-red-600 text-[15px]'>FREE</Text>
        </View>
        <Text className='font-[500]  text-gray-500  text-[15px] mt-1'>Free Delievery on your Order!</Text>

        <Text style={{borderColor:'gray', borderWidth:0.5,height:1,marginTop:12}}/>

        <View className='flex-row items-center justify-between mt-2'>
            <Text className='font-[500]  text-gray-500  text-[15px]'>Delievery Tip</Text>
            <TouchableOpacity><Text className='font-[500] text-red-600 text-[15px]'>Add Tip</Text></TouchableOpacity>
        </View>

        <View className='flex-row items-center justify-between mt-1'>
            <Text className='font-[500]  text-gray-500  text-[15px]'>Taxes and Charges</Text>
            <Text className='font-[500] text-red-600 text-[15px]'>₹65.3</Text>
        </View>

        <Text style={{borderColor:'gray', borderWidth:0.5,height:1,marginTop:12}}/>

        <View className='flex-row items-center justify-between mt-2'>
            <Text className='font-[500]   text-[15px]'>To Pay</Text>
            <Text className='font-[500] text-[15px]'>₹{amount+65.3}</Text>
        </View>
        </View></View>
      </View>
    </ScrollView>
    <View className='w-screen bg-white absolute bottom-0 flex items-center py-2'><View className='w-[90%] flex-row justify-between'>
            <View className='w-[45%] '>
                <Text className='text-[15px] font-[600]'>₹{amount+65.3}</Text>
                <Text className='text-[15px] text-green-600 font-[600]'>View Detailed Bill</Text>
            </View>
            <TouchableOpacity onPress={()=>{dispatch(clearcart()); navigate('LoadingScreen')}} activeOpacity={0.6} className='w-[45%]'><Text className='text-white text-[16px] text-center font-[600] bg-green-600 px-3 py-[9px] rounded-md '>Proceed to Pay</Text></TouchableOpacity>
    </View></View>
    </>) : (
        <View className='flex w-full h-full items-center justify-center'>
            <Text className='text-[18px] font-[600] '>Cart is Empty! Please add items</Text>
            <TouchableOpacity onPress={()=>gobacknaviagte.goBack()}><Text className='mt-4 bg-blue-600 text-white font-[500] px-3 py-[5px] rounded-sm'>Add Items</Text></TouchableOpacity>
        </View>
    )
  )
}

export default OrderScreen