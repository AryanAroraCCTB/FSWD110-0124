import "./Dates.css";

function Dates() {
    const today = new Date();
    return <p>Today's date is {today.toDateString()}</p>;
}

export default Dates;
