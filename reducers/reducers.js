import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD, RESET_STORE } from '../actions/action';
  import { decks as MydecksList } from '../utilities/_Data';
  

  const initialState = {
    decks: {},
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case RECEIVE_DECKS:
        return {
          ...state,
          ...action.decks
        };
      case ADD_DECK:
        const { title } = action;
        return {
          ...state,
          [title]: {
            title,
            questions: []
          }
        };
      case REMOVE_DECK:
        const { id } = action;
        const { [id]: value, ...remainingDecks } = state;
        console.log(remainingDecks);
        return remainingDecks;
      case ADD_CARD:
        const { deckId, card } = action;
        return {
          ...state,
          [deckId]: {
            ...state[deckId],
            questions: [...state[deckId].questions].concat(card)
          }
        };
        case RESET_STORE:
          return MydecksList;
      default:
        return state;
    }
  }


  export default reducer