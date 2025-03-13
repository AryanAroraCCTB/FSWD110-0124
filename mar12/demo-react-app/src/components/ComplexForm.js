import { useState } from "react";
import "./ComplexForm.css";

const ComplexForm = () => {
    const [userInfo, setUserInfo] = useState({
        fname: "",
        lname: "",
    });

    const handleInputChange = (event) => {
        if (event.target.name === "fname") {
            setUserInfo();
        }
        if (event.target.name === "lname") {
            setUserInfo();
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(event);

        // TODO: ADD LOGIC TO GET USERINFO
    };

    return (
        <div className="ComplexForm">
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <label htmlFor="fname">First Name</label>
                    <input name="fname" value={userInfo.fname} type="text" placeholder="First Name" onChange={handleInputChange} />
                </div>

                <div className="inputs">
                    <label htmlFor="lname">Last Name</label>
                    <input name="lname" value={userInfo.lname} type="text" placeholder="Last Name" onChange={handleInputChange} />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ComplexForm;
