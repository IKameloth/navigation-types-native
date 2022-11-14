import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { StackNavigator } from './src/navigator/StackNavigator'
import { DrawerNavigation } from './src/navigator/DrawerNavigation'
import { DrawerNav } from './src/navigator/DrawerNav'

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
      {/* <DrawerNavigation /> */}
      {/* <StackNavigator /> */}
    </NavigationContainer>
  )
}

export default App
