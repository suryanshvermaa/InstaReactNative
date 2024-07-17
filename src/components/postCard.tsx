import { View, Text,Image } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

interface postProps{
post:{
    id:string;
    image:string;
    image_url:string;
    caption:string;
    user:{
       id:string;
       avatar_url:string,
       image_url:string;
       username:string;
    }
}

}

const PostCard:React.FC<postProps> = ({post}) => {
  const [liked,setLiked]=useState(false);
  return (
    <>
        <View className='flex flex-row p-2 items-center gap-4 bg-gray-200 '>
            <Image source={{uri:post.user.image_url}} className='w-12 aspect-square rounded-full'/>
            <Text className='font-semibold text-xl'>{post.user.username}</Text>
        </View>
      <Image source={{uri:post.image_url}} className='w-full aspect-[4/3]'/>
      <View className=' flex-row p-3 gap-4 items-center justify-between bg-gray-200'>
          <View className='flex-row gap-4 items-center'>
          <AntDesign name={liked?'heart':'hearto'} size={26} color={liked?'red':'black'} onPress={()=>setLiked(!liked)} />
           <FontAwesome name="comment-o" size={27} color="black" />
           <FontAwesome name="send-o" size={24} color="black" />
          </View>
           <Feather name="bookmark" size={28} color="black" />

      </View>
      </>
  )
}

export default PostCard