// import React from 'react'
import { useParams } from 'react-router-dom'
const ProductsDetail = () => {
    const params = useParams();
    return (
        <>
            <h1>Products Detail</h1>
            <p>{params.product}</p>
        </>
    )
}

export default ProductsDetail