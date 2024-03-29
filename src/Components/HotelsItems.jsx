import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Modal from "react-native-modal";
import FoodItem from './FoodItem';
import logo from '../assets/swiggylogo.jpeg'
import { useSelector } from 'react-redux';
const HotelsItems = () => {
  const {navigate} = useNavigation();
  const gobacknaviagte = useNavigation();
  const route = useRoute();
  const [visible,setvisible] = useState(false);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const fetchMenu = () => {
      setMenu(route.params.menu);
    };

    fetchMenu();
  }, []);
  const items = useSelector((state)=>state.cart.items);
  const amount = useSelector((state)=>state.cart.amount);
  return (
    <>
    <ScrollView className='mt-[30px]' showsVerticalScrollIndicator={false}>
      <View className='h-[300px] bg-blue-300' style={{borderBottomLeftRadius:30,borderBottomRightRadius:30}}>

        <View className='flex-row justify-between px-2 mt-2'>
          <TouchableOpacity onPress={()=>gobacknaviagte.goBack()}><Ionicons name="arrow-back" size={24} color="black" /></TouchableOpacity>
          <View className='flex-row items-center'>
            <Feather name="search" size={21} color="black" />
            <Text className='text-[17px] font-[600] ml-[6px] '>Search</Text>
          </View>
        </View>

        <View className='bg-white h-[200px] mx-[20px] my-[5px] rounded-[15px] mt-3 px-3' style={{}}>

          <View className='flex-row items-center justify-between mt-1'>
            <Text className='text-[19px] font-[600] '>{route.params.name}</Text>
            <View className='flex-row items-center'>
              <TouchableOpacity className=''><AntDesign name="sharealt" size={22} color="black" /></TouchableOpacity>
              <TouchableOpacity className='ml-2'><AntDesign name="hearto" size={22} color="black" /></TouchableOpacity>
            </View>
          </View>

          <View><View className='flex-row gap-[4px] items-center mt-[1px]'>
                  <MaterialIcons name="stars" size={24} color="green" />
                  <Text className='font-[600] text-[15px] text-gray-600'>{route.params.rating}</Text>
                  <Entypo name="dot-single" size={24} color="gray" />
                  <Text className='font-[600] text-[15px] text-gray-600'>{route.params.time} mins</Text>
          </View></View>

          <Text className='text-gray-500 text-[17px] font-[500] mt-[4px]'>{route.params.cuisines}</Text>

          <View className='flex-row items-center mt-[6px]'>
            <Text className='text-[16px] text-gray-500 font-[500]'>Outlet :</Text>
            <Text className='text-[16px] text-gray-700 ml-3 font-[500]'>{route.params.adress}</Text>
          </View>

          <View className='flex-row items-center mt-[6px]'>
            <Text className='text-[16px] text-gray-500 font-[500]'>22 mins</Text>
            <Text className='text-[16px] text-gray-700 ml-3 font-[500]'>Home</Text>
          </View>

          <Text style={{borderColor:'gray',borderWidth:0.6,height:1, marginTop:12}}/>

          <View className='flex-row items-center gap-2 mt-[1px]'>
            <FontAwesome5 name="bicycle" size={24} color="orange" />
            <Text className='text-[15px] font-[500] text-gray-500'>0-3 Kms  |</Text>
            <Text className='text-[15px] font-[500] text-gray-500'>35 Delievery Fee will Apply</Text>
          </View>
        </View>
      </View>
      <Text className='text-[17px] font-[500] mt-[10px] text-center'>MENU</Text>
      <Text style={{borderColor:'gray',borderWidth:0.6,height:1, marginTop:2}}/>
      {
        route.params.menu.map((elem,idx)=>{
          return (
            <FoodItem item={elem} key={idx}/>
          )
        })
      }
    </ScrollView>
    <TouchableOpacity onPress={()=>setvisible(!visible)} activeOpacity={0.6} className='absolute bottom-[80px] right-6 bg-black w-[50px] h-[50px] rounded-[25px]'>
      <View className=' w-full h-full flex justify-center items-center' ><View className='flex items-center'>
        <MaterialIcons name="menu-book" size={20} color="white" />
        <Text className='font-[500] text-[12px] text-white'>MENU</Text>
      </View></View>
    </TouchableOpacity>
    <Modal onBackButtonPress={()=>setvisible(false)} onBackdropPress={()=>setvisible(false)} visible={visible}>
      <View className='h-[120px] w-[180px] absolute bottom-[125px] right-9 rounded-[10px] bg-black'>
      {
        menu.map((elem,idx)=>{
          return (
            <View className='flex-row justify-between items-center px-3 mt-1' key={idx}>
              <Text className='text-white font-[600] text-[16px] '>{elem.name}</Text>
              <Text className='text-white font-[600] text-[16px] '>{elem.items.length}</Text>
            </View>
          )
        })
      }
      <View className='flex items-center justify-center'>
        <Image style={{height:100, width:70, resizeMode:'contain'}} source={logo}/>
      </View>
      </View>
    </Modal>

    {items>0 && (<TouchableOpacity onPress={()=>navigate('OrderScreen',
    {name:route.params.name})} activeOpacity={0.7} className='w-full flex items-center absolute bottom-5'>
      <View className='bg-green-600 w-[90%] h-[53px] rounded-[8px] flex-row items-center justify-between px-2'>
      <View>
        <Text className='text-white font-[600] text-[15px] '>{items} items | ${amount}</Text>
        <Text className='text-white font-[600] text-[15px] '>Extra Charges may apply</Text>
      </View>
      <Text className='text-white font-[700] text-[16px] '>View Cart</Text>
      </View>
    </TouchableOpacity>)}
    </>
  )
}

export default HotelsItems