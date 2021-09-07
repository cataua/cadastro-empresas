import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const api = {
    url: 'http://localhost:5050'
}


const getCompanies = createAsyncThunk('companies/getAll', async () => {
    const response = await axios.get(api.url);
    return response.data.data;
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
        companies: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        getAll: (company) => company.companies,
        get: (company, cnpj) => company.companies.find(c => c.cnpj === cnpj),
        save: (company, body) => {

        }
    },
    extraReducers(builder) {
        builder
            .addCase(getCompanies.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getCompanies.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.companies = action.payload;
            })
            .addCase((getCompanies.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            }))
    }
});


export { getCompanies, getCompany, saveCompany };

export default companySlice.reducer;