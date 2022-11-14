import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends DrawerScreenProps<any, any> {}

export const OneScreen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Button title="menu" onPress={() => navigation.toggleDrawer()} />
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
          <Text>One Persons</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PersonScreen', { id: 2, name: 'Maria' })}
        >
          <Text>Second Persons</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
