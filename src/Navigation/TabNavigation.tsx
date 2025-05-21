import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from './StackNavigation';
import AccountsScreen from '../Screens/Accounts';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import AddItemsModal from '../Screens/AddItemsModal';

 

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator 
    initialRouteName='StackNavigation'  
     
    screenOptions={{

      tabBarStyle:{
        display: 'flex',
        backgroundColor:"#02313b", 
        height: 80,
        justifyContent:'center',
        alignItems: 'center',
        paddingTop:20 ,
        borderColor:"#02313b"
   },
}}>
         
      <Tab.Screen name='StackNavigation' component={StackNavigation} 
      options={{
        headerShown: false,
        title:"",
        
        tabBarIcon: ({ focused }) => (
          <View style={styles.iconBackground} >

          <Ionicons 
            name={focused ?"home-sharp" :"home-outline"} 
            size={focused ? 30 :26} 
            color={"#fff"}
            style={{marginBottom:3}} 

          />
          </View>
        ),  
              
      }}
      />
  


      
      <Tab.Screen name="AddItemsModal" component={AddItemsModal}    options={{
      
      title: 'Add Items',
      tabBarLabel:" ",
      headerShown: true,
      headerTintColor:'#ffffff',
      headerStyle:{backgroundColor:'#023C4D'},
        tabBarIcon: () => (
          <View style={{backgroundColor:'#023C4D', height: 40, width: 100,  display:'flex', alignItems:"center", borderRadius: 50, justifyContent: 'center', elevation:3 }} >
          {/* <Ionicons 
          style={{paddingBottom: 8}}
            name={'add'} 
            size={40} 
            color={"#fff"} 
          /> */}
          <Text style={{color: "#FFFF", fontWeight:600, fontSize: 18}}>Add</Text>
          </View>
        ),   
            }}/>

      <Tab.Screen name="Accounts" component={AccountsScreen}   options={{
        title:"Accounts",
        tabBarLabel:" ",
        headerShown: true,
        headerTintColor:'#ffffff',
        headerStyle:{backgroundColor:'#023C4D'},
        tabBarIcon: ({ focused }) => (
        <View style={styles.iconBackground} >
        <Ionicons 
        name={focused ?  "wallet":"wallet-outline"} 
        size={focused ? 30 :26} 
        color={"#fff"}
      />
      </View>
    ),   

      }}/>


    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  addButton:{
    backgroundColor:'#023C4D',
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent:"center",
    borderRadius: 50,
    borderWidth: 1,
    opacity: 1,
  },
  iconBackground:{
    backgroundColor:'#023C4D',
     height: 45, 
     width: 45, 
      display:'flex', 
      alignItems:"center",
       borderRadius: 50,
        justifyContent: 'center', 
        elevation: 3
        
  }
 
})

export default TabNavigation;