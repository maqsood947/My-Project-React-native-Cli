import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import AccountsScreen from '../Screens/Accounts';
import AnalysisScreen from '../Screens/Analysis';
import AddItemsModal from '../Screens/AddItemsModal';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
    
      screenOptions={{
        headerStyle: { backgroundColor: '#023C4D'  },
        headerTintColor: '#ffffff',
        
      }}
    >
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
                }}
      />
      <Stack.Screen
        name="AddItemsModal"
        component={AddItemsModal}
        options={{
          headerTintColor: '#ffffff',
          headerShown:true}}
        
      />
      {/* <Stack.Screen
        name="AnalysisScreen"
        component={AnalysisScreen}
      
        options={{
          title:"Analysis",
          headerShown:true,
          
          headerStyle:{
            
          }

        }} */}
      
        
      
       <Stack.Screen
        name="AccountsScreen"
        component={AccountsScreen}
      
        options={{ 
          headerShown:true}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
