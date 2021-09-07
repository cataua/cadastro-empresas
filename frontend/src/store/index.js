import { configureStore } from "@reduxjs/toolkit";
import stateReducer from '../reducers/state';
import companyReducer from '../reducers/company.reducer';

export default configureStore({
    reducer: {
        state: stateReducer,
        company: companyReducer,
    }
});