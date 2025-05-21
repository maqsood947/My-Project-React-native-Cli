import {StyleSheet, ScrollView, View, Text} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeStackParamList} from '../Navigation/HomeStack';

type HomeScreenNavigationProp = NavigationProp<
  HomeStackParamList,
  'HomeScreen'
>;
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScrollView style={styles.container}>
      {/* <DatePicker date={new Date(Date.now())} onDateChange={(date)=>{console.log(date)}} mode='datetime'/> */}
  
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',

    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#023C4D',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 35,
  },
  addButtonText: {
    color: '#a9a9a9',
  },
});
export default HomeScreen;
