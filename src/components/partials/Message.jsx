import React from "react";

function Message(props){
    return(
        <div>
            <p id="message">{props.text}</p>
            <p id="time"></p>
        </div>
    );
}

export default Message;