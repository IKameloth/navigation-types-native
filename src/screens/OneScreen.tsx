import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles, colors } from '../theme/appTheme'

interface Props extends DrawerScreenProps<any, any> {}

export const OneScreen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" color={colors.primary} size={35} />
        </TouchableOpacity>
      )
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 1</Text>
      <Button title="Go two page" onPress={() => navigation.navigate('TwoScreen')} />
      <Text>Args with navigation</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: '#FF9427' }}
          onPress={() => navigation.navigate('PersonScreen', { id: 1, name: 'Pedro' })}
        >
          <Icon name="body-outline" color="black" size={35} />
          <Text>One Persons</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PersonScreen', { id: 2, name: 'Maria' })}
        >
          <Icon name="woman-outline" color="black" size={35} />
          <Text>Second Persons</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
