import App from './App'
import thunkMiddleware from 'redux-thunk'
import {connect} from 'react-redux'
import WeatherService from './service/WeatherService'
import WeatherActionCreator from './action-creators/WeatherActionCreator'

const mapStateToProps = state => {
    return {
        actual: state.actual,
        list: state.list,
        filter: state.filter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        find: filter => {
            dispatch(new WeatherService().get(filter))
        },
        updateFilter: newFilter => {
            dispatch(WeatherActionCreator.updateFilterAction(newFilter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);