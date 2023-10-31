import React from 'react';
import '../Tag/Tag.css';

function Tag (props)  {
    return (
        <div className="tagContainer">
        <span className="tagButton">{props.tag}</span>
    </div>
    );
};
export default Tag;