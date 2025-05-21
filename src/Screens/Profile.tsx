import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, Image, TouchableOpacity, SafeAreaView, Settings, Button, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { RootStackParamList } from '../App';

import React, { useContext} from 'react'
import { AppwriteContext } from '../appwrite/AppwriteContext'
import Snackbar from 'react-native-snackbar'


const ProfileScreen = () => {
  // const navigation = useNavigation();
      const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  
      
        const {appwrite, setIsLoggedIn} = useContext(AppwriteContext)
        const handleLogout = () => {
          appwrite.logout()
          .then(() => {
            setIsLoggedIn(false);
            Snackbar.show({
              text: 'Logout Successful',
              duration: Snackbar.LENGTH_SHORT
            })
          })
        }

  return (
    <View  style={styles.container}>
<Text>hello this is profile screen</Text>

     <Button
     title='back to home'
     onPress={()=>navigation.popToTop()}/>
       <Pressable style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={{color: 'white'}}>Logout</Text>
      </Pressable>
    </View>
  );
};





const styles = StyleSheet.create({

  container:{
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#023C4D', 
  },
  logoutBtn: {
    height: 50,
    width: 100,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 20,
    elevation: 5
  },
  containerview:{
    flex: 1,
     paddingHorizontal: 20,
      paddingVertical: 10, 
  },
  myprofile:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
     alignItems: 'center'

  },
  profiletext:{
    fontSize: 20, fontWeight: 'bold', color: '#ffffff' 
  },
  imgpicker:{
    position: 'absolute',
    bottom: -10,
    right: -10,
    backgroundColor: '#007ACC',
    borderRadius: 50,
    padding: 5,
  },
  changepassword:{
     flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingVertical: 15 
  },


    profileMenu:{
      flexDirection: 'row', 
      justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15 
    },

ProfileView:{
   flexDirection: 'row',
    alignItems: 'center' 
},
menuText:{
   color: '#ffffff',
    marginLeft: 10 
},

logoutText:{
  color: '#FF3B30',
   marginLeft: 10 
},
middleLine:{
  height: 1,
   backgroundColor: '#fff',
    marginVertical: 10 
}

})





export default ProfileScreen;
