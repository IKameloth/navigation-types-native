import React from 'react'
import { Text, View } from 'react-native'
import { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles, colors } from '../theme/appTheme'

const Tab1Screen = () => {
  useEffect(() => {
    console.log('TAB 1')
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={30} color={colors.primary} />
        <Icon name="alarm-outline" size={30} color={colors.primary} />
        <Icon name="arrow-forward-outline" size={30} color={colors.primary} />
        <Icon name="arrow-undo-circle-outline" size={30} color={colors.primary} />
      </Text>
    </View>
  )
}

export default Tab1Screen
