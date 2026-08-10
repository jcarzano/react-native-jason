import { HOME_BALANCE } from '@/constants/data';
import { icons } from '@/constants/icons';
import images from '@/constants/images';
import '@/global.css'
import { formatCurrency } from '@/lib/utils';
import { styled } from "nativewind"
import {Image, View, Text } from "react-native";
import { SafeAreaView as RNSafeReaView} from 'react-native-safe-area-context';
 
const SafeAreaView = styled(RNSafeReaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5">
     <View className='home-header'>
      <View className='home-user'>
        <Image source={images.unnamed} className="home-avatar"/>
        <Text className='home-user-name'>Jason Carzano</Text>
      </View>

      <Image source={icons.add} className='home-add-icon'/>
     </View>
     <View>
      <Text>Balance</Text>
      <View>
        <Text>{formatCurrency(HOME_BALANCE.amount)}</Text>
      </View>
     </View>
     </SafeAreaView>
  );
}