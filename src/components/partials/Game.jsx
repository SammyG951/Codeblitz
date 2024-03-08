import React, {useState, useRef, useEffect} from "react";
import Snippet from "../partials/Snippet.jsx";
import Message from "../partials/Message.jsx";

function Game() {
    const inputRef = useRef(null);


    useEffect(() => {
        inputRef.current.focus();
    })

    const phrase = "He shaved the peach to prove a point.";
    const [words, setWords] = useState([]);
    const [wordIndex, setWordIndex] = useState(0);

    const[message, setMessage] = useState("");
    const[buttonTextDisplay, setButtonTextDisplay] = useState({
        text: "Start",
        display: ""
    });
    const[typedValue, setTypedValue] = useState({
        value: "",
        type: "hidden"
    })
    const[startTime, setStartTime] = useState(0);
    const[isError, setIsError] = useState(false);

    function startGame(){
        setMessage("");
        
        const phraseWords = phrase.split(' ');
        setWords(phraseWords);
        setWordIndex(0);

        setTypedValue(() => {
            return {value: "", type: "text"}
        })

        setButtonTextDisplay(() => {
            return {display: "none"};
        });

        setStartTime(Date.now());
    }

    function handleInput(event){
        const currentWord = words[wordIndex];
        const value = event.target.value;
        setTypedValue(() => {return { value: value } });

        if (value === currentWord && wordIndex === words.length - 1){
            const elapsedTime = (new Date().getTime() - startTime) / 1000;
            const wpm = (words.length / elapsedTime) * 60;
            setMessage(`CONGRATULATIONS! You finished in ${elapsedTime} seconds at ${wpm.toFixed(2)} words per minute.`)

            setTypedValue(() => { return {type: "hidden"} })

            setButtonTextDisplay(() => {
                return {text: "Play Again?", display: ""};
            });
        } else if (value.endsWith(' ') && value.trim() === currentWord) {
            setTypedValue(() => { return {value: ""} });
            setWordIndex(prevIndex => prevIndex + 1);
        } else if (currentWord.startsWith(value)){
            setIsError(false);
        } else {
            setIsError(true);
        }
    }

    return(
        <div>
            <br />

            <Snippet 
                text={words}
                highlightIndex={wordIndex}
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
                style={{
                    backgroundColor: isError ? 'lightcoral' : '',
                    border: isError ? 'red' : ''
                }}
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