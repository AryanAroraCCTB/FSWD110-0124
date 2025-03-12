import { useState } from "react";
import "./Hooks.css";

function Hooks() {
    let counter_ = 0; // old way

    const [counter, setCounter] = useState(0);
    const [number, setNumber] = useState(10);

    const handleIncrement = (event) => {
        counter_ += number; // old way
        setCounter(counter + number);
    };

    const handleDecrement = (event) => {
        counter_ -= number; // old way
        setCounter(counter - number);
    };

    const handleNumberChange = (event) => {
        // setNumber(Number(event.target.value));
        setNumber(parseInt(event.target.value));
    };

    return (
        <div className="Hooks">
            <div className="counter">
                <div>Counter Old: {counter_}</div>

                <div>Counter New: {counter}</div>
            </div>

            <hr />

            <div className="inputs">
                <input name="num" value={number} type="number" placeholder="Enter a number" onChange={handleNumberChange} />
            </div>

            <div className="update-btns">
                <button onClick={handleIncrement}>Increment Counter +{number}</button>
                <button onClick={handleDecrement}>Decrement Counter -{number}</button>
            </div>
        </div>
    );
}

export default Hooks;
