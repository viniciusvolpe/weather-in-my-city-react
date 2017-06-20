import React from 'react';

const History = (props) => {
    return (
        <ol className="breadcrumb">
            {props.list.map((model, index) => 
                <li key={model.name}>
                    {model.name === props.actual.name ?
                        model.name :
                        <a href='javascript:void(0)' 
                            onClick={() => props.show(index)}
                        >{model.name}</a>
                    }
                </li>
            )}
        </ol>
    );
};

export default History;