import "./Message.css";

function Message(props) {
    let message = "Good ";
    const hour = new Date().getHours();
    console.log("Hours: ", hour);

    if (hour < 12) {
        message += "Morning!";
    } else if (hour < 17) {
        message += "Afternoon!";
    } else {
        message += "Evening!";
    }

    return <div>{message}</div>;
}

export default Message;
