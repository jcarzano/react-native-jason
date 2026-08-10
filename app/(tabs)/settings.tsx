import { View, Text } from 'react-native'
import React from 'react'
import { styled } from "nativewind"
import { SafeAreaView as RNSafeReaView} from 'react-native-safe-area-context';
 
const SafeAreaView = styled(RNSafeReaView)

const Settings = () => {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
    </SafeAreaView>
  )
}

export default Settings