import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines , SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {
  displayWeather(cityData){
    const temps = cityData.list.map(weather => { return (weather.main.temp - 273.15)})
    console.log('temps',temps);
    const pressures = cityData.list.map(weather => { return weather.main.pressure})
    const humidities = cityData.list.map(weather => { return weather.main.humidity})

    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
        <Sparklines data={temps} height={100} width={130}>
          <SparklinesLine color="red"/>
        </Sparklines>
        </td>
        <td>
          <Sparklines data={pressures} height={100} width={130}>
            <SparklinesLine color="green"/>
          </Sparklines>
        </td>
        <td>
          <Sparklines data={humidities} height={100} width={130}>
            <SparklinesLine color="blue"/>
          </Sparklines>
        </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.displayWeather)}
        </tbody>
      </table>
    )
  }
}
function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
