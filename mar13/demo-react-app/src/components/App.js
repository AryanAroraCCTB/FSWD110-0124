import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Reviews from "./Reviews";
import Contact from "./Contact";

function App() {
    return (
        <div className="App">
            <Router>
                <Link className="links" to="/">
                    Home
                </Link>
                <Link className="links" to="/about">
                    About
                </Link>
                <Link className="links" to="/products">
                    Products
                </Link>
                <Link className="links" to="/products/1">
                    Products ID 1
                </Link>
                <Link className="links" to="/products/2">
                    Products ID 2
                </Link>
                <Link className="links" to="/products/1/reviews">
                    Products ID 1 Reviews
                </Link>
                <Link className="links" to="/products/2/reviews/1">
                    Products ID 2 Reviews ID 1
                </Link>
                <Link className="links" to="/contact">
                    Contact
                </Link>

                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/about" Component={About} />
                    <Route path="/products" Component={Products} />
                    <Route path="/products/:productId" Component={Products} />
                    <Route path="/products/:productId/reviews" Component={Reviews} />
                    <Route path="/products/:productId/reviews/:reviewId" Component={Reviews} />
                    <Route path="/contact" Component={Contact} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
