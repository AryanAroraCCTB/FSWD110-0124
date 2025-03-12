import { useState, useEffect } from "react";
import "./Hooks_2.css";
import axios from "axios";

const Hooks_2 = () => {
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState([]);

    axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            const products = res.data;

            axios
                .get("https://jsonplaceholder.typicode.com/todos/3")
                .then((res) => {
                    const products = res.data;
                })
                .catch((err) => {
                    console.log("ERROR FETCHING DATA FROM THE SERVER", err);
                });
        })
        .catch((err) => {
            console.log("ERROR FETCHING DATA FROM THE SERVER", err);
        });

    const fetchTodos = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setTimeout(() => {
                setTodos(res.data);
                setLoading(false);
            }, 3000);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="Hooks_2">
            Todo's
            {loading ? (
                <p>Loading data...</p>
            ) : (
                todos.map((todo, index) => {
                    return (
                        <div className="todo" key={index}>
                            <p>Title: {todo.title}</p>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Hooks_2;
