import React, { Component } from 'react';
import Title from './title/Title';
import Search from './search/Search';
import WeatherCard from './weather-card/WeatherCard';
import WeatherService from './service/WeatherService';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: ''
    };
    this.service = new WeatherService();
  }
  handleChange(e){
    this.setState({value: e.target.value});
  }
  onClickSearch(){
    this.service.get(this.state.value).then((response) =>{
      let newState = Object.assign({}, this.state, {});
      newState.model = response.data;
      this.setState(newState);
    });
  }
  render() {
    return (
      <div>
        <Title title="Consulta de clima"/>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 col-sm-offset-3 col-md-offset-3 col-lg-offset-3">
            <Search value={this.state.value} handleChange={(e) => this.handleChange(e)} onClickSearch={() => this.onClickSearch()}/>
            <hr/>
            <WeatherCard model={this.state.model} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
