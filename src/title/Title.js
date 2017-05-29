import React from 'react';
function Title(props){
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="text-center">{props.title}</h3>
            </div>
        </div>
    );
}
export default Title;