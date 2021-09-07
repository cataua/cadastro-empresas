import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const api = {
    url: 'http://localhost:5050'
}


const getCompanies = createAsyncThunk('companies/getAll', async () => {
    const response = await axios.get(api.url);
    return response.data;
});

const getCompany = createAsyncThunk('companies/get', async (cnpj) => {
    const response = await axios.get(`${api.url}/cnpj/${cnpj}`);
    return response.data;
});

const saveCompany = createAsyncThunk('companies/save', async (company) => {
    const response = await axios.post(`${api.url}`, company);
    return response.data;
})

export const companySlice = createSlice({
    name: 'company',
    initialState: {
        posts: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        getAll: (state) => state.posts,
        get: (state, cnpj) => state.posts.find(post => post.cnpj === cnpj),
        save: (state, company) => {

        }
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
    }
});


export { getCompanies, getCompany, saveCompany };

export default companySlice.reducer;