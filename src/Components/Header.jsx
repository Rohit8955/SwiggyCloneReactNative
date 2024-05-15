import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Header = () => {
    useEffect(async ()=>{
        const data = await axios.get('dummyapi');
    },[])
  return (
    <View>
      <Text>
        {
            data.map((elem,idx)=>(
                <Image/>
            ))
        }
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})