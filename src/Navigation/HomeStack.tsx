import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../Screens/Profile';
import HomeScreen from '../Screens/HomeScreen';
import HeaderRightAvatar from '../Components/HeaderRightAvatar';

export type HomeStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
};
const HomeStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerStyle: { backgroundColor: '#023C4D'  },
      headerTintColor: '#ffffff',
    }}
  >
      <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        title:'Home',
        headerRight: () => <HeaderRightAvatar /> 
      }}
    />
    <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        title:'Profile',
      }}
    />
     </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})