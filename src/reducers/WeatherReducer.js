import WeatherConstants from '../constants/WeatherConstants';
import {reject} from 'lodash';

const WeatherReducer = (state={list: []}, action) => {
    switch(action.type) {
        case WeatherConstants.ADD:
            return {
                list: [
                    ...reject(state.list, ['name', action.model.name]),
                    action.model
                ],
                actual: action.model
            };
        case WeatherConstants.SHOW: 
            let actual = {...state.list[action.index]};
            let list = [
                ...state.list.slice(0, action.index),
                ...state.list.slice(action.index -1, state.list.length),
                actual
            ]
            return {
                list,
                actual
            }
        case WeatherConstants.UPDATE_FILTER:
            return {
                ...state,
                filter: action.value
            }
        default: 
            return state;
    }
}

export default WeatherReducer;