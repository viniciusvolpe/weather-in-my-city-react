import React from 'react';

export default class Search extends React.Component {
    onClickLimpar(e){
        this.refs.inputSearch.value = '';
        this.props.handleChange(e);
    }
    render(){
        return (
            <form className="form-inline">
                <input onChange={(e) => this.props.handleChange(e)} ref="inputSearch" type="text" className="form-control" style={{width: '80%'}} minLength="3" required="" placeholder="Digite o nome da cidade"/>
                <button className="btn btn-default" type="button" disabled={!this.props.value} onClick={() => this.props.onClickSearch()} title="Consultar">
                    <i className="glyphicon glyphicon-search"></i>
                </button>
                <button className="btn btn-default" type="button" onClick={(e) => this.onClickLimpar(e)} title="Limpar">
                    <i className="glyphicon glyphicon-erase"></i>
                </button>
            </form>
        );
    } 
}