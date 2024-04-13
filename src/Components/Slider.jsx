import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useRef, useState} from 'react'
import bg1 from '../assets/s1.jpg'
import bg2 from '../assets/bg1.jpg'
import bg3 from '../assets/bg2.jpg'
// import { SliderBox } from "react-native-image-slider-box";

const Slider = () => {
  

    const images = [
        "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mfz2zorpe8in1noybhzo",
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhnwo9ezxo7mpkpvtdcy",
      ];
      
  return (
    <View className='mt-4'>
      <TouchableOpacity activeOpacity={0.8} className='w-full flex items-center'>
        <Image className='h-[160px] w-[90%] object-cover rounded-[8px]' source={{uri:"https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg"}}/>
      </TouchableOpacity>
    </View>
  )
}

export default Slider