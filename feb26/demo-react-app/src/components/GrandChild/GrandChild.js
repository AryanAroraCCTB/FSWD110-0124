import "./GrandChild.css";

function GrandChild(props) {
    console.log("GrandChild", props);
    return <div className="grandchild">Hi from GrandChild @ L{props.level}</div>;
}

export default GrandChild;
