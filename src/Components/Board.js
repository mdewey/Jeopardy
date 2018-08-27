import React, { Component } from "react";
import Category from "./Category";
import data from "../Data/data.json";
import '../Styles/Board.css'

class Board extends Component {
  render() {
    return (
      <div className="App">
        {data.map((cat, i) => {
          return (
            <Category key={i} name={cat.category} questions={cat.questions} />
          );
        })}
      </div>
    );
  }
}

export default Board;
