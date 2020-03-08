import React from 'react';

function Validation(props) {
    return (
        <div>
            {
                props.str.length < 5 ?
                "Text too short" :
                "Text long enough"
            }
        </div>
    );
}

export default Validation;