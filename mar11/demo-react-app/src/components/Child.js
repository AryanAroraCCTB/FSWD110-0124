import { useEffect } from "react";
import "./Child.css";

function Child(props) {
    useEffect(() => {
        console.log("Child counter updated");
    }, [props.counter]);

    return (
        <div className="Child">
            Child Component
            <p>Counter from Parent {props.counter}</p>
            <button onClick={() => props.setCounter(props.counter * 10)}>Counter *10</button>
            <button onClick={() => props.setCounter(props.counter / 10)}>Counter /10</button>
        </div>
    );
}

export default Child;
