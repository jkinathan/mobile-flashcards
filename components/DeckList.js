import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/action'
import { blue, orange } from '../utilities/colors';
import {ScrollView,View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default function DeckList() {

     const dispatch = useDispatch()
     const state = useSelector(state => state   )

     React.useEffect(() => {
         dispatch(handleInitialData())
        //  console.log("Use Effect")
     }, [])
     
    return (
        
        <ScrollView style={styles.container}>

        <Text style={styles.title}>Udacity Mobile Flashcards</Text>

        {/* {
        state.decks === null ? "Data Is Null" : Object.values(state).map(deck => {

          return (
            <TouchableOpacity
              key={deck.title}
              onPress={() =>
                navigation.navigate('DeckDetail', { title: deck.title })
              }
            >
              <Deck id={deck.title} />
            </TouchableOpacity>
          );
        })}; */}
        

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
