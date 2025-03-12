import { useState, useEffect } from "react";
import Child from "./Child";
import "./Parent.css";

function Parent() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Parent counter updated");
    }, [counter]);

    return (
        <div className="Parent">
            Parent Component
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Counter +1</button>
            <button onClick={() => setCounter(counter - 1)}>Counter -1</button>
            <Child counter={counter} setCounter={setCounter} />
        </div>
    );
}

export default Parent;
