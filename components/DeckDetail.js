// import React, { Component } from 'react';
// import { View, StyleSheet } from 'react-native';
// import Deck from './Deck';
// import TouchButton from './TouchButton';
// import TextButton from './TextButton';
// import { gray, textGray, green, white, red } from '../utilities/colors';
// import { connect } from 'react-redux';
// import { removeDeck } from '../actions/action';
// import { removeDeckAS } from '../utilities/api';

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

  console.log("My state is here:",route.params.deck.questions.length)
  let cards = 0;
  
  if (route.params !== undefined) {
    cards = deck.deck.questions.length;
  }
  
  const removeDeck = () => {
    removeDeckAS(deck);
    navigation.navigate("DeckList");
  };
  
  useEffect(() => {
    navigation.setOptions({ title: deck.deck.title });
  }, []);
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
          onPress={() => navigation.navigate("Quiz", { deck: route.params })}
        >
          <Text style={Styles.button}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={removeDeck}>
          <Text style={Styles.delete}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeckDetail;
// export class DeckDetail extends Component {
  

//   shouldComponentUpdate(nextProps) {
//     return nextProps.deck !== undefined;
//   }
//   handleDelete = id => {
//     const { removeDeck, navigation } = this.props;

//     removeDeck(id);
//     removeDeckAS(id);

//     navigation.goBack();
//   };
//   render() {
//     const { deck } = this.props;

//     return (
//       <View style={styles.container}>
//         <Deck id={deck.title} />
//         <View>
//           <TouchButton
//             btnStyle={{ backgroundColor: white, borderColor: textGray }}
//             txtStyle={{ color: textGray }}
//             onPress={() =>
//               this.props.navigation.navigate('AddCard', { title: deck.title })
//             }
//           >
//             Add Card
//           </TouchButton>
//           <TouchButton
//             btnStyle={{ backgroundColor: green, borderColor: white }}
//             txtStyle={{ color: white }}
//             onPress={() =>
//               this.props.navigation.navigate('Quiz', { title: deck.title })
//             }
//           >
//             Start Quiz
//           </TouchButton>
//         </View>
//         <TextButton
//           txtStyle={{ color: red }}
//           onPress={() => this.handleDelete(deck.title)}
//         >
//           Delete Deck
//         </TextButton>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-around',
//     paddingTop: 16,
//     paddingLeft: 16,
//     paddingRight: 16,
//     paddingBottom: 16,
//     backgroundColor: gray
//   }
// });

// const mapStateToProps = (state,props) => {
//   // const title = navigation.route.params.title
//   // navigation.getParam('title', 'undefined');
//   // this.props.route.params
//   const deck = state[this.props.navigation.title];

//   return {
//     deck
//   };
// };

// export default connect(mapStateToProps,{ removeDeck })(DeckDetail);