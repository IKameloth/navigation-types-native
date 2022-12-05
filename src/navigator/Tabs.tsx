import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tab1Screen from '../screens/Tab1Screen'
import Tab2Screen from '../screens/Tab2Screen'
import { StackNavigator } from './StackNavigator'
import { colors } from '../theme/appTheme'
import { Platform, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { TopTabNavigator } from './TopTabNavigator'
import Icon from 'react-native-vector-icons/Ionicons'
// import { LogBox } from 'react-native'
// LogBox.ignoreLogs(['Sending'])

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOs /> : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator()

function TabsAndroid() {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      style={{
        backgroundColor: colors.primary
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: 'red',
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: 'transparent'
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: (props) => {
          let iconName: string = ''
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bus-outline'
              break

            case 'TopTabNavigator':
              iconName = 'bicycle-outline'
              break

            case 'StackNavigator':
              iconName = 'walk-outline'
              break
          }
          return (
            <Text style={{ color: props.color }}>
              <Icon name={iconName} size={20} color={props.color} />
            </Text>
          )
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'TopTab' }} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  )
}

const BottomTabIos = createBottomTabNavigator()

export const TabsIOs = () => {
  return (
    <BottomTabIos.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: 'red',
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: (props) => {
          let iconName: string = ''
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'bus-outline'
              break

            case 'TopTabNavigator':
              iconName = 'bicycle-outline'
              break

            case 'StackNavigator':
              iconName = 'walk-outline'
              break
          }
          return (
            <Text style={{ color: props.color }}>
              <Icon name={iconName} size={20} color={props.color} />
            </Text>
          )
        }
      })}
    >
      <BottomTabIos.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <BottomTabIos.Screen name="TopTabNavigator" options={{ title: 'TopTab' }} component={TopTabNavigator} />
      <BottomTabIos.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabIos.Navigator>
  )
}
