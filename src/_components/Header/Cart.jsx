import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

export class Cart extends React.Component {
    render() {
        const { count } = this.props;
            return (
                <div class="cart">
                    <div class="cart_container d-flex flex-row align-items-center justify-content-end">
                        <div class="cart_icon">
                            <i className="fa fa-shopping-cart  fa-2x"></i>
                            <div class="cart_count"><span>{count}</span></div>
                        </div>
                        <div class="cart_content">
                            <div class="cart_text">
                            <Link to="/cart">Cart</Link>
                            </div>
                           
                        </div>
                    </div>
                </div>
            )
        }
    }
export const ConnectedCart = connect(
    (state, ownProps) => {
        return {
            ...ownProps,
            count: state.cart.cartProducts.length,
        };
    },
    (dispatch) => { return {}; }
)(Cart);