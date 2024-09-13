import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailsScreen from '../screens/DetailsScreen'
import HomeScreeen from '../screens/HomeScreeen'

const AppNavigation = () => {

    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreeen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation