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
                {wishItems}
            </tbody>
        </table >
    )
}