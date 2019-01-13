import React, { Component } from 'react';
import Film from './Film';
class Search extends Component {
    constructor() {
        super();
        this.state = {
            filmName: "One piece",
        }
    }
    titleChanger = (event) => {
        this.setState({ filmName: event.target.value });
    }

    render() {
        return (
            <div >
                <input type="text" name="search" placeholder="Film Name" onChange={this.titleChanger}></input><br />
                {/* <p> {this.state.filmName} </p> */}
                <br />
                <Film userInput={this.state.filmName} />
            </div>
        );
    }
}

export default Search;
