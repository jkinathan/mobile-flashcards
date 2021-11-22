import AsyncStorage from '@react-native-async-storage/async-storage'
import { decks } from './_Data';

const DECKS_STORAGE_KEY = 'MobileFlashcards:decks';

export const ANSWER_KEY = new Date().getFullYear().toString() +
  new Date().getMonth().toString() +
  new Date().getDate().toString();

export const AnswerQuestion = async ({ deck, question, passed }) => {
  const key = deck + " " + question;
  return await AsyncStorage.mergeItem(
    ANSWER_KEY,
    JSON.stringify({ [key]: passed })
  );
};

export const ClearAnswer =async (key)=>{

  const answers = await JSON.parse(await AsyncStorage.getItem(ANSWER_KEY));
  const seletedAnswers = Object.keys(answers).filter((s) => s.startsWith(key));
  seletedAnswers.map((s) => {
    answers[s] = undefined;
    delete answers[s];
  });
  await AsyncStorage.setItem(ANSWER_KEY, JSON.stringify(answers));
}

export function getData() {
  return decks;
}

function formatDeckResults(results) {
  return results === null ? decks : JSON.parse(results);
}

export function getDecksOld() {

  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDeckResults);
  
}


export async function getDecks() {
  try {
    const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    
    if (storeResults === null) {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    }

    return storeResults === null ? decks : JSON.parse(storeResults);
  } 
  catch (error) {
    console.log(error);
  }
}

export async function getDeck(title) {
  try {
    const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    return JSON.parse(storeResults)[title];
  } catch (error) {
    console.log(error);
  }
}

export const SubmitDeck = async (entry) => {
  const result = await AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify(entry)
  );
  return result;
};

export async function saveDeckTitleAS(title) {
  try {
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: []
        }
      })
    );
  } catch (error) {
    console.log(error);
  }
}


export async function addCardToDeckAS(title, card) {
  try {
    const deck = await getDeck(title);

    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          questions: [...deck.questions].concat(card)
        }
      })
    );
  } catch (error) {
    console.log(error);
  }
}

export async function resetDecks() {
  try {
    await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  } catch (error) {
    console.log(error);
  }
}