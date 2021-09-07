import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const api = {
    url: process.env.REACT_APP_RECEITAWS,
};


const get = createAsyncThunk('receitaws', async () => {
    const response = await axios.get(api.url);
    return response.data;
});

export const receitaSlice = createSlice({
    name: 'receitaws',
    initialState: {
        company: {},
        status: 'idle',
        error: null,
    },
    reducers: {
        get: (state, cnpj) => state.posts.find(post => post.cnpj === cnpj),
        },
    extraReducers(builder) {
        builder
            .addCase(getCompanies.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getCompanies.fulfilled, (state, action) => {
                state.status = 'succeeded';
            })
            .addCase((getCompanies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            }))
            .addCase(getCompany.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getCompany.fulfilled, (state, action) => {
                state.status = 'succeeded';
            })
            .addCase((getCompany.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            }))
    }
});



export { get };

export default receitaSlice.reducer;