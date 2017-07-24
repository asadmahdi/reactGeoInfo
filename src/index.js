import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';


import reducers from './reducers';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import HomePage from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\components\\home_page';
import Countries from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\components\\countries';
import Country from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\components\\country';
import Cities from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\containers\\cities';
import City from 'C:\\Users\\Syed\\Documents\\reactProj\\ReduxSimpleStarter\\src\\components\\city';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <Switch>
      <Route path="/cities" component={Cities} />
      <Route path="/countries" component={Countries} />
      <Route path="/country/:id" component={Country}/>
      <Route path="/city/:id" component={City}/>
      <Route path="/" component={HomePage} />


    </Switch>
    </div>

   </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid'));
