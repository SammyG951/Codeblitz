import React, {useState} from "react";
import Snippet from "../partials/Snippet.jsx";
import Message from "../partials/Message.jsx";

function Game() {
    const phrase = "He shaved the peach to prove a point. Greetings from the real universe. Not all people who wander are lost.";

    const typedValueElement = document.getElementById('typed-value');

    const[codeSnippet, setCodeSnippet] = useState("");

    function startGame(){
        setCodeSnippet(phrase);

        typedValueElement.type = 'text';
        typedValueElement.value = '';
        typedValueElement.focus();
    }

    return(
        <div>
            <br />

            <Snippet 
                text={codeSnippet}
            />
            <Message />

            <br />

            <div>
                <input 
                id="typed-value"
                type="hidden" 
                aria-label="current word"/>
                <button 
                id="start"
                type="button"
                onClick={startGame}>
                    Start
                </button>
            </div>
        </div>
    );
}

export default Game;