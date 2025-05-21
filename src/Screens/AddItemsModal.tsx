import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Categories from './Categories';




const AddItemsModal = () => {
      const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
      const [modalVisible, setModalVisible] = useState(true)
      const [tasks, setTasks] = useState<object[]>([]);

      const[date, setDate]=useState(' ')
      const[account, setAccount]=useState(' ')
      const[category, setCategory]=useState(' ')
      const[amount, setAmount]=useState(' ')
      const[note, setNote]=useState(' ')

      
     

      const handlePress=()=>{
        const newData={
          Date: date,
          Account: account,
          Category: category,
          Amount: amount,
          Note: note
        }
tasks.push(newData)
console.log(newData)

      }



    
    return (
        <View style={styles.container}>
    
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
      >
      
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Add Item</Text>
          <TextInput
            placeholder="Date"
            placeholderTextColor={"#E7EAE5"}
            style={styles.input}
            value={date}
            onChangeText={(Text)=>setDate(Text)}
          />
          <TextInput
            placeholder="Account"
            placeholderTextColor={"#E7EAE5"}
            style={styles.input}
            value={account}
            onChangeText={(Text)=>setAccount(Text)}

          />
          <TextInput
            placeholder="Category"
            placeholderTextColor={"#E7EAE5"}
            style={styles.input}
            value={category}
            onChangeText={(Text)=>setCategory(Text)}
          />
          <TextInput
            placeholder="Amount"
            placeholderTextColor={"#E7EAE5"}
            style={styles.input}
            keyboardType="numeric"
            value={amount}
            onChangeText={(Text)=>setAmount(Text)}
          />
          <TextInput
            placeholder="Note"
            placeholderTextColor={"#BFD4BF"}
            style={styles.input}
            value={note}
            onChangeText={(Text)=>setNote(Text)}
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)} // Assuming Cancel will close the modal
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>handlePress()}
              style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
    <Button title='modal' onPress={()=>setModalVisible(true)}/>
    </View>
    );
  };

export default AddItemsModal

const styles = StyleSheet.create({
    container:{
         flex: 1,
          justifyContent: 'center', 
          alignItems: 'center',
           backgroundColor: '#023C4D',
        height:"80%",

     },
     modalContainer: {
      // flex:3 ,
      alignSelf:'center',
      borderRadius: 15,
      backgroundColor: "#023C4D",
      paddingHorizontal: 40,
      paddingVertical: 20,
      marginVertical: 80,
      elevation: 3,
    },
    modalView: {
      alignItems: "center",
    },
    modalTitle: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    input: {
      width: "100%",
      marginBottom: 22,
      backgroundColor: "#023C4D",
      borderBottomColor: "#fff",
      borderBottomWidth: 0.4,
    },
    modalButtons: {
      gap: 30,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      paddingHorizontal: 20,
      marginTop: 20,
    },
    cancelButton: {
      borderWidth: 0.5,
      borderColor: "white",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: "transparent",
      marginRight: 10,
    },
    cancelButtonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
    saveButton: {
      backgroundColor: "#187bcd", // Adjust this color if needed to match the image
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      elevation: 3,
    },
    saveButtonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
})