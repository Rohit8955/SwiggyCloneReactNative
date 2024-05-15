import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { app } from '../Firebase/FireBase';
import { getAuth,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const auth = getAuth(app)
const googleprovider = new GoogleAuthProvider();

const LoginScreen = () => {
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('')
    const [loading,setloading] = useState(false);
    const {navigate} = useNavigation();
    
    const loginclicked = ()=>{
        if(email!=='' && password!==''){
            setloading(true);

            signInWithEmailAndPassword(auth,email,password).then((value)=>{
                console.warn('Signed In Successfully!')
                navigate('Home');
            }).catch((err)=>{
                console.warn(err);
            })
        }
        else if(email==='' && password===''){
            console.warn('Please! Enter Email and Password')
        }
        else if(email===''){
            console.warn('Enter Email please')
        }
        else if(password===''){
            console.warn('Enter Password Please');
        }
    }

    const siginwithgoogle = ()=>{
        signInWithPopup(auth, googleprovider)
    }
    
  return (
    <View className='flex-1 items-center justify-center'>
      
        <Text className='text-amber-500 font-bold text-center text-[24px]'>Login Here</Text>
        <Text className='font-semibold text-[18px] w-[190px] text-center mt-3 '>Welcome! back you've been missed!</Text>
        <View className='w-full px-6  mt-4'>
            <TextInput onChangeText={(text)=>setemail(text)} className='w-full font-semibold py-2 px-1 bg-white rounded-md' placeholder='Email'/>
            <TextInput onChangeText={(text)=>setpassword(text)} secureTextEntry={true} className='w-full font-semibold py-2 px-1 bg-white rounded-md mt-4' placeholder='Password'/>
        </View>

        <TouchableOpacity onPress={loginclicked} activeOpacity={0.7} className='w-full px-6 mt-7'>
            <View className=' w-full bg-amber-500 flex items-center py-2 rounded-md'>
                {
                    loading===false?(<Text className='text-white font-[600] text-[18px]'>Sign In</Text>)
                    :(<Text className='font-semibold text-white text-[18px]'>Loading...</Text>)
                }
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigate('SignUp')}><Text className='mt-5 font-[500] text-gray-600'>Create new account</Text></TouchableOpacity>
        <Text className='mt-6 text-amber-500 font-[500]'>or continue with</Text>

        <View className='mt-7'><View className='flex-row gap-3'>
            <TouchableOpacity onPress={siginwithgoogle} activeOpacity={0.7} className='bg-white h-[42px] w-[42px] flex items-center justify-center rounded-full'><AntDesign name="google" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} className='bg-white h-[42px] w-[42px] flex items-center justify-center rounded-full '><Entypo name="facebook-with-circle" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} className='bg-white h-[42px] w-[42px] flex items-center justify-center rounded-full '><AntDesign name="apple1" size={24} color="black" /></TouchableOpacity>
        </View>
    </View></View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})