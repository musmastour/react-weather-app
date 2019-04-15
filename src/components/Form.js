import React from 'react'
import Button from 'react-bootstrap/Button'

class Form extends React.Component {

    render() {
        return(
            <div>
                 <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City..."/>
                    <input type="text" name="country" placeholder="Country..."/>
                    <button variant="primary" size="lg" >Get weather</button>
                 </form>
            </div>
        );
    }
}

export default Form