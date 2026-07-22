import '@/global.css'
import { Link } from "expo-router";
import { styled } from "nativewind"
import { Text, View } from "react-native";
import { SafeAreaView as RNSafeReaView} from 'react-native-safe-area-context';
 
const SafeAreaView = styled(RNSafeReaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center p-5 justify-center bg-[#fff7e5]">
      <Text className="text-xl font-bold text-[#16a34a]">
        Welcome to Shushu and Sasha!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">Go to Onboarding</Link>
     </SafeAreaView>
  );
}