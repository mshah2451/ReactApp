import 'materialize-css/dist/css/materialize.css';
import'./Css/styles.css';
import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducer';
import reduxThunk from'redux-thunk';

import axios from 'axios';
window.axios=axios;
const store=createStore(reducers,{},applyMiddleware(reduxThunk));
ReactDom.render(
<Provider store={store}><App/></Provider>
,document.querySelector('#root'));