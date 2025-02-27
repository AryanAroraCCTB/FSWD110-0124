import "./Count.css";

function Count() {
    let count = 1;

    function btnClick() {
        console.log("count before", count);
        count += 1;
        console.log("count after", count);
        console.log("\n-------\n");
    }

    return (
        <div className="Count">
            <h1>Current Counter: {count}</h1>

            <button onClick={btnClick}>Increment +1</button>
        </div>
    );
}

export default Count;
