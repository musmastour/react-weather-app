import React from 'react'

class Weather extends React.Component {

    render() {
        return(
            <div className="weather-text">
                {this.props.icon && <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`}/> }
                { this.props.city && this.props.country && <h1> { this.props.city }, { this.props.country }</h1> }
                { this.props. temperature && <p>{ this.props.temperature }</p> }
                { this.props.humidity && <p>{ this.props.humidity }</p> }
                { this.props.description && <p>{ this.props.description }</p> }
                { this.props.error && <p>{ this.props.error }</p> }
            </div>
        );
    }
}

export default Weather