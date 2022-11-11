import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const OneTwo = () => {
  const navigator = useNavigation()

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: 'Atras'
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 2</Text>
      <Button title="Go three page" onPress={() => navigator.navigate('ThreeScreen')} />
    </View>
  )
}
