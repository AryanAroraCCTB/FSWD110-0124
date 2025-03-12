import { useEffect, useState } from "react";
import "./Hooks_3.css";

function Hooks_3() {
    const [title, setTitle] = useState("Default Title");

    useEffect(() => {
        document.title = title;

        // Cleanup logic (optional)
        return () => {
            document.title = "Default Title"; // Reset title on unmount
        };
    }, [title]);

    useEffect(() => {
        console.log("Changing");
    }, [window.onmousedown]);

    return (
        <div className="Hooks_3">
            <div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <p>Current Title: {title}</p>
        </div>
    );
}
export default Hooks_3;
