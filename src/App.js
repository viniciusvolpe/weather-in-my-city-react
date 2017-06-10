import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './title/Title';
import Search from './search/Search';
import WeatherCard from './weather-card/WeatherCard';
import History from './history/History';
import WeatherService from './service/WeatherService';

class App extends Component {
  constructor(){
    super();
    this.state = {
      filter: '',
      list: []
    };
    this.service = new WeatherService();
  }
  onClickSearch(){
    this.context.store.dispatch(this.service.get(this.state.filter));
    this.refs.search.onClickLimpar();
  }
  componentWillMount() {
    let {store} = this.context;
    store.subscribe(() => {
      let {actual, list, filter} = store.getState();
      this.setState({...this.state, list, actual, filter});
    });
  }

  render() {
    return (
      <div>
        <Title title="Consulta de clima"/>
        <History list={this.state.list}/>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 col-sm-offset-3 col-md-offset-3 col-lg-offset-3">
            <Search ref="search" value={this.state.filter} onClickSearch={() => this.onClickSearch()}/>
            <hr/>
            <WeatherCard model={this.state.actual} />
          </div>
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object
}

export default App;
