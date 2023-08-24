import { useReducer } from "react";

const counterState = { count: 0 };

const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload };
        case "decrement":
            return { count: state.count - action.payload };
        default:
            return state;
    }
}

const counterActions = {
    increment: 'increment',
    decrement: 'decrement',
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, counterState);

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={state.count} readOnly />
                <button className="btn btn-info"
                    onClick={() => { dispatch({ type: counterActions.increment, payload: 1 }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={() => { dispatch({ type: counterActions.decrement, payload: 1 }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

const CounterSibling = () => {
    const [state, dispatch] = useReducer(counterReducer, counterState);

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Sibling Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={state.count} readOnly />
                <button className="btn btn-info"
                    onClick={() => { dispatch({ type: counterActions.increment, payload: 1 }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={() => { dispatch({ type: counterActions.decrement, payload: 1 }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

const ReducerHookDemo = () => (
    <>
        <Counter />
        <hr />
        <CounterSibling />
    </>
);

export default ReducerHookDemo;