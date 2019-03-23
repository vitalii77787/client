import React from 'react'
import { NewProductView } from './NewProductViewContainer';


export const NewProductList = ({ products }) => {
    const newProductElements = products.map(product=>
        <div key={product.id}>
             <NewProductView  product={product} />
        </div>
    );
   
   
    return (
        <div className='container'>
        <p style={{textAlign:'center'}}>
        <h2>
            New Products !!!
        </h2>
        </p>
        <div className = 'newproduct-wrapper'>
          {newProductElements}
        </div>
        </div>
    )
}