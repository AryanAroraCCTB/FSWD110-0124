import "./EventHandling.css";

function EventHandling() {
    let count = 0;

    const handleBtnClick = (event) => {
        count += 1;
        console.log(`Clicked ${count} times`);
        console.log(event);
    };

    function handleBtnClick2(event) {
        count += 1;
        console.log(`Clicked ${count} times`);
    }

    const handleBtnEnter = (event) => {
        console.log("Mouse Entered");
    };

    const handleBtnLeave = (event) => {
        console.log("Mouse Left");
    };

    let fName,
        lName = "";
    const handleInputChange = (event) => {
        const placeholder = event.target.placeholder;
        const name = event.target.name;

        if (placeholder === "First Name" || name === "fName") {
            fName = event.target.value;
            console.log(`First Name is ${fName}`);
        }

        if (placeholder === "Last Name" || name === "lName") {
            lName = event.target.value;
            console.log(`Last Name is ${lName}`);
        }
    };

    const handleCopy = (event) => {
        console.log("Copying", event);
    };

    return (
        <div className="EventHandling">
            <h3>App Component</h3>
            <button onClick={handleBtnClick} onMouseEnter={handleBtnEnter} onMouseLeave={handleBtnLeave}>
                Click Me
            </button>

            <div className="Details">
                <input name="fName" placeholder="First Name" onChange={handleInputChange} onCopy={handleCopy} />
                <input name="lName" placeholder="Last Name" onChange={handleInputChange} onCopy={handleCopy} />
            </div>
        </div>
    );
}

export default EventHandling;
