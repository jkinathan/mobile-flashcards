import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  DeckList  from '../components/DeckList';
import AddDeck from '../components/AddDeck';
import AddCard from '../components/AddCard';
// import {FontAwesome5} from 'react-native-vector-icons';
import { orange } from '../utilities/colors';
import { createStackNavigator } from '@react-navigation/stack';
import DeckDetail from '../components/DeckDetail';
import StartQuiz from '../components/Quiz';

import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function MainNavigation() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="DeckList">
        <Stack.Screen name="DeckDetail" component={DeckDetail} />
        <Stack.Screen name="DeckList" component={DeckList} />
        <Stack.Screen name="Add Deck" component={AddDeck} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="StartQuiz" component={StartQuiz} />

      </Stack.Navigator> */}
      <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'DeckList') {
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
          })}
          tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          }}
          >

        <Tab.Screen name="DeckList" component={DeckList} />
        <Tab.Screen name="Add Deck" component={AddDeck} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}