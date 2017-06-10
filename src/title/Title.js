import React from 'react';
const Title = (props) => {
    return (
        <div className="panel panel-primary" style={{marginBottom: 0}}>
            <div className="panel-heading">
                <h3 className="text-center">{props.title}</h3>
            </div>
        </div>
    );
}
export default Title;