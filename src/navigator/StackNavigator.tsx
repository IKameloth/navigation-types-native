import { createStackNavigator } from '@react-navigation/stack'
import { OneScreen } from '../screens/OneScreen'
import { ThreeScreen } from '../screens/ThreeScreen'
import { OneTwo } from '../screens/TwoScreen'

const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OneScreen" component={OneScreen} />
      <Stack.Screen name="TwoScreen" component={OneTwo} />
      <Stack.Screen name="ThreeScreen" component={ThreeScreen} />
    </Stack.Navigator>
  )
}
