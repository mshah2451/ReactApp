import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import {Master} from './UIComponent';
import { connect } from 'react-redux';
import * as action from '../Action';
class App extends Component {
    componentDidMount() {
   this.props.fetchUser();
    }
    render() {
        return (
            <Master/>
        );
    }
};

export default connect(null,action)(App);