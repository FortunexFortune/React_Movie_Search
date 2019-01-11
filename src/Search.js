import React, { Component } from 'react';
import Film from './Film';
class Search extends Component {
    constructor() {
        super();
        this.state = {
            filmName: "dragon ball super broly",
        }
    }
    titleChanger = (event) => {
        this.setState({ filmName: event.target.value });
    }

    render() {
        return (
            <div >
                <input type="text" name="search" placeholder="Film Name" onChange={this.titleChanger}></input><br />
                <p> {this.state.filmName} </p>
                <Film userInput={this.state.filmName} />
            </div>
        );
    }
}

export default Search;
