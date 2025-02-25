import "./Greetings.css";

function Greetings(props) {
    console.log("Greeting's props", props); // { name: "", age: "" }
    const name = props.name;
    const age = props.age;

    const element = <h5>Hello!</h5>;
    return (
        <div>
            {element}
            <p>
                Greetings to {name} @ {age}
            </p>
        </div>
    );
}

export default Greetings;
