import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card'
import DrawCard from './components/DrawCard/DrawCard';

const cardData = require('./data/data.json')

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        cards: cardData.cards,
        currentCard: {}
      }
    }

    componentWillMount(){
      const currentCards = this.state.cards;

      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })
    }

    getRandomCard(currentCards){
    // let card = Math.floor(Math.random() * currentCards.length);
    // return(card);
    const randomIndex = Math.floor(Math.random() * currentCards.length);
    const card = currentCards[randomIndex];
    if(card === this.state.currentCard){
      this.getRandomCard(currentCards)
    }

    return(card);
    }

  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card
            eng={this.state.currentCard.eng}
            han={this.state.currentCard.han}
            pin={this.state.currentCard.pin}
            />
        </div>
        <div className="buttonRow">
          <DrawCard />
        </div>

      </div>
    );
  }
}

export default App;
