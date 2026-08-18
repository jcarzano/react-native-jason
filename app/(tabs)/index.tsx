import { HOME_BALANCE } from '@/constants/data';
import { icons } from '@/constants/icons';
import images from '@/constants/images';
import '@/global.css'
import { formatCurrency } from '@/lib/utils';
import dayjs from 'dayjs';
import { styled } from "nativewind"
import {Image, View, Text } from "react-native";
import { SafeAreaView as RNSafeReaView} from 'react-native-safe-area-context';
 
const SafeAreaView = styled(RNSafeReaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5">
     <View className='mb-2 flex-row items-center justify-between'>
      <View className='flex-row items-center'>
        <Image source={images.unnamed} className="size-15 rounded-full"/>
        <Text className='ml-4 text-2xl font-sans-bold text-primary'>Jason Carzano</Text>
      </View>

      <Image source={icons.add} className='size-10'/>
     </View>

     <View className='my-2 min-h-50 justify-between gap-5 rounded-bl-4xl rounded-tr-4xl bg-accent p-5'>
      <Text className='text-xl font-sans-semibold text-white/100'>Balance</Text>
      <View className='flex-row items-center justify-between'>
        <Text className='text-3xl font-sans-extrabold text-white'>{formatCurrency(523489.48)}</Text>
        <Text className='text-xl font-sans-medium text-white'>{dayjs("2026-08-18T09:00:00.000Z").format('MM/DD')}</Text>
      </View>

     </View>
     </SafeAreaView>
  );
}