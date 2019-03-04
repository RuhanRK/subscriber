import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";

import "./App.css";
import UpdateForm from "./components/UpdateSubscriber/UpdateForm";
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/update/:id" component={UpdateForm} />
                    <Route path="/add" component={Form} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default App;
