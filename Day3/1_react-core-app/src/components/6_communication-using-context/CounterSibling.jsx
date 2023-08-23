import React, { Component } from 'react';
import { CounterContext } from './CounterContext';

class CounterSibling extends Component {
    static contextType = CounterContext;

    render() {
        return (
            <>
                <div className="text-center">
                    <h3 className="text-success">Counter Sibling Component</h3>
                </div>
                <div className="d-grid gap-2 mx-auto col-6">
                    <h2 className="text-success text-center">
                        Current Count is: {this.context[0]}
                    </h2>
                </div>
            </>
        );
    }
}

export default CounterSibling;