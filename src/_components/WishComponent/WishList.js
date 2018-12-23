import React from 'react'
import { ConnectedWishItem } from './WishItem';


export const WishList = ({ products }) => {
    const wishItems = products.map(product =>
        <tr key={product.id} className="cart_item clearfix">
            <ConnectedWishItem product={product} />
        </tr>
    )
    return (
        <table className="table table-striped table-bordered" >
            <tbody>
            <tr>
      <th scope="col" style={{textAlign:"center", verticalAlign:"middle"}}>Image</th>
      <th scope="col" style={{textAlign:"center", verticalAlign:"middle"}}>Title</th>
      <th scope="col" style={{textAlign:"center", verticalAlign:"middle"}}>Description</th>
      <th scope="col" style={{textAlign:"center", verticalAlign:"middle"}}>Add</th>
      <th scope="col" style={{textAlign:"center", verticalAlign:"middle"}}>Remove </th>
    </tr>
                {wishItems}
            </tbody>
        </table >
    )
}