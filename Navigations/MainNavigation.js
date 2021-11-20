import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  DeckList  from '../components/DeckList';
import {FontAwesome5} from 'react-native-vector-icons';
import { TestCompo } from '../components/TestComponent';

const Tab = createBottomTabNavigator();


export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={
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
          tabBarOptions = {{
            activeTintColor: "#f0f",
            inactiveTintColor: "#555",
            activeBackgroundColor: "#fff",
            inactiveBackgroundColor: "#999",
            
          }}
         >

        <Tab.Screen name="DeckList" component={DeckList} />
        <Tab.Screen name="Add Deck" component={DeckList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}