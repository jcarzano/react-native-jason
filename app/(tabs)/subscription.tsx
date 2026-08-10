import { View, Text } from 'react-native'
import React from 'react'

import { styled } from "nativewind"
import { SafeAreaView as RNSafeReaView} from 'react-native-safe-area-context';
 
const SafeAreaView = styled(RNSafeReaView)

const Subscription = () => {
  return (
    <SafeAreaView className='flex-1 p-5'>
      <Text>Subscription</Text>
    </SafeAreaView>
  )
}

export default Subscription