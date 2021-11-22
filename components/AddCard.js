import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Styles from "../utilities/styles";
import { useState } from "react";
import { addCardToDeck } from "../actions/action";
import { useDispatch } from "react-redux";
import { addCardToDeckAS } from "../utilities/api";

const AddCard = ({ route, navigation }) => {
  
  const dispatch = useDispatch();
  const { deck } = route.params;
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // console.log("Decker mine",route.params)
  const handleSubmit = () => {

    dispatch(addCardToDeck(deck.deck.title, { answer: answer, question: question }));

    addCardToDeckAS(deck.deck.title, { answer: answer, question: question });
    
    navigation.navigate("DeckDetail", { deck: deck.deck });
  };

  return (

    <View style={Styles.main}>
      <Text style={Styles.deckTexts}>Title: {deck.deck.title}</Text>
      <View style={Styles.VerticalAlignCenter}>
        <View style={{ marginBottom: 30 }}>
          <TextInput
            style={Styles.textInput}
            value={question}
            placeholder="Question"
            onChangeText={(text) => setQuestion(text)}
          />
        </View>

        <View style={{ marginBottom: 30 }}>
          <TextInput
            style={Styles.textInput}
            value={answer}
            placeholder="Answer"
            onChangeText={(text) => setAnswer(text)}
          />
        </View>
      </View>
      <TouchableOpacity style={{ marginBottom: 30 }} onPress={handleSubmit}>
        <Text style={Styles.button}>Create Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCard;
