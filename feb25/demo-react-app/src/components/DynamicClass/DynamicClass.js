import "./DynamicClass.css";

function DynamicClass(props) {
    const textClass = props.isNight ? "night" : "day";

    return (
        <div className="DynamicClass">
            <p className={textClass}>
                {props.message} {props.isNight}
            </p>

            <p className={props.isNight ? "night" : "day"}>
                {props.message} {props.isNight}
            </p>

            {props.isNight ? (
                <p className="night">
                    {props.message} {props.isNight}
                </p>
            ) : (
                <p className="day">
                    {props.message} {props.isNight}
                </p>
            )}
        </div>
    );
}

export default DynamicClass;
