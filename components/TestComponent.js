import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class TestCompo extends Component {
  

    render() {
      
      return (
        <View style={styles.container}>
          <Text>Udacity Mobile Flashcards</Text>
        </View>
  )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });