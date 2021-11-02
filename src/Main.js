/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from "react";
import { Switch, Route, useRouteMatch} from 'react-router';
import AnimalsList from './AnimalsList';
import Home from "./Home";
import About from "./About";

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path = '/' exact component = {Home} />
                    <Route path = '/animals' component = {AnimalsList} />
                    <Route path = '/about' component = {About} />
                </Switch>
            </main>
        );
    };
};

export default Main;