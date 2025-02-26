import "./ConditionalRender.css";

function ConditionalRender() {
    // 1st way of conditional rendering: via JS
    const num = Math.random() * 10;
    let message;

    if (num > 10) {
        message = <p>I am above 10!</p>;
    } else {
        message = <p>I am below 10!</p>;
    }

    // Single line conditionals
    let aboveTen = num > 10 ? true : false;
    if (num > 10) {
        aboveTen = true;
    } else {
        aboveTen = false;
    }

    return (
        <div className="ConditionalRender">
            Hi from ConditionalRender
            <p>Number is: {num}</p>
            {/* 1st way of conditional rendering: via JS */}
            {message}
            {/* 2nd way of conditional rendering: via JSX */}
            {num > 10 ? <p className="one">I am above 10!</p> : <p className="two">I am below 10!</p>}
            {aboveTen ? <p className="one">I am above 10!</p> : <p className="two">I am below 10!</p>}
        </div>
    );
}

export default ConditionalRender;
