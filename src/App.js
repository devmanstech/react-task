import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Parent from "./components/Parent";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path="/parent" component={Parent}/>
            </Switch>
        </Router>
    )
}

export default App;
