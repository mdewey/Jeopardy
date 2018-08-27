import React, { Component } from "react";
import Question from "./Question";

class Category extends Component {
  render() {
    console.log(this.props);
    return (
      <section className="category">
        <header>{this.props.name}</header>
        {this.props.questions.map((question, i) => {
          return (
            <Question
              key={i}
              points={question.points}
              question={question.question}
              answer={question.answer}
            />
          );
        })}
      </section>
    );
  }
}

export default Category;
