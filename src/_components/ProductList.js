import React from 'react'
import { ProductViewContainer } from './ProductView';

export const ProductList = ({ products }) => {
    const productElements = products.map(product =>
        <div key={product.id} className="product-list__li">
            <ProductViewContainer product={product} />
        </div>
    )

    debugger;

    return (
        <div style={{ padding: 0 }} className="product-wrapper">
            {productElements}
        </div>
    )
}