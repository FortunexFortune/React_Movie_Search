import React, { Component } from 'react';
import axios from 'axios';
class Film extends Component {

    constructor() {
        super();
        this.state = {
            films: []
        }
    }

    componentDidMount = () => {

        axios.get("http://www.omdbapi.com/?s=" + this.props.userInput + "&apikey=89c84d51")
            .then(response => {
                console.log(response.data.Search);
                if (response.data.Search !== undefined) {
                    this.setState({
                        films: response.data.Search
                    });
                }
                else {
                    this.setState({
                        films: []
                    });
                }
            }).catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <button onClick={this.componentDidMount} type="button">Click Me!</button>
                <br />
                {(this.state.films.map(film =>
                    <div>
                        <b> Title :</b> : {film.Title}
                        <br /><b> Year :</b> {film.Year}
                        <br /><b> Type :</b>{film.Type}
                        <br /> <img src={film.Poster} />
                    </div>)
                )}
            </div>
        )
    }
}
export default Film;
