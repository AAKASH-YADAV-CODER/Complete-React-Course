import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Go to <Link to="product"> Products</Link> </p>
        </div>
    );
}

export default Home;