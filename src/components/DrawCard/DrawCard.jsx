import React, { Component } from 'react';
import './DrawCard.css';

class DrawCard extends Component{
  drawNewCard(){
    console.log('hello')
  };


    render(){
        return(
            <div className="buttonContainer">
                <button onClick={this.drawNewCard} className="btn">Draw Card</button>
            </div>
        )
    };
}

export default DrawCard;
