import { useState } from "react";
import "./App.css";
import EventHandling from "./EventHandling";
import Hooks from "./Hooks";
import Hooks_2 from "./Hooks_2";
import Hooks_3 from "./Hooks_3";

function App() {
    const [showHooks, setShowHooks] = useState(false);
    const [showHooks2, setShowHooks2] = useState(false);

    const handleBtnClick = () => {
        setShowHooks(!showHooks);
    };

    const handleBtnClick2 = () => {
        setShowHooks2(!showHooks2);
    };

    return (
        <div className="App">
            {/* <EventHandling /> */}
            <Hooks />
            <button onClick={handleBtnClick}>Toggle Hooks 2</button>
            {showHooks ? <Hooks_2 /> : null}

            <button onClick={handleBtnClick2}>Toggle Hooks 3</button>
            {showHooks2 ? <Hooks_3 /> : null}
        </div>
    );
}

export default App;
