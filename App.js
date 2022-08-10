import * as React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen';
import ISSScreen from './screens/ISSscreen';
import MeteorScreen from './screens/MeteorScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ISS" component={ISSScreen} />
        <Stack.Screen name="Meteor" component={MeteorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
