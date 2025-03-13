import { useState } from "react";
import "./SimpleForm.css";

const SimpleForm = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const handleInputChange = (event) => {
        if (event.target.name === "fname") {
            setFname(event.target.value);
        }

        if (event.target.name === "lname") {
            setLname(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const fnameEl = event.target.elements.fname;
        const lnameEl = event.target.elements.lname;

        const fname = fnameEl.value;
        const lname = lnameEl.value;

        console.log(fname, lname);
    };

    return (
        <div className="SimpleForm">
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <label htmlFor="fname">First Name</label>
                    <input name="fname" value={fname} type="text" placeholder="First Name" onChange={handleInputChange} required />
                </div>

                <div className="inputs">
                    <label htmlFor="lname">Last Name</label>
                    <input name="lname" value={lname} type="text" placeholder="Last Name" onChange={handleInputChange} required />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;
