import React, { Component } from 'react';
import { CounterContext } from './CounterContext';

class Counter extends Component {
    static contextType = CounterContext;

    constructor(props) {
        super(props);
        this._inc = this._inc.bind(this);
        this._dec = this._dec.bind(this);
    }

    _inc(e) {
        var [count, setCount] = this.context;
        setCount(count + 1);
    }

    _dec(e) {
        var [count, setCount] = this.context;
        setCount(count - 1);
    }

    render() {
        return (
            <>
                <div className="text-center">
                    <h3 className="text-info">Counter Component</h3>
                </div>
                <div className="d-grid gap-2 mx-auto col-6">
                    <h2 className="text-info text-center">
                        Current Count is: {this.context[0]}
                    </h2>
                    <button className="btn btn-info"
                        onClick={this._inc}>
                        <span className='fs-4'>+</span>
                    </button>
                    <button className="btn btn-info"
                        onClick={this._dec}>
                        <span className='fs-4'>-</span>
                    </button>
                </div>
            </>
        );
    }
}

export default Counter;