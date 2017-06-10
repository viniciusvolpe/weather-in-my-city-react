import React from 'react';
import PropTypes from 'prop-types';
import WeatherActionCreator from '../action-creators/WeatherActionCreator';

class Search extends React.Component {
    onClickLimpar(e){
        this.refs.inputSearch.value = '';
    }
    onBlur = () => {
        this.context.store.dispatch(WeatherActionCreator.updateFilterAction(this.refs.inputSearch.value));
    }
    render(){
        return (
            <form className="form-inline">
                <input onBlur={this.onBlur} ref="inputSearch" type="text" className="form-control" style={{width: '80%'}} minLength="3" required="" placeholder="Digite o nome da cidade"/>
                <button className="btn btn-default" type="button" onClick={() => this.props.onClickSearch()} title="Consultar">
                    <i className="glyphicon glyphicon-search"></i>
                </button>
                <button className="btn btn-default" type="button" onClick={(e) => this.onClickLimpar(e)} title="Limpar">
                    <i className="glyphicon glyphicon-erase"></i>
                </button>
            </form>
        );
    } 
}

Search.contextTypes = {
  store: PropTypes.object
}

export default Search;