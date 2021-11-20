import React, { Component } from 'react';
import {ScrollView,View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import Deck from './Deck';
import { blue, orange } from '../utilities/colors';
import { handleInitialData } from '../actions/action';

export class DeckList extends Component {
  
  componentDidMount() {
    console.log("Component Mounted from DeckList")
    
    this.props.handleInitialData;
    console.log(this.state)
  }

  render() {
    const { decks, navigation } = this.props;

    console.log("We are here decks")
    console.log("My data:",this.props.decks)

    return (
      <ScrollView style={styles.container}>

        <Text style={styles.title}>Udacity Mobile Flashcards</Text>

        {/* {
        this.props.decks === null ? "Data Is Null" : Object.values(decks).map(deck => {

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
    );
  }
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

// const mapStateToProps = (state) => ({ decks: "state.reducer.decks" });
const mapStateToProps = state => ({ decks: state });


export default connect(mapStateToProps,{handleInitialData})(DeckList);