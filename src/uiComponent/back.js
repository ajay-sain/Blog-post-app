import React from 'react';
import { withRouter } from 'react-router-dom';

const Back = (props) => {
    return (
        <div className="back" onClick={()=>props.history.goBack()}><span></span></div>
    )
}

export default withRouter(Back);