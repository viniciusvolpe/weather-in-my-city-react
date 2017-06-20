import React from 'react';

class Search extends React.Component {
    onClickLimpar = (e) => {
        this.refs.inputSearch.value = '';
    }
    onChange = () => {
        this.props.updadeFilter(this.refs.inputSearch.value);
    }
    handleSubmit = (event) => {
        this.props.onClickSearch();
        event.preventDefault();
    }
    render(){
        return (
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <input onChange={this.onChange} ref="inputSearch" type="text" className="form-control" style={{width: '80%'}} minLength="3" required="" placeholder="Digite o nome da cidade"/>
                <button className="btn btn-default" type="submit" title="Consultar">
                    <i className="glyphicon glyphicon-search"></i>
                </button>
                <button className="btn btn-default" type="button" onClick={this.onClickLimpar} title="Limpar">
                    <i className="glyphicon glyphicon-erase"></i>
                </button>
            </form>
        );
    } 
}

export default Search;