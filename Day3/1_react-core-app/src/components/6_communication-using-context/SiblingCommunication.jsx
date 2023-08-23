import React, { Component } from 'react';
import Counter from './Counter';
import CounterSibling from './CounterSibling';
import CounterContextProvider from './CounterContext';

class SiblingCommunication extends Component {
    render() {
        return (
            <div className='mt-5'>
                <CounterContextProvider>
                    <Counter />
                    <hr />
                    <CounterSibling />
                </CounterContextProvider>
            </div>
        );
    }
}

export default SiblingCommunication;