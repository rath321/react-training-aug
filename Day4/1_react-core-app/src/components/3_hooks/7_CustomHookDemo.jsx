import { createContext, useContext, useReducer } from "react";

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
    const context = useCounter();

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={context.counterState.count} readOnly />
                <button className="btn btn-info"
                    onClick={() => { context.counterDispatch({ type: counterActions.increment, payload: 1 }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={() => { context.counterDispatch({ type: counterActions.decrement, payload: 1 }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

const CounterSibling = () => {
    const context = useCounter();

    return (
        <>
            <div className="text-center">
                <h3 className="text-info">Counter Sibling Component</h3>
            </div>
            <div className="d-grid gap-2 mx-auto col-6">
                <input type="text" className="form-control form-control-lg" value={context.counterState.count} readOnly />
                <button className="btn btn-info"
                    onClick={() => { context.counterDispatch({ type: counterActions.increment, payload: 1 }); }}>
                    <span className='fs-4'>+</span>
                </button>
                <button className="btn btn-info"
                    onClick={() => { context.counterDispatch({ type: counterActions.decrement, payload: 1 }); }}>
                    <span className='fs-4'>-</span>
                </button>
            </div>
        </>
    );
}

const CounterContext = createContext();

function useCounter() {
    const context = useContext(CounterContext);

    if (!context) {
        throw new Error('useCounter must be used within a CounterProvider');
    }

    return context;
}

const CustomHookDemo = () => {
    const [state, dispatch] = useReducer(counterReducer, counterState);

    return (
        <CounterContext.Provider value={{ counterState: state, counterDispatch: dispatch }}>
            <Counter />
            <hr />
            <CounterSibling />
        </CounterContext.Provider >
    );
};

export default CustomHookDemo;