import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Welcome to the Home Page</h1>
                    <p>This is the home page of our application.</p>
                    <Link to="/about" className="btn btn-primary">Go to About Page</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;