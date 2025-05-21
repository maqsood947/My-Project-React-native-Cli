import { GestureResponderEvent, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Ionicons from 'react-native-vector-icons/Ionicons';
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProfileScreen'>;


const HeaderRightAvatar = () => {
    const navigation = useNavigation<NavigationProp>();

  return (
    <Pressable
 style={styles.container}
    onPress={()=>navigation.navigate('ProfileScreen')}>
      
      <Ionicons 
          style={{}}
            name={'person'} 
            size={25} 
            color={"#fff"} 
          /> 
        
      </Pressable>
  )
}

export default HeaderRightAvatar

const styles = StyleSheet.create({
   
    container:{
      height: 30,
      width: 30,
      display:"flex",
      justifyContent:'center',
      alignItems:"center",
      alignSelf:'center',
      marginRight:15
    }
})