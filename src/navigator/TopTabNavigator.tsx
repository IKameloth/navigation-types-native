import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { AlbumScreen } from '../screens/AlbumScreen'
import { ChatScreen } from '../screens/ChatScreen'
import { ContactScreen } from '../screens/ContactScreen'
import { colors } from '../theme/appTheme'

const Tab = createMaterialTopTabNavigator()

export const TopTabNavigator = () => {
  const { top: paddingTop } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      style={{
        paddingTop
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary
        },
        tabBarIcon: (props) => {
          let iconName: string = ''
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbubbles-outline'
              break
            case 'ContactScreen':
              iconName = 'list-circle-outline'
              break
            case 'AlbumScreen':
              iconName = 'albums-outline'
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
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
    </Tab.Navigator>
  )
}
