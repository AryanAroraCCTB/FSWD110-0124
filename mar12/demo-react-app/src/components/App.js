import "./App.css";
import ComplexForm from "./ComplexForm";
import SimpleForm from "./SimpleForm";

function App() {
    return (
        <div className="App">
            <p>Simple Form</p>
            <SimpleForm />

            <p>Complex Form</p>
            <ComplexForm />
        </div>
    );
}

export default App;
