import { createSlice } from '@reduxjs/toolkit';

const inititalState = {
    count: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState: inititalState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementBy: (state, action) => {
            state.count += action.payload;
        },
        decrementBy: (state, action) => {
            state.count -= action.payload;
        }
    }
});

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = function (amount) {
//     return function (dispatch) {
//         setTimeout(() => {
//             dispatch(incrementBy(amount));
//         }, 1000);
//     }
// }

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementBy(amount));
    }, 1000);
}

export const decrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(decrementBy(amount));
    }, 1000);
}

export const selectCount = (state) => state.counter.count;

export const { increment, decrement, incrementBy, decrementBy } = counterSlice.actions;

export default counterSlice.reducer;