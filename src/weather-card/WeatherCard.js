import React from 'react';

const WeatherCard = (props) => {
    if(!props.model) return (
        <div className="alert alert-success" role="alert">Consulte uma cidade.</div>
    );
    let images = props.model.weather.map((weather, i) => {
        return <img key={i} src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt=""/>
    });
    return (
        <div className="panel panel-default">
            <div className="panel-body">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-2">
                        {images}
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-8">
                        <h2>
                            <span>{props.model.name}</span>
                            <small>{props.model.sys.country}</small>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <span>Tempretatura: </span>
                        <label>{`${props.model.main.temp}°`}</label>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <span>Minima: </span>
                        <label>{props.model.main.temp_min}</label>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <span>Maxima: </span>
                        <label>{props.model.main.temp_max}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <span>Umidade: </span>
                        <label>{props.model.main.humidity}</label>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <span>Pressão: </span>
                        <label>{props.model.main.pressure}</label>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <span>Velocidade do vento: </span>
                        <label>{props.model.wind.speed}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;