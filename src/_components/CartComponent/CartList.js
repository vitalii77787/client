import React from 'react'
import { ConnectedCartItem } from './CartItem';


export const CartList = ({ products }) => {
    const cartItems= products.map(product =>
        <li key={product.id} className="cart_item clearfix">
            <ConnectedCartItem product={product} />
        </li>
    )
    return (
        <ul className="cart_list">
      {cartItems}
      </ul>
    )
}