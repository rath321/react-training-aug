import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, decrementAsync, decrementBy, increment, incrementAsync, incrementBy, selectCount } from '../../features/counter/counterSlice';

import styles from './CounterComponent.module.css';

const CounterComponent = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-center">
                <h1 className="text-info">Counter Component</h1>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <h3>Increment / Decrement By 1</h3>
                <h2 className="text-primary text-center">
                    Current Count: {count}
                </h2>
                <button className="btn btn-primary" onClick={() => dispatch(increment())}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-primary" onClick={() => { dispatch(decrement()); }}>
                    <span className='fs-4'>-</span>
                </button>
                <hr />
                <button className="btn btn-success" onClick={() => dispatch(incrementBy(5))}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-success" onClick={() => { dispatch(decrementBy(5)); }}>
                    <span className='fs-4'>-</span>
                </button>
                <hr />
                <button className={`${styles.asyncButton} btn btn-warning`} onClick={() => dispatch(incrementAsync(10))}>
                    <span className='fs-4'>+</span>
                </button>
                <button className={`${styles.asyncButton} btn btn-warning`} onClick={() => dispatch(decrementAsync(10))}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
};

export default CounterComponent;