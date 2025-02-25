import "./App.css";
import Greetings from "../Greetings/Greetings";
import Date from "../Date/Date";

function App() {
    return (
        <div className="App">
            <p>Hello from App.js</p>
            <Date />

            <hr />

            <Greetings />
            <Greetings />
            <Greetings />
        </div>
    );
}

export default App;
