import React, { Component } from 'react';
import VoteComponent from './VoteComponent';

class QuestionComponent extends Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body d-flex">
                    <VoteComponent initialVotes={10} />
                    <div className="ms-3">
                        <h5 className="card-title">
                            How do I create a Stack Overflow-like UI using React?
                        </h5>
                        <p className="card-text">
                            I want to create a UI similar to Stack Overflow's question-answer format using React and Bootstrap. How can I achieve this?
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionComponent;