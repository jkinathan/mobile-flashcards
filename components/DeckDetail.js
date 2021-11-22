import React from "react";
import { View, Text } from "react-native";
import Styles from "../utilities/styles";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import { removeDeckAS } from "../utilities/api";
import { removeDeck } from "../actions/action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const DeckDetail = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const deck = route.params;
  const specDeck = useSelector((state) => state);

  let cards = 0;
  
  if (route.params !== undefined) {
    cards = deck.deck.questions.length;
  }
  

  const removeDDeck = id => {
    
    removeDeck(id);
    removeDeckAS(id);
    console.log("Deleteddd........",route.params)
    navigation.goBack();
  };
  
  useEffect(() => {
    
    navigation.setOptions({ title: deck.deck.title });

  }, [deck.deck.questions.length]);

  return (
    <View style={Styles.main}>
      <Text style={Styles.header}>{deck.deck.title}</Text>
      <Text style={Styles.cards}>
        {cards === 1
          ? cards + " Card"
          : cards === 0
          ? "No card"
          : cards + " cards"}
      </Text>

      <View style={Styles.deckOptions}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddCard", { deck: route.params })}
        >
          <Text style={Styles.button}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("StartQuiz", { deck: route.params.deck })}
        >
          <Text style={Styles.button}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeDDeck(deck.deck.title)}>
          <Text style={[Styles.button, { color: "red", borderColor: "red" }]}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeckDetail;
