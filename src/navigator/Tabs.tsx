import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tab1Screen from '../screens/Tab1Screen'
import Tab2Screen from '../screens/Tab2Screen'
import { StackNavigator } from './StackNavigator'
import { colors } from '../theme/appTheme'
import { Platform, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { TopTabNavigator } from './TopTabNavigator'
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
              iconName = 'T1'
              break

            case 'TopTabNavigator':
              iconName = 'TT'
              break

            case 'StackNavigator':
              iconName = 'ST'
              break
          }
          return <Text style={{ color: props.color }}>{iconName}</Text>
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
              iconName = 'T1'
              break

            case 'TopTabNavigator':
              iconName = 'TT'
              break

            case 'StackNavigator':
              iconName = 'ST'
              break
          }
          return <Text style={{ color: props.color }}>{iconName}</Text>
        }
      })}
    >
      <BottomTabIos.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <BottomTabIos.Screen name="TopTabNavigator" options={{ title: 'TopTab' }} component={TopTabNavigator} />
      <BottomTabIos.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabIos.Navigator>
  )
}
