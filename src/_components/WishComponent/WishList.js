import React from 'react'
import { ConnectedWishItem } from './CartItem';


export const WishList = ({ products }) => {
    const wishItems= products.map(product =>
        <tr key={product.id} className="cart_item clearfix">
            <ConnectedCartItem product={product} />
        </tr>
    )
    return (
      {wishItems}
    )
}