import axios from 'axios';
import WeatherActionCreator from '../action-creators/WeatherActionCreator'
export default class WeatherService {
    constructor(){
        axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5';
        this.params = {
            appid: "51e241166a84a95fb34e5b7aed9eb915",
            lang: "pt",
            units: "metric"
        }
    }

    get(city){
        return dispatch => {
            this.params.q = city;
            axios.get('/weather', {params: this.params})
            .then(
                response => dispatch(WeatherActionCreator.addAction(response.data))
            );
        }
    }
}