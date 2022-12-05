import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { Image, useWindowDimensions, View, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import SettingScreen from '../screens/SettingScreen'
import { styles } from '../theme/appTheme'
import { Tabs } from './Tabs'

const Drawer = createDrawerNavigator()

export const DrawerNav = () => {
  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front'
      }}
      drawerContent={(props) => <MenuDrawer {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  )
}

const MenuDrawer = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* AVATAR SECTION */}
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          }}
          style={styles.avatar}
        />
      </View>
      {/* MENU */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{ ...styles.menuTouchable, flexDirection: 'row' }}
          onPress={() => navigation.navigate('Tabs')}
        >
          <Icon name="compass-outline" size={23} />
          <Text style={styles.menuText}>Navigation Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.menuTouchable, flexDirection: 'row' }}
          onPress={() => navigation.navigate('SettingScreen')}
        >
          <Icon name="construct-outline" size={23} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}
