import WeatherActionCreator from '../action-creators/WeatherActionCreator'
import History from './History'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        actual: state.actual,
        list: state.list
    }
}
const mapDspatchToProps = dispatch => {
    return {
        show: index => {
            dispatch(WeatherActionCreator.showAction(index));
        }
    }
}

export default connect(mapStateToProps, mapDspatchToProps)(History)