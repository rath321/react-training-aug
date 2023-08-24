import { counterActions } from "./CounterActions";
import { useCounter } from "./CounterContext";

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

export default Counter;