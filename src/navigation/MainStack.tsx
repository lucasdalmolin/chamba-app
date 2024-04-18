import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main';

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={ Main }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack

export type RootStackParamList = {
  Inicio: undefined;
  Creation: undefined;
  Wheel: undefined;
};