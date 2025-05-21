import { StyleSheet, Text} from 'react-native';
import { View } from 'react-native';

export default function AnalysisScreen() {
  return (
   
      <View style={styles.container}>
 
          
       <Text>hello this is analysis screen</Text>


      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#023C4D', 
  },




  appBar: {
      backgroundColor: '#004e92',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      elevation: 20,
  },
  summarycontent:{
      backgroundColor: '#004e92',
      justifyContent: 'space-between',
      alignItems:"center",
      paddingHorizontal: 10,
      flex: 2,
      flexDirection: "row" ,
      elevation: 10,
      width: 75,
      height: 75,
      borderWidth: 0.5,             // Thickness of the border
      borderColor: 'white',     // Color of the border (e.g., Tomato color)
      borderRadius: 10, 
      
  },


  summary: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
  },
  summaryItem: {
      alignItems: 'center',
  },
  summaryText: {
      color: 'white',
      fontSize: 18,
  },
  summaryAmount: {
      color: 'white',
      fontSize: 16,
      fontWeight: "300",
  },
  addItemContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  addItemText: {
      color: 'white',
      fontSize: 15,
      fontWeight:"200"
  },
  addButton: {
      position: 'absolute',
      right: 20,
      bottom: 35,
      width: 60,
      height: 60,
      borderRadius: 30,
      borderColor: 'white',
      borderWidth: 1.5,
      backgroundColor: '#004e92',
      justifyContent: 'center',
      alignItems: 'center',
  },
  addButtonText: {
      color: 'white',
      fontSize: 36,
  },
  bottom: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'white',
      justifyContent: 'space-around',
  },
});
