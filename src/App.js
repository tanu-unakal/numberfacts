import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'tachyons';
import Searchbar from './Searchbar.js';
import Card from './Card';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      fact:'enter a number to get a cool fact!'

    }
  }



  onSearch = (event)=> {
    event.preventDefault();
    const data = new FormData(event.target)
    const number = data.get('number')

    fetch(`http://numbersapi.com/${number}`)
    .then(response => {
        return response.text();
      })
    .then(data => 
      this.setState({
        fact: data
      }))
    console.log('data set');
    console.log(this.state.fact)
  }

  render(){
    console.log(4);
    return (
      <>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <div id='title'>
        <div className= "tc">
            <h2 className="garamond"> Enter a number you wanna know a random trivia about: </h2>
            <Searchbar onSearch = {this.onSearch} />

            <h2 className="garamond"> Here's your trivia </h2>
            <p className="garamond"> {this.state.fact}</p>
        </div>
        </div>
    </>
  );
  }
}


export default App;
