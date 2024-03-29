import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import bg1 from '../assets/s1.jpg'
const Categories = () => {


    const images = [
        {
            src: require('../assets/coffee.png'),
            name: 'Coffee'
        },
        {
            src: require('../assets/bread.png'),
            name: 'Bread'
        },
        {
            src: require('../assets/fast-food.png'),
            name: 'Fast Food'
        },
        {
            src: require('../assets/soft-drink.png'),
            name: 'Soft Drinks'
        },
        {
            src: require('../assets/deals.png'),
            name: 'Deals'
        },
        {
            src: require('../assets/desserts.png'),
            name: 'Desserts'
        }
    ]

  return (
    <View className='mt-5'>
        <Text className='px-5 text-[17px] font-[600] '>What's on your mind ?</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className='w-full mt-[10px]'>
            <View className='w-full flex-row gap-[4px] px-2'>
                {
                    images.map((elem,idx)=>{
                        return (
                            <TouchableOpacity className='w-[80px] flex items-center' key={idx}>
                                <Image style={{height:50, width:50, }} source={elem.src}/>
                                <Text className='font-[500]'>{elem.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </ScrollView>
    </View>
  )
}

export default Categories