import React from 'react';
import PropTypes from 'prop-types';
import WeatherActionCreator from '../action-creators/WeatherActionCreator';

const History = (props, context) => {
    return (
        <ol className="breadcrumb">
            {props.list.map((model, index) => 
                <li key={model.name}>
                    {model.name === context.store.getState().actual.name ?
                        model.name :
                        <a href='javascript:void(0)' 
                            onClick={() => context.store.dispatch(WeatherActionCreator.showAction(index))}
                        >{model.name}</a>
                    }
                </li>
            )}
        </ol>
    );
};

History.contextTypes = {
  store: PropTypes.object
}

export default History;