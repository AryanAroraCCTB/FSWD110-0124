import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import ConditionalRender from "./components/ConditionalRender/ConditionalRender";
import MappingRender from "./components/MappingRender/MappingRender";
import DynamicClass from "./components/DynamicClass/DynamicClass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        <hr />
        <ConditionalRender />
        <hr />
        <MappingRender />
        <hr />
        <DynamicClass message="Good Evening" isNight={true} />
        <DynamicClass message="Good Morning" isNight={false} />
    </React.StrictMode>
);
