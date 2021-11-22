import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  DeckList  from '../components/DeckList';
import AddDeck from '../components/AddDeck';
import AddCard from '../components/AddCard';
import {FontAwesome5} from 'react-native-vector-icons';
import { orange } from '../utilities/colors';
import { createStackNavigator } from '@react-navigation/stack';
import DeckDetail from '../components/DeckDetail';
import StartQuiz from '../components/Quiz';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DeckList">
        <Stack.Screen name="DeckDetail" component={DeckDetail} />
        <Stack.Screen name="DeckList" component={DeckList} />
        <Stack.Screen name="Add Deck" component={AddDeck} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="StartQuiz" component={StartQuiz} />

      </Stack.Navigator>
      {/* <Tab.Navigator
       screenOptions={
        {
          "tabBarActiveTintColor": "#f0f",
          "tabBarInactiveTintColor": "#555",
          "tabBarActiveBackgroundColor": "#fff",
          "tabBarInactiveBackgroundColor": "#999",
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]
        },
         (route)=>({
            tabBarIcon: ({focused,size,color}) =>{
              let iconName;
              if(route.name === "DeckList"){
                iconName = "autoprefixer";
                size= focused ? 25 : 20; 
                color = focused ? "#f0f" : "#555"; 
              }
              else if(route.name === "Add Deck"){
                iconName = "btc" ;
                size= focused ? 25 : 20; 
                color = focused ? "#f0f" : "#555";

              }
              return(
                <FontAwesome5
                name = {iconName}
                size = {size}/>
              )
            }
         })}
         
          tabBarOptions= {{
            activeTintColor: "#f0f",
            style: {
              height: 60,
              backgroundColor: "#999",
              shadowColor: 'rgba(0,0,0, 0.24)',
              shadowOffset: {
                width: 0,
                height: 3
              },
              shadowRadius: 6,
              shadowOpacity: 1,
              borderTopWidth: 1,
              borderTopColor: orange
            },
            labelStyle: {
              fontSize: 12,
              fontWeight: 'bold'
            },
            tabStyle: {
              marginTop: 5,
              marginBottom: 3
            },
            showIcon: true
          }}
         >

        <Tab.Screen name="DeckList" component={DeckList} />
        <Tab.Screen name="Add Deck" component={AddDeck} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}