import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";

import "./App.css";
import UpdateForm from "./components/UpdateSubscriber/UpdateForm";
class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header />
                    <Switch>
                        <Route path="/update/:id" component={UpdateForm} />
                        <Route path="/add" component={Form} />
                        <Route path="/" component={Home} />
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
