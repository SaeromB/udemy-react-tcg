// UserOutput needs two paragraphs
import React, { Component } from 'react';

const UserOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>UserName: {props.userName}</p>
            <p>What is you're name?</p>
        </div>
    )
};

export default UserOutput;