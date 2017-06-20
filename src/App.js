import React, { Component } from 'react'
import Title from './title/Title'
import Search from './search/Search'
import WeatherCard from './weather-card/WeatherCard'
import HistoryContainer from './history/HistoryContainer'

class App extends Component {

  onClickSearch = () => {
    this.props.find(this.props.filter);
    this.refs.search.onClickLimpar();
  }

  render() {
    return (
      <div>
        <Title title="Consulta de clima"/>
        <HistoryContainer />
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 col-sm-offset-3 col-md-offset-3 col-lg-offset-3">
            <Search ref="search" updadeFilter={this.props.updateFilter} onClickSearch={this.onClickSearch}/>
            <hr/>
            <WeatherCard model={this.props.actual} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
