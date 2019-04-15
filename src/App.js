import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '379effcf689443d768381a7a150e7348'

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: ''
      })
    } else {
      this.setState({
        error: 'Please, enter the values'
      })
    }
    console.log(this.state)
  }

  getImage = async(e) => {
    if (this.state.icon != undefined) {
      const { icon }  = this.state
      const api_call = await fetch(`http://openweathermap.org/img/w/${icon}.png`);
      
      this.setState({
        icon
      })
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">

            <div className="title col-xs-5">
                  <Titles/>
            </div>

            <div className="col-xs-7">
              <div className="form row">
                <Form getWeather={this.getWeather}/>
              </div>
              <div className="weather row">

                    <Weather 
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      icon={this.state.icon}
                      error={this.state.error}
                    />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
          
export default App;
