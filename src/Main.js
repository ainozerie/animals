/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from "react";
import AnimalsList from './AnimalsList';


class Main extends Component {
    render() {
        return (
            <main>
                <AnimalsList />
            </main>
        );
    };
};

export default Main;