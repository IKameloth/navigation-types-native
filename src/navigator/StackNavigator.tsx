import { createStackNavigator } from '@react-navigation/stack'
import { OneScreen } from '../screens/OneScreen'
import { ThreeScreen } from '../screens/ThreeScreen'
import { OneTwo } from '../screens/TwoScreen'
import PersonScreen from '../screens/PersonScreen'

export type RootStackParams = {
  OneScreen: undefined
  TwoScreen: undefined
  ThreeScreen: undefined
  PersonScreen: { id: number; name: string }
}

const Stack = createStackNavigator<RootStackParams>()

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="OneScreen"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: '#fff'
        }
      }}
    >
      <Stack.Screen name="OneScreen" options={{ title: 'Pagina 1' }} component={OneScreen} />
      <Stack.Screen name="TwoScreen" options={{ title: 'Pagina 2' }} component={OneTwo} />
      <Stack.Screen name="ThreeScreen" options={{ title: 'Pagina 3' }} component={ThreeScreen} />
      <Stack.Screen name="PersonScreen" options={{ title: 'Personas' }} component={PersonScreen} />
    </Stack.Navigator>
  )
}
