import React, { Component } from 'react';
import axios from 'axios';
import FilmHistory from './FilmHistory';

class Film extends Component {

    constructor() {
        super();
        this.state = {
            films: [],
            noFilm: [{ Title: " !! Not Found !!", Year: "!! Year not Found !! ", Type: "!! Type Not Found !!" }],
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
                    this.setState({
                        newTitle : response.data.Response
                    });
                    // console.log(this.state.films);
                }
                else {
                    this.setState({
                        films: this.state.noFilm
                    });
                    this.setState({
                        newTitle : response.data.Response
                    });
                    // console.log("Film Not Found : ", this.state.films);
                }
            })
    }

    render() {
        return (
            <div>
                <div >
                    {/* <FilmHistory history={this.props.userInput} response={this.state.newTitle}/> */}
                    <button onClick={this.componentDidMount} type="button">Click Me!</button>
                    <br />
                    <br />
                    {(this.state.films.map(film =>
                        <div className="dot" >
                            <b /> Title :  {film.Title}
                            <br /> Year :   {film.Year}
                            <br /> Type :   {film.Type}
                            <br /> <img src={film.Poster} />
                        </div>)
                    )}
                </div>
            </div>
        )
    }
}
export default Film;
