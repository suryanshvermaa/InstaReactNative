import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor:'blue',tabBarShowLabel:false
    }}>
      <Tabs.Screen name="index" options={{headerTitle:'home',headerShown:false,tabBarIcon:({color})=>(
       <FontAwesome name="home" size={30} color="black" />
      )}} />
      <Tabs.Screen name="post" options={{headerTitle:'Create Post',tabBarIcon:({color})=>(
         <AntDesign name="plussquareo" size={26} color="black" />
      )}} />
      <Tabs.Screen name="profile" options={{headerTitle:'Profile',tabBarIcon:({color})=>(
        <FontAwesome name="user" size={30} color="black" />
      )}} />
    </Tabs>
  );
}
