import Counter from "./Counter";
import { CounterProvider } from "./CounterContext";
import CounterSibling from "./CounterSibling";

const CounterRoot = () => {
    return (
        <CounterProvider>
            <Counter />
            <hr />
            <CounterSibling />
        </CounterProvider>
    );
};

export default CounterRoot;