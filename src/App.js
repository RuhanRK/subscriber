import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";

import "./App.css";
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/add" component={Form} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default App;
