import React from "react";

const Square = (props) => {
    return (
        <div className="square" onClick={props.click}>
            <h1>{props.text}</h1>
        </div>
    );
}

export default Square;