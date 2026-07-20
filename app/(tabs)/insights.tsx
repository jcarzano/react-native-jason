import { View, Text } from 'react-native'
import React from 'react'
import { styled } from "nativewind"
import { SafeAreaView as RNSafeReaView} from 'react-native-safe-area-context';
 
const SafeAreaView = styled(RNSafeReaView)

const Insights = () => {
  return (
    <SafeAreaView>
      <Text>Insights</Text>
    </SafeAreaView>
  )
}

export default Insights