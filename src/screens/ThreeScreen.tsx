import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, Button } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> {}

export const ThreeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 3</Text>
      <Button title="Go back" onPress={() => navigation.pop()} />
      <Button title="Go to first screen" onPress={() => navigation.popToTop()} />
    </View>
  )
}
