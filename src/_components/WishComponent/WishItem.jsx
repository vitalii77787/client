import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hunting_Knife from '../../images/Hunting_Knife.png';
import { incrementCartProduct, decrementCartProduct, deleteCartItem } from '../../_actions/productCart.actions';

export class WishItem extends Component {


    render() {
        const { product } = this.props;
        return (
          <>
                <td class="cart_item_image"><img src={Hunting_Knife} alt="" /></td>
                <td style={{textAlign:"center", verticalAlign:"middle"}}>{product.title}</td>
                <td style={{textAlign:"center", verticalAlign:"middle"}}>{product.text}</td>
                <td style={{textAlign:"center", verticalAlign:"middle"}}><button className="btn btn-outline-success btn-sm">Add to cart</button></td>
                <td style={{textAlign:"center", verticalAlign:"middle"}}><button className="btn btn-outline-danger btn-sm">Remove</button></td>
           </>
        )
    }
}
export const ConnectedWishItem = connect(
    (store) => { return {}; },
    (dispatch) => {
        return {  
        }
    }
)(WishItem);