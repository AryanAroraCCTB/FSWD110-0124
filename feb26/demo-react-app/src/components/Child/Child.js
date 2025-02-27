import GrandChild from "../GrandChild/GrandChild";
import "./Child.css";

function Child(props) {
    console.log("Child", props);
    return (
        <div className="child">
            Hi from Child @ L{props.level}
            <GrandChild level={props.level + 1} favSports={"games"} />
        </div>
    );
}

export default Child;
