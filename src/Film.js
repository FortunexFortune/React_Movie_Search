import React, { Component } from 'react';
import axios from 'axios';
import FilmHistory from './FilmHistory';

class Film extends Component {

    constructor() {
        super();
        this.state = {
            films: [],
            noFilm: [{ Title: " !! Not Found !!", Year: "!! Year not Found !! ", Type: "!! Type Not Found !!", imdbID: "" }],
            previousFilm: "",
        }
    }

    componentDidMount = () => {
        axios.get("http://www.omdbapi.com/?s=" + this.props.userInput + "&apikey=89c84d51")
            .then(response => {
                console.log(" Response satus :", response.data.Response);
                if (response.data.Response === "True") {
                    this.setState({
                        films: response.data.Search
                    });
                    console.log(this.state.films);
                    this.setState({
                        previousFilm: this.props.userInput
                    });
                }
                else {
                    this.setState({
                        films: this.state.noFilm
                    });
                }
            })
    }

    render() {
        return (
            <div>
                <div >
                    <FilmHistory previousFilm={this.state.previousFilm} componentDidMount={this.componentDidMount} />
                    {(this.state.films.map((film) =>
                        <div className="dot" key={film.imdbID}>
                            <b /> Title :   {film.Title}
                            <br /> Year :   {film.Year}
                            <br /> Type :   {film.Type}
                            <br /> <img src={film.Poster} alt="" />
                        </div>)
                    )}
                </div>
            </div>
        )
    }
}
export default Film;
