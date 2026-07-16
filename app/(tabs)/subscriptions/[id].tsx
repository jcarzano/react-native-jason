import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const SubscriptionsDetails = () => {
    const { id} = useLocalSearchParams<{id :string }>()
  return (
    <View>
      <Text>SubscriptionsDetails :{id} </Text>
      <Link href="/">Go Back</Link>
    </View>
  )
}

export default SubscriptionsDetails