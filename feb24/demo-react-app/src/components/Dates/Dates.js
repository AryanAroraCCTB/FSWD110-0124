import "./Dates.css";
import { today, yesterday } from "../../utils/date-utils";

function Dates() {
    return <p>Today's date is {today.toDateString()}</p>;
}

export default Dates;
