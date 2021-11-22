import React from "react";
import { getDeck } from "../utilities/api";
import {Button, Text, View} from "react-native";
import Styles from "../utilities/styles";
import { setLocalNotification,clearLocalNotification } from "../utilities/helpers";
import { TouchableOpacity } from "react-native";
export default class StartQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: null,
            correct: 0,
            indexAt: 0,
            showQuestion: true,
        }
    }

    componentDidMount() {
        const { route} = this.props;

        const deckID = route.params.deck.title;
        
        getDeck(deckID).then((deckk) => {

                const questions = deckk.questions;
                
                this.setState({questions: questions});
            }
        );
    }

    render() {
        if(this.state.questions === null || this.state.questions === undefined) 
        {
            return null;
        } 
        else if(this.state.questions.length === 0) 
        {
            return (
            <View style={Styles.VerticalAlignCenter}>
              <Text style={Styles.deckTexts}>There is no question card in the current deck...</Text>
            </View>);
        } 
        else if (this.state.questions.length !== this.state.indexAt) 
        {
            const question = this.state.questions[this.state.indexAt];
            return (
                <View style={Styles.VerticalAlignCenter}>
                    <Text style={Styles.deckTexts}>
                        Your Progress {this.state.indexAt+1} of {this.state.questions.length}
                    </Text>

                    <View style={Styles.VerticalAlignCenter}>
                      {this.state.showQuestion ? (
                        <Text style={Styles.deckTexts}>{question.question}</Text>
                      ) : (
                        <Text style={Styles.deckTexts}>{question.answer}</Text>
                      )}
                      <TouchableOpacity
                        onPress={this.flipQA}
                      >
                        {this.state.showQuestion ? (
                          <Text style={Styles.subButton}>Show Answer</Text>
                        ) : (
                          <Text style={Styles.subButton}>Show Question</Text>
                        )}
                      </TouchableOpacity>
                    </View>

                    <View style={{ marginBottom: 50 }}>

                      <TouchableOpacity onPress={this.markAsCorrect}>
                        <Text style={Styles.button}>Correct</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={this.pushIncorrect}>
                        <Text
                          style={[Styles.button, { color: "red", borderColor: "red" }]}
                        >
                          Incorrect
                        </Text>
                      </TouchableOpacity>
                    </View>

                </View>
            )
        } 
        else {
            return (
              
              <View style={Styles.VerticalAlignCenter}>
                    <Text style={Styles.deckTexts}>
                        You have successfully completed the deck questions!
                    </Text>
                    <Text style={Styles.deckTexts}>
                        Score: You have answered {Math.round(((this.state.correct)/this.state.questions.length)*100)}% Correct!
                    </Text>


                    <TouchableOpacity onPress={() => {
                            
                            this.setState({
                                correct: 0,
                                indexAt: 0,
                                showQuestion: true,
                            });
                            this.Notify;
                        }}>
                      <Text style={Styles.button}>Restart Quiz</Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('DeckDetail', {
                                deck: this.props.route.params.deck,
                            });
                            }}>
                      <Text
                        style={[Styles.button, { color: "gray", borderColor: "gray" }]}
                      >
                        Back to Deck
                      </Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    flipQA = () => {
        this.setState(prevState => ({
            showQuestion: !prevState.showQuestion,
            correct: prevState.correct,
            indexAt: prevState.indexAt,
            questions: prevState.questions,
        }));
    }


    markAsCorrect = () => {
        this.setState(prevState => ({
            correct: prevState.correct+1,
            indexAt: prevState.indexAt+1,
            questions: prevState.questions,
            showQuestion: true,
        }));
    }

    pushIncorrect = () => {
        this.setState(prevState => ({
            indexAt: prevState.indexAt+1,
            showQuestion: true,
            correct: prevState.correct,
            questions: prevState.questions,
        }));
    }

  Notify = () => {
    clearLocalNotification();
    setLocalNotification();
    console.log("Notifications set")
  }
}