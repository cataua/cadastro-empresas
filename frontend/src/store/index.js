import { configureStore } from "@reduxjs/toolkit";
import stateReducer from '../reducers/state';

export default configureStore({
    reducer: {
        state: stateReducer
    }
});