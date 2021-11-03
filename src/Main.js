/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import AnimalsList from './AnimalsList';
import Home from "./Home";
import About from "./About";
import AnimalSingle from "./AnimalSingle";

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path = '/' exact component = {Home} />
                    <Route path = '/animals' exact component = {AnimalsList} />
                    <Route path = '/about' component = {About} />
                    <Route path = '/animals/:id' component = {AnimalSingle} />
                </Switch>
            </main>
        );
    };
};

export default Main;