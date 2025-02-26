import "./MappingRender.css";

function MappingRender() {
    const fruits = ["apple", "banana", "cherry", "dragonfruit", "apple"];

    // 1st way of map rendering: in JS
    const fruitsInfo = fruits.map((fruit, index) => {
        return (
            <div className="FruitInfo" key={index}>
                <h4 className="FruitName">{fruit}</h4>
                <p className="FruitDesp">
                    this is some random text and description for the {fruit} with lots of info of the {fruit} and its nutrition
                </p>
            </div>
        );
    });

    return (
        <div className="MappingRender">
            {/* Doing it with mapping, 1st way using JS */}
            {fruitsInfo}

            {/* Doing it with mapping, 2nd way using JSX */}
            {fruits.map((fruit, index) => {
                return (
                    <div className="FruitInfo" key={index}>
                        <h4 className="FruitName">{fruit}</h4>
                        <p className="FruitDesp">
                            this is some random text and description for the {fruit} with lots of info of the {fruit} and its nutrition
                        </p>
                    </div>
                );
            })}

            {/* Doing it all manually, without using mapping */}
            {/* <div className="FruitInfo">
                <h4 className="FruitName">{fruits[0]}</h4>
                <p className="FruitDesp">
                    this is some random text and description for the {fruits[0]} with lots of info of the {fruits[0]} and its nutrition
                </p>
            </div>

            <div className="FruitInfo">
                <h4 className="FruitName">{fruits[1]}</h4>
                <p className="FruitDesp">
                    this is some random text and description for the {fruits[1]} with lots of info of the {fruits[1]} and its nutrition
                </p>
            </div>

            <div className="FruitInfo">
                <h4 className="FruitName">{fruits[2]}</h4>
                <p className="FruitDesp">
                    this is some random text and description for the {fruits[2]} with lots of info of the {fruits[2]} and its nutrition
                </p>
            </div>

            <div className="FruitInfo">
                <h4 className="FruitName">{fruits[3]}</h4>
                <p className="FruitDesp">
                    this is some random text and description for the {fruits[3]} with lots of info of the {fruits[3]} and its nutrition
                </p>
            </div> */}
        </div>
    );
}

export default MappingRender;
