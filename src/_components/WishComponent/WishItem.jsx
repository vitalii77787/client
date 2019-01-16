import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hunting_Knife from '../../images/Hunting_Knife.png';
import { getCartItem } from '../../_actions/productCart.actions';
import { deleteWishItem } from '../../_actions/wish.actions';

export class WishItem extends Component {


    render() {
        const { product } = this.props;
        const { products }= this.props;
        if (product) {
            return (
                <React.Fragment>
                    <td class="cart_item_image"><img src={product.photo} alt="" /></td>
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>{product.name}</td>
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}>{product.description}</td>
            <td style={{ textAlign: "center", verticalAlign: "middle" }}><button disabled={(products.length && products.some(cartproduct=>cartproduct.id===product.id))}  className="btn btn-outline-success btn-sm" onClick={() => this.props.AddToCart(product.id)}>Add to cart</button></td>
                    <td style={{ textAlign: "center", verticalAlign: "middle" }}><button className="btn btn-outline-danger btn-sm" onClick={() => this.props.Delete(product.id)}>Remove</button></td>
                </React.Fragment>
            )
        }
    }
}
export const ConnectedWishItem = connect(
    (state, ownProps) => { return {
        ...ownProps,
        products: state.cart.cartProducts
    }; },
    (dispatch) => {
        return {
            AddToCart: (id) => dispatch(getCartItem(id)),
            Delete: (id) => dispatch(deleteWishItem(id)),
        }
    }
)(WishItem);