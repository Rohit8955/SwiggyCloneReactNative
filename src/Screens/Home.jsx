import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import SearchBar from '../Components/SearchBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import DelieveryAdd from '../Components/DelieveryAdd'
import { ScrollView } from 'react-native-gesture-handler'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import QuickFood from '../Components/QuickFood'
import { Ionicons } from "@expo/vector-icons";
import Hotelsdata from '../data/Hotelsdata'
import Menuitems from '../Components/Menuitems'
const Home = () => {
  const hoteldata = Hotelsdata;
  return (
    <SafeAreaView className='bg-gray-100 mb-2'>
    <ScrollView showsVerticalScrollIndicator={false}>
      <DelieveryAdd/>

      <SearchBar/>

      <Slider/>
      
      <Categories/>

      <QuickFood/>

      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around",marginTop:15}}>
        <Pressable
          style={{
            backgroundColor:'white',
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            width:120,
            justifyContent: "center",
          }}
        >
          <Text style={{marginRight:6}}>Filter</Text>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>

        <Pressable
          style={{
            backgroundColor:'white',
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
            width:120
          }}
        >
          <Text>Sort By Rating</Text>
         
        </Pressable>

        <Pressable
          style={{
            backgroundColor:'white',
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            justifyContent: "center",
          }}
        >
          <Text>Sort By Price</Text>
         
        </Pressable>
      </View>
      <View><View className=''>
        {
          hoteldata.map((elem,idx)=>{
            return (
              <Menuitems key={idx} data={elem}/>
            )
          })
        }
      </View></View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home