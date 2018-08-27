import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
            <div className='question'>
                {this.props.points}
            </div>
        );
    }
}

export default Question;
