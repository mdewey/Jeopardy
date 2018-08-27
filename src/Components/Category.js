import React, { Component } from "react";

class Category extends Component {
  render() {
    return (
      <section className="category">
        <header>{this.props.name}</header>
        <section className="question">Question 1</section>
        <section className="question">Question 2</section>
        <section className="question">Question 3</section>
        <section className="question">Question 4</section>
      </section>
    );
  }
}

export default Category;
