import React, {Component} from 'react';
import Card from './Card';
import animals from './animals';


class AnimalsList extends Component {
    render() {
        return (
            <>
                {animals.map((item) => (
                    <Card name = {item.name} src = {'https://source.unsplash.com/1600x900/?' + item.name} />
                ))}
            </>
        );
    };
};

export default AnimalsList;