import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import TouchButton from './TouchButton';
import { orange, white, textGray, blue } from '../utilities/colors';
import { connect } from 'react-redux';
import { addDeck } from '../actions/action';
import { saveDeckTitleAS } from '../utilities/api';
import { StackActions, NavigationActions } from 'react-navigation';

export class AddDeck extends Component {
  
  state = {
    title: ""
  };

  handleChange = (title) => {
    this.setState({ title });
  };

  handleSubmit = () => {
    const { addDeck, navigation, route } = this.props;
  

    addDeck(this.state.title);
    saveDeckTitleAS(this.state.title);

    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'DeckList' }),
        NavigationActions.navigate({
          routeName: 'DeckDetail',
          params: { deck: route.params.deck }
        })
      ]
    });
    navigation.dispatch(resetAction);

    this.setState(() => ({ title: '' }));
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 50 }} />
        <View style={styles.block}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
        </View>
        <View style={[styles.block]}>
          <TextInput
            style={styles.input}
            value={this.state.title}
            onChangeText={this.handleChange}
            placeholder="Deck Name"
            autoFocus={true}
            returnKeyType="done"
            onSubmitEditing={this.handleSubmit}
          />
        </View>
        <TouchButton
          btnStyle={{ backgroundColor: orange, borderColor: blue }}
          onPress={this.handleSubmit}
          disabled={this.state.title === ''}
        >
          Create Deck
        </TouchButton>
        
      </View>
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
  block: {
    marginBottom: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 32
  },
  input: {
    borderWidth: 1,
    borderColor: textGray,
    backgroundColor: white,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 40,
    marginBottom: 20
  }
});

export default connect(null,{ addDeck })(AddDeck);