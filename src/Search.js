import React, { Component } from 'react';
import Film from './Film';
class Search extends Component {
    constructor() {
        super();
        this.state = {
            filmName: "one piece",
        }
    }
    titleChanger = (event) => {
        this.setState({ filmName: event.target.value });
    }

    render() {
        return (
            <div >
                <Film userInput={this.state.filmName} titleChanger = {this.titleChanger} />
            </div>
        );
    }
}

export default Search;
