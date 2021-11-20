import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import MainNavigation from './Navigations/MainNavigation';
import { Provider } from 'react-redux';
import reducer from './reducers/reducers';


const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        
        <MainNavigation/>
      </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
