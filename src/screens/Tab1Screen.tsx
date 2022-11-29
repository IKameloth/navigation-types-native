import React from 'react'
import { Text, View } from 'react-native'
import { useEffect } from 'react'

const Tab1Screen = () => {
  useEffect(() => {
    console.log('TAB 1')
  }, [])

  return (
    <View>
      <Text>Tab1Screen</Text>
    </View>
  )
}

export default Tab1Screen
