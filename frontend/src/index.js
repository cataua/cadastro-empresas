import React  from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import store from './store';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';

import { getCompanies } from "./reducers/company.reducer";

import '@fontsource/roboto';
import './index.css';

import Container from './Components/Container';
import Header from './Components/Header';
import Home from './Components/Home';
import { AddCompany, ListCompany, ViewCompany } from './Components/Company';

store.dispatch(getCompanies());

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <Container>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/add'>
                    <AddCompany />
                </Route>
                <Route path='/company'>
                    <ListCompany />
                </Route>
                <Route path='/company/:cnpj'>
                    <ViewCompany />
                </Route>
            </Switch>
        </Container>
      </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
