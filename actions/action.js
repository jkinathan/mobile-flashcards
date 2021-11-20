import { getDecks } from '../utilities/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';
export const RESET_STORE = 'RESET_STORE';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  };
}

export function removeDeck(id) {
  return {
    type: REMOVE_DECK,
    id
  };
}

export function addCardToDeck(deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card
  };
}

export function resetStore() {
  return {
    type: RESET_STORE
  };
}
export function handleInitialData() {
  return async(dispatch) => {
    
    return getDecks().then(decks => {
      // console.log("decks", decks)

      dispatch(receiveDecks(decks));
      
    });
  };
}

// export const handleInitialData = () => async(dispatch) => {
//   try {
//     console.log("Handling Decks")
//       getDecks().then(decks => {
//           dispatch(receiveDecks(decks))
//       })
//       console.log("Handled")
//   } 
//   catch(error) {
//       console.error('Error reading decks', error);
//   }
// }

export const myFunction = _ => {
return async (dispatch)=>{

  getDecks().then(decks => {
    console.log("decks", decks)

    dispatch(receiveDecks(decks));
    
  }).catch(error=>{
    console.log(`error`, error)
  } )
  console.log("I am here", )
}
}