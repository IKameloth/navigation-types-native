import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { StackNavigator } from './src/navigator/StackNavigator'
import { DrawerNavigation } from './src/navigator/DrawerNavigation'
import { DrawerNav } from './src/navigator/DrawerNav'
import { Tabs } from './src/navigator/Tabs'

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
      {/* <DrawerNavigation /> */}
      {/* <StackNavigator /> */}
      {/* <Tabs /> */}
    </NavigationContainer>
  )
}

export default App
