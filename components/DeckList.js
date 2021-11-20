import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/action'
import { blue, orange } from '../utilities/colors';
import {ScrollView,View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Deck from './Deck';

export default function DeckList() {

     const dispatch = useDispatch()
     const decks = useSelector(state => state)

     React.useEffect(() => {
         dispatch(handleInitialData())
        //  console.log("Use Effect")
     }, [])
     
    return (
        
        <ScrollView style={styles.container}>

        <Text style={styles.title}>Udacity Mobile Flashcards</Text>

        {
        decks === undefined ? "Data Is Null" : Object.values(decks).map(deckk => {

          return (
            <TouchableOpacity
              key={deckk.title}
              onPress={() =>
                navigation.navigate('DeckDetail', { title: deckk.title })
              }
            >
              <Deck id={deckk.title} />
            </TouchableOpacity>
          );
        })}
        

        <View style={{ marginBottom: 30 }} />

      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 16,
      backgroundColor: blue
    },
    title: {
      fontSize: 40,
      textAlign: 'center',
      marginBottom: 16,
      color: orange
    }
  });
