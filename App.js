import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  DeckList  from './components/DeckList';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';
import { createStackNavigator } from '@react-navigation/stack';
import DeckDetail from './components/DeckDetail';
import StartQuiz from './components/Quiz';

import { Ionicons } from '@expo/vector-icons';

const store = createStore(
  reducer,
  applyMiddleware(thunk,logger)
);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const DeckListStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      options={{headerShown: false}}
      name="DeckList" component={DeckList} />
      <Stack.Screen name="DeckDetail" component={DeckDetail} />
      <Stack.Screen name="Add Deck" component={AddDeck} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="StartQuiz" component={StartQuiz} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        
      <NavigationContainer>
      
      <Tab.Navigator
          screenOptions={
            {
              headerShown: false ,
            },
            {
            
            "tabBarActiveTintColor": "tomato",
            "tabBarInactiveTintColor": "gray",
            "tabBarStyle": [{"display": "flex"},null]
            }
            ,
            ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
              ? 'list'
              : 'list-outline';
            } else if (route.name === 'Add Deck') {
              iconName = focused
              ? 'add-circle'
              : 'add-circle-outline';
            }
      
      return <Ionicons name={iconName} size={size} color={color} 
                />;
              },
              
              })
              
            }
              >

            <Tab.Screen name="Home" component={DeckListStackScreen} />
            <Tab.Screen name="Add Deck" component={AddDeck} />
          </Tab.Navigator>
        </NavigationContainer>

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
