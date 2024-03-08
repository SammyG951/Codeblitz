import React from "react";

function Snippet(props){
    const snippet = props.text;

    return (
        <p>
            {snippet.map((word, index) => (
                <span key={index} style={{fontWeight: index === props.highlightIndex ? 'bold' : 'normal'}}>
                    {word}{' '}
                </span>
            ))}
        </p>
    );
}

export default Snippet;