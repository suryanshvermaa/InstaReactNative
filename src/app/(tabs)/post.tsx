import { View, Text, Image, Pressable, TextInput } from 'react-native'
import React,{useState} from 'react'
import * as ImagePicker from 'expo-image-picker';


const Post:React.FC = () => {
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
    <View className='flex-1 items-center p-3'>
    {image ?  <Image source={{uri:image}}  className='w-[200px] bg-gray-300 aspect-[3/4] self-center m-4 rounded-md'/> :<View className='w-[200px] bg-gray-300 aspect-[3/4] self-center m-4 rounded-md'></View> }
    <Text className='self-center font-semibold text-blue-500 text-xl' onPress={pickImage}>Change</Text>
    <TextInput placeholder='what is going on?' className='w-full p-4 mt-3 border-[2px]  rounded-md border-gray-300'/>
    <View className='mt-auto w-full absolute bottom-2'>
    <Pressable className='bg-blue-500 w-full p-3 rounded-md '><Text className='text-center text-white font-semibold text-xl'>Share</Text></Pressable>
    </View>
    </View>
  )
}

export default Post