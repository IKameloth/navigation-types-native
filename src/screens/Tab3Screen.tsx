import React from 'react'
import { Text, View } from 'react-native'
import { useEffect } from 'react'

const Tab1Screen = () => {
  useEffect(() => {
    console.log('TAB 3')
  }, [])

  return (
    <View>
      <Text>Tab 3 Screen</Text>
    </View>
  )
}

export default Tab1Screen
