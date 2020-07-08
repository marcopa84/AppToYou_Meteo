import React from 'react'
import request from 'superagent'

class Weather extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    componentDidMount() {
        request
            .get('http://api.weatherstack.com/current')
            .query({
                access_key: 'd639cd3210dfe45b88415bffd8029f65'
            })
            .query({
                query: 'rome'
            })
            .set('Accept', 'application/json')
            .end((err, resp) => {
                if (!err) {
                    console.log('Result:', resp.body.current.humidity);
                    this.setState({
                        weatherCity: resp.body.location.name,
                        weatherCond: resp.body.current.weather_descriptions,
                        weatherIconUrl: resp.body.current.weather_icons,
                        weatherTemperature: resp.body.current.temperature,
                        weatherHumidity: resp.body.current.humidity,
                        weatherPrecipitations: resp.body.current.precip,
                        // someData: resp.body
                    })
                }
            })
        }
        render() {
            
            return ( 
                < div id='weather' >
                    <div className='title'>
                        <h2>{this.state.weatherCity || 'waiting for response...'}</h2>
                        <img src={this.state.weatherIconUrl} alt=""></img>
                    </div>
                    <div className='informations'>
                        <h3>Condition: {this.state.weatherCond}</h3>
                        <h3>Temperature: {this.state.weatherTemperature} °C</h3>
                        <h3>Humidity: {this.state.weatherHumidity} %</h3>
                        <h3>Precipitations: {this.state.weatherPrecipitations} mm</h3>
                    </div>
                </div>
            )
        }
}
export default Weather ;
