import React from 'react'

class Weather extends React.Component {

    render() {
        return(
            <div className="weather-text">
                { this.props.city && this.props.country && <h1> { this.props.city }, { this.props.country }</h1> }
                { this.props.description && <p>{ this.props.description }</p> }
                { this.props. temperature && <h2>{ Math.round(this.props.temperature) }°C</h2> }
                {this.props.icon && <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`}/> }
                { this.props.error && <p>{ this.props.error }</p> }
            </div>
        );
    }
}

export default Weather