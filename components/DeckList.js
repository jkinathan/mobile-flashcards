import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/action'
import { blue, orange } from '../utilities/colors';
import {ScrollView,View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Deck from './Deck';


const DeckList = (props) => {

     const dispatch = useDispatch()
     const decks = useSelector(state => state)

     
     React.useEffect(() => {
         dispatch(handleInitialData())
         
     }, [])

    

    return (
        

        <ScrollView style={styles.container}>

        <Text style={styles.title}>Udacity Mobile Flashcards</Text>

        {
        decks === undefined ? "Data Is Null" : Object.values(decks).map(deckk => {

          return (
            <TouchableOpacity
              key={deckk.title}
              
              onPress={() => props.navigation.navigate("DeckDetail", { deck: deckk })}>

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




export default DeckList;