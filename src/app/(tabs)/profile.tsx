import { View, Text ,Image, TextInput, Pressable} from 'react-native'
import React,{useState} from 'react'
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
  const [image, setImage] = useState<string|null>(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }
  return (
    <View className='flex-1  p-3'>
      {image ? <Image source={{uri:image}} className='w-[150px] aspect-square rounded-full mt-3 self-center'/>:<Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}} className='w-[150px] aspect-square self-center rounded-full mt-3'/>}
      <Text className='self-center font-semibold text-blue-500 text-xl' onPress={pickImage}>Change</Text>
      <Text className='text-gray-700 font-normal m-2 ml-2'>Email</Text>
      <TextInput placeholder='email' className='w-full p-3 px-4 border-[1px] border-gray-400 rounded-md'/>

      <Text className='text-gray-700 font-normal m-2 ml-2'>Username</Text>
      <TextInput placeholder='username' className='w-full p-3 px-4 border-[1px] border-gray-400 rounded-md'/>

      <Text className='text-gray-700 font-normal m-2 ml-2'>Website</Text>
      <TextInput placeholder='website' className='w-full p-3 px-4 border-[1px] border-gray-400 rounded-md'/>

      <Pressable className='w-full bg-blue-500 rounded-md p-3 py-4 mt-3'><Text className='text-center font-semibold text-white'>Update</Text></Pressable>
      <Pressable className='w-full bg-blue-500 rounded-md p-3 py-4 mt-3'><Text className='text-center font-semibold text-white'>Sign out</Text></Pressable>
    </View>
  )
}

export default Profile