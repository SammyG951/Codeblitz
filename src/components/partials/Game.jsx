import React, {useState, useRef} from "react";
import Snippet from "../partials/Snippet.jsx";
import Message from "../partials/Message.jsx";

function Game() {
    const inputRef = useRef(null);

    const phrase = "He shaved the peach to prove a point. Greetings from the real universe. Not all people who wander are lost.";
    const [words, setWords] = useState([]);
    const [wordIndex, setWordIndex] = useState(0);

    const[codeSnippet, setCodeSnippet] = useState("");
    const[message, setMessage] = useState("");
    const[buttonTextDisplay, setButtonTextDisplay] = useState({
        text: "Start",
        display: ""
    });
    const[typedValue, setTypedValue] = useState({
        value: "",
        type: "hidden"
    })

    function startGame(){
        setMessage("");
        setCodeSnippet(phrase);
        
        const phraseWords = phrase.split(' ');
        setWords(phraseWords);
        setWordIndex(0);

        setTypedValue(() => {
            return {value: "", type: "text"}
        })
        focusInput();

        setButtonTextDisplay(() => {
            return {display: "none"};
        });
    }

    function handleInput(event){
        const currentWord = words[wordIndex];
        const value = event.target.value;
        setTypedValue(() => {return { value: value } });

        if (value === currentWord && wordIndex === words.length - 1){
            setTypedValue(() => { return {type: "hidden"} })

            setMessage("Finished");
            setButtonTextDisplay(() => {
                return {text: "Play Again?", display: ""};
            });
        } else if (value.endsWith(' ') && value.trim() === currentWord) {
            setTypedValue(() => { return {value: ""} });
            setWordIndex(prevIndex => prevIndex + 1);
        } else if (currentWord.startsWith(value)){
            //typedValueElement.className = 'form-control'
        } else {
            //typedValueElement.className = 'form-control error'
        }
    }

    function focusInput() {
        inputRef.current.focus();
    }

    return(
        <div>
            <br />

            <Snippet 
                text={codeSnippet}
            />
            <Message
                text={message}
            />

            <br />

            <div>
                <input 
                type={typedValue.type}
                value={typedValue.value}
                aria-label="current word"
                ref={inputRef}
                onChange={handleInput}
                />
                <button 
                id="start"
                type="button"
                onClick={startGame}
                style={{
                    display: buttonTextDisplay.display
                }}>
                    {buttonTextDisplay.text}
                </button>
            </div>
        </div>
    );
}

export default Game;