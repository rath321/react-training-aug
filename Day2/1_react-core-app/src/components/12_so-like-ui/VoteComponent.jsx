import React, { Component } from 'react';

class VoteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: this.props.initialVotes
        };
        this.handleUpVote = this.handleUpVote.bind(this);
        this.handleDownVote = this.handleDownVote.bind(this);
    }

    handleUpVote(e) {
        this.setState({ votes: this.state.votes + 1 });
    }

    handleDownVote(e) {
        this.setState({ votes: this.state.votes - 1 });
    }
    
    render() {
        return (
            <div className="d-flex flex-column align-items-center">
                <button className="btn btn-link" onClick={this.handleUpVote}>
                    <i className="bi bi-chevron-up"></i>
                </button>
                <span>{this.state.votes}</span>
                <button className="btn btn-link" onClick={this.handleDownVote}>
                    <i className="bi bi-chevron-down"></i>
                </button>
            </div>
        );
    }
}

export default VoteComponent;