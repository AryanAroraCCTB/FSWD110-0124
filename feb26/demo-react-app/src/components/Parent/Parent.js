import Child from "../Child/Child";
import "./Parent.css";

function Parent(props) {
    console.log("Parent", props);
    return (
        <div className="parent">
            Hi from Parent @ L{props.level}
            <Child level={props.level + 1} favColor={"green"} />
        </div>
    );
}

export default Parent;
