import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="category">
          <header>Category 1</header>
          <section className="questions">Question 1</section>
          <section className="questions">Question 2</section>
          <section className="questions">Question 3</section>
          <section className="questions">Question 4</section>
        </section>
        <section className="category">
          <header>Category 2</header>
          <section className="questions">Question 1</section>
          <section className="questions">Question 2</section>
          <section className="questions">Question 3</section>
          <section className="questions">Question 4</section>
        </section>
        <section className="category">
          <header>Category 3</header>
          <section className="questions">Question 1</section>
          <section className="questions">Question 2</section>
          <section className="questions">Question 3</section>
          <section className="questions">Question 4</section>
        </section>
        <section className="category">
          <header>Category 4</header>
          <section className="questions">Question 1</section>
          <section className="questions">Question 2</section>
          <section className="questions">Question 3</section>
          <section className="questions">Question 4</section>
        </section>
      </div>
    );
  }
}

export default App;
