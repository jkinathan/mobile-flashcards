import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { handleInitialData } from '../actions/action';
import { connect } from 'react-redux';

export class TestCompo extends Component {
  
  componentDidMount(){
    console.log("Component Mounteddd.....")
    this.props.handleInitialData();
    this.props.deck  === undefined ? console.log("no data") : console.log(this.props.decks);
    // console.log("Dattaa",this.props.decks);
  }

    render() {
      
      return (
        <View style={styles.container}>
          <Text>Udacity Mobile Flashcards</Text>
        </View>
  )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const mapStateToProps = (state) => ({ decks: state });

const mapDispatchToProps = (dispatch) => (
    {
        handleInitialData: () => dispatch(handleInitialData()),
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(TestCompo);