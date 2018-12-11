import React from 'react'
import { ProductViewContainer } from './ProductView';
import '../Style/ProductInfo/products.css'


export const ProductList = ({ products }) => {
    const productElements = products.map(product =>
        <div key={product.id} className='product-item'>
            <ProductViewContainer product={product} />
        </div>
    )

    return (
        <div style={{ padding: 0 }} className="product-wrapper">
            {productElements}
        </div>
    )
}