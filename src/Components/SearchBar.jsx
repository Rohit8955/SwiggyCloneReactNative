import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
const SearchBar = (props) => {
    const {navigate} = useNavigation()
  return (
   
    <View className='w-full flex items-center mt-3'>
      <View className='w-[90%] flex-row items-center bg-white justify-between px-4 py-[12px] rounded-[28px] '>
        <TextInput className='w-[85%] text-[16px] ' placeholder='Want Something to eat ?'/>
        <TouchableOpacity activeOpacity={0.7}><MaterialCommunityIcons name="microphone" size={25} color="gray" /></TouchableOpacity>
      </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})