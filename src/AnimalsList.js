import React, {Component} from 'react';
import animals from './animals';
import AnimalsCard from './AnimalsCard';

class AnimalsList extends Component {
    state = {
        searchItem: '',
    };
    searchInputHandler = (event) => {
        this.setState({
            searchItem: event.target.value,
        });
    };

    render() {

        const animalsFilter = animals.filter((animal) => {
            return animal.name.includes(this.state.searchItem.toLowerCase());
        });

        const animalslisting = animalsFilter.map((item) => (
            <AnimalsCard key = {item.name} name = {item.name} src={'https://source.unsplash.com/1600x900/?' + item.name} />
        ));

        return (
            <>
            <input type='text' name='search' onChange={this.searchInputHandler} placeholder='Search...' autoFocus />
            {animalslisting}
            </>
        );
    };
};


export default AnimalsList;