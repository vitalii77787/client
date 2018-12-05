import React from 'react'
import { ProductViewContainer } from './ProductView';
import { Link } from 'react-router-dom';

export const ProductList = ({ products }) => {
    const productElements = products.map(product =>
        <Link to={`/product/${product.id}`}>
        <div key={product.id} className="product-list__li">
            <ProductViewContainer product={product} />
        </div>
        </Link>
    )

    return (
        <div style={{ padding: 0 }} className="product-wrapper">
            {productElements}
        </div>
    )
}