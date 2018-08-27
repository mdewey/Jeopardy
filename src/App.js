import React, { Component } from 'react';
import './App.css';
import Category from './Components/Category';
import data from './Data/data.json';


class App extends Component {
  render() {
    console.log(data)
    return (
      <div className="App">
      {data.map((cat, i) => {
        return (
          <Category key={i} name={cat.category}/>
          
        )
      })}
      </div>
    );
  }
}

export default App;
