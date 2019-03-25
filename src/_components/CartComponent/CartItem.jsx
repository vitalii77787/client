import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { incrementCartProduct, decrementCartProduct, deleteCartItem, addOrderLine } from '../../_actions/productCart.actions';

export class CartItem extends Component {


    render() {
        const { product } = this.props;
        if (product) {
            return (
                <div >
                    <div class="cart_item_image"><img src={product.photo} alt="" /></div>
                    <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div class="cart_item_name cart_info_col">
                            <div class="cart_item_title">Name</div>
                            <div class="cart_item_text" >{product.name}</div>
                        </div>
                        <div class="cart_item_quantity cart_info_col">
                            <div class="cart_item_title">Quantity</div>
                            <div class="cart_item_text">
                                <div class="x-quantity__holder">
                                    <span class="x-quantity__button x-quantity__button_type_minus" onClick={() => this.props.Decrement(product.id)}>-</span>
                                    <span class="x-quantity__button x-quantity__button_type_plus" onClick={() => this.props.Increment(product.id)}>+</span>
                                    <span class="x-quantity__input" data-qaid="quantity_input">{product.quantity}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="cart_item_price cart_info_col">
                            <div class="cart_item_title">Price</div>
                            <div class="cart_item_text">${Math.round(product.price)}</div>
                        </div>
                        <div class="cart_item_total cart_info_col">
                            <div class="cart_item_title">Total</div>
                            <div class="cart_item_text">${Math.round(product.price) * product.quantity}</div>
                        </div>
                        <div class="cart_item_total cart_info_col">
                            <Button type="danger" style={{ marginTop: "70%" }} onClick={() => this.props.Delete(product.id)}>Delete</Button>
                        </div>
                        <div class="cart_item_total cart_info_col">
                            <Button type="primary"  disabled={(product.quantity<1)} style={{ marginTop: "70%" }} onClick={() => this.props.AddOrderLine(true, product.id, product.quantity)}>Order</Button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export const ConnectedCartItem = connect(
    (store) => { return {}; },
    (dispatch) => {
        return {
             Increment: (id) => dispatch(incrementCartProduct(id)),
             Decrement: (id) => dispatch(decrementCartProduct(id)),
             Delete: (id) => dispatch(deleteCartItem(id)),
             AddOrderLine: (isValidProduct, id, count)=>dispatch(addOrderLine(isValidProduct, id, count))
        }
    }
)(CartItem);