import "./App.css";
import Greetings from "../Greetings/Greetings";
import Dates from "../Dates/Dates";

function App() {
    const num = 11;
    return (
        <div className="App">
            <p>Hello from App.js</p>
            <p>My number is: {num}</p>

            <Dates />

            <hr />

            <Greetings name="A1" age="25" />
            <Greetings name="B1" age="26" />
            <Greetings name="C1" age="27" />
        </div>
    );
}

export default App;
