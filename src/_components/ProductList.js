import React from 'react'
import { ProductViewContainer } from './ProductView';
import '../Style/ProductInfo/products.css'
import Masonry from 'react-masonry-component';


export const ProductList = ({ products }) => {
    const productElements = products.map(product =>
        <div key={product.id} className='product-item'>
            <ProductViewContainer product={product} />
        </div>
    )

    return (
        <Masonry
        className={'product-wrapper'} // default ''
        elementType={'div'} // default 'div'
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    > 
      {productElements}
         </Masonry>
    )
}