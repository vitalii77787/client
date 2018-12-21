import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hunting_Knife from '../../images/Hunting_Knife.png';
import { incrementCartProduct, decrementCartProduct, deleteCartItem } from '../../_actions/productCart.actions';

export class CartItem extends Component {


    render() {
        const { product } = this.props;
        return (
            <div>
                <div class="cart_item_image"><img src={Hunting_Knife} alt="" /></div>
                <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                    <div class="cart_item_name cart_info_col">
                        <div class="cart_item_title">Name</div>
                        <div class="cart_item_text">{product.title}</div>
                    </div>
                    <div class="cart_item_quantity cart_info_col">
                        <div class="cart_item_title">Quantity</div>
                        <div class="cart_item_text">
                            <div class="x-quantity__holder">
                                <span class="x-quantity__button x-quantity__button_type_minus" onClick={()=>this.props.Decrement(product.id)}>-</span>
                                <span class="x-quantity__button x-quantity__button_type_plus" onClick={()=>this.props.Increment(product.id)}>+</span>
                                <span class="x-quantity__input" data-qaid="quantity_input">{product.count}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="cart_item_price cart_info_col">
                        <div class="cart_item_title">Price</div>
                        <div class="cart_item_text">${product.price}</div>
                    </div>
                    <div class="cart_item_total cart_info_col">
                        <div class="cart_item_title">Total</div>
                        <div class="cart_item_text">${product.price*product.count}</div>
                    </div>
                    <div class="cart_item_total cart_info_col">
                        <button className="btn btn-primary"  style={{marginTop:"50%"}} onClick={()=>this.props.Delete(product.id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
export const ConnectedCartItem = connect(
    (store) => { return {}; },
    (dispatch) => {
        return {
            Increment:(id)=>dispatch(incrementCartProduct(id)),
            Decrement:(id)=>dispatch(decrementCartProduct(id)),
            Delete:(id)=>dispatch(deleteCartItem(id)),
        }
    }
)(CartItem);