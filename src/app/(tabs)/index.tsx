import { View, Text,FlatList,ScrollView, Image, StatusBar } from 'react-native'
import React, { useState } from 'react'
import PostCard from '@/src/components/postCard';
import posts from '../../../assets/data/data.json';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';



const Index = () => {
  const [notViewed,setNotViewed]=useState<string |null>('2')
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
    <View className='flex flex-1 bg-white'>
      <View className='flex flex-row justify-between  bg-white pt-4 px-4'>
        <Text className='text-4xl font-bold'>Instagram</Text>
        <View className='flex flex-row items-center justify-center gap-4'>
        <AntDesign name="hearto" size={24} color="black" />
        <AntDesign name="message1" size={24} color="black" />
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <View className='p-4 flex-row gap-5 mb-4'>

        <View className='flex flex-col items-center'>
        <View  className={`w-[72px] aspect-square rounded-full flex justify-center items-center bg-gray-400 `}><View className='w-[65px] aspect-square bg-white rounded-full flex justify-center items-center'><Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg'}} className='w-[60px] aspect-square rounded-full'/>
        <AntDesign name="pluscircle" size={24} color="#2596be" className='absolute right-0 top-12 bg-white rounded-full' />
        </View></View>
        <Text>Your story</Text>
        </View>
         {
          posts.map((item)=>( <View key={item.id} className='flex flex-col items-center'>
            <View  className={`w-[72px] aspect-square rounded-full flex justify-center items-center ${notViewed==item.id?'bg-pink-500' :'bg-gray-400' } `}><View className='w-[65px] aspect-square bg-white rounded-full flex justify-center items-center'><Image source={{uri:item.image_url}} className='w-[60px] aspect-square rounded-full'/></View></View>
            <Text>{item.user.username.slice(0,10)}</Text>
          </View>))
         }
           {
          posts.map((item)=>( <View  key={item.id} className='flex flex-col items-center'>
            <View className={`w-[72px] aspect-square rounded-full flex justify-center items-center bg-gray-400`}><View className='w-[65px] aspect-square bg-white rounded-full flex justify-center items-center'><Image source={{uri:item.image_url}} className='w-[60px] aspect-square rounded-full'/></View></View>
            <Text>{item.user.username.slice(0,10)}</Text>
          </View>))
         }
        
          
        </View>
      </ScrollView>
    <FlatList 
    showsVerticalScrollIndicator={false}
    data={posts}
    renderItem={({item})=>(<PostCard post={item}/>)}/>
  </View>
  </SafeAreaView>
  </ScrollView>
  )
}

export default Index