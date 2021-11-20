import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import MainNavigation from './Navigations/MainNavigation';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import store from './store';

const store = createStore(
  reducer,
  applyMiddleware(thunk,logger)
);

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
    justifyContent: 'center',
  },
});
