import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hunting_Knife from '../../images/Hunting_Knife.png';
import {
    addToCart
} from '../../_actions/productCart.actions';
import { deleteWishItem } from '../../_actions/wish.actions';

export class WishItem extends Component {


    render() {
        const { product } = this.props;
        if (product) {
            return (
                <React.Fragment>
                    <td class="cart_item_image"><img src={product.photo} alt="" /></td>
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>{product.name}</td>
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>{product.description}</td>
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}><button className="btn btn-outline-success btn-sm" onClick={() => this.props.AddToCart(product.id)}>Add to cart</button></td>
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}><button className="btn btn-outline-danger btn-sm" onClick={() => this.props.Delete(product.id)}>Remove</button></td>
                </React.Fragment>
            )
        }
    }
}
export const ConnectedWishItem = connect(
    (store) => { return {}; },
    (dispatch) => {
        return {
            AddToCart: (id) => dispatch(addToCart(id)),
            Delete: (id) => dispatch(deleteWishItem(id)),
        }
    }
)(WishItem);