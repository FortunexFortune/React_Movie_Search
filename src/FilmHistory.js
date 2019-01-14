import React, { Component } from 'react';

class FilmHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: []
        }
    }

    historyUpdate() {
            let arr = this.state.history.slice();
            arr.push("  " + this.props.previousFilm.toUpperCase() + " - ");
            this.setState({
                history: arr
            });
        { console.log(this.state.history) }
    }

    clickHandle = () => {
        this.historyUpdate();
        this.props.componentDidMount();
    }

    render() {
        return (
            <div >
                <br></br>
                <button onClick={this.clickHandle} className="button" ><span>Click Me</span></button>
                <p>
                    Search History :
                     {this.state.history[this.state.history.length - 4]}
                    {this.state.history[this.state.history.length - 3]}
                    {this.state.history[this.state.history.length - 2]}
                    {this.state.history[this.state.history.length - 1]}
                </p>
            </div>
        );
    }
}
export default FilmHistory;



