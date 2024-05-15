import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../Firebase/FireBase';

const auth = getAuth(app)
const SignUp = () => {
    const {navigate} = useNavigation();
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('')
    const [cnfrmpassword,setcnfrmpassword] = useState('');
    const [loading,setloading] = useState(false);
    

    const handleclicked = ()=>{
        if(email!=='' && password!=='' && cnfrmpassword!==''){
           if(cnfrmpassword===password){
            // console.warn('SignUp succesfull')
            setloading(true);
            createUserWithEmailAndPassword(auth,email,password).then((value)=>{
                console.warn('SignUp Successfully')
                navigate('Home');
            })
            
           }
           else console.warn('Enter correct confirm password')
        }
        else if(email==='' || password==='' || cnfrmpassword===''){
            console.warn('Please fill each field!');
        }
    }
  return (
    <View className='flex-1 items-center justify-center'>
        <Text className='text-amber-500 font-bold text-[24px]'>Create Account</Text>
        <Text className='w-[320px] text-center font-[500] text-[17px] mt-2'>Create an account so that you can explore all the food items</Text>
        <View className='w-full px-6 mt-8'>
            <TextInput onChangeText={(text)=>setemail(text)} className='bg-white font-[500] py-2 rounded-md px-2' placeholder='Enter Email'/>
            <TextInput onChangeText={(text)=>setpassword(text)} secureTextEntry className='bg-white font-[500] py-2 rounded-md px-2 mt-4' placeholder='Enter Password'/>
            <TextInput onChangeText={(text)=>setcnfrmpassword(text)} secureTextEntry className='bg-white font-[500] py-2 rounded-md px-2 mt-4' placeholder='Comfirm Password'/>
        </View>
        <TouchableOpacity onPress={handleclicked} activeOpacity={0.7} className='mt-10 w-full px-6'>
            <View className='bg-amber-500 rounded-md  py-2'>
                {loading===false?(<Text className='text-white font-semibold text-[18px] text-center'>SignUp</Text>)
                :(<Text className='text-white text-[18px] text-center font-semibold'>Loading...</Text>)}
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})