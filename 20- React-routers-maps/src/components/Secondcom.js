import React from 'react'
import { Link } from 'react-router-dom';

const Secondcom = () => {
    const PRODUCTS = [
        { id: '1', title: 'product - 1' },
        { id: '2', title: 'product - 2' },
        { id: '3', title: 'product - 3' },
    ]
    return (
        <>
            <h1>Navigated into 2nd Products component</h1>
            <ul>
                {PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}> {product.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Secondcom;