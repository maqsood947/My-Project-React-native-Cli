import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Categories = () => {
  return (
      <View style={styles.container}>
      <Text>Categories screen</Text>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#023C4D', 
      },
    
})