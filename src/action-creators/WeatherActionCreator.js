import WeatherConstants from '../constants/WeatherConstants';
export default class WeatherActionCreator {
    static addAction(model){
        return {type: WeatherConstants.ADD, model};
    }
    static showAction(index){
        return {type: WeatherConstants.SHOW, index};
    }
    static updateFilterAction(value) {
        return {type: WeatherConstants.UPDATE_FILTER, value}
    }
}