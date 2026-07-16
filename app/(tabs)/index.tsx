import "@/global.css"
import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-[#fff7e5]">
      <Text className="text-xl font-bold text-[#16a34a]">
        Welcome to Shushu and Sasha!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">Go to Onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">Go to Sign In</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">Go to Sign Out</Link>  
      <Link href="/subscriptions/spotify" className="mt-4 rounded bg-primary text-white p-4">Spotify Subscription</Link> 
      <Link href={{ pathname: "/subscriptions/[id]", params:{id:"claude"}}}  className="mt-4 rounded bg-primary text-white p-4">Claude Max Subscriptions</Link> 
    </View>
  );
}