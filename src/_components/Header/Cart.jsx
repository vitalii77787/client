import { connect } from 'react-redux';
import React from 'react';

export class Cart extends React.Component {
    render() {
        const { count } = this.props;
            return (
                <div class="cart">
                    <div class="cart_container d-flex flex-row align-items-center justify-content-end">
                        <div class="cart_icon">
                            <img src="images/cart.png" alt="" />
                            <div class="cart_count"><span>{count}</span></div>
                        </div>
                        <div class="cart_content">
                            <div class="cart_text"><a href="#">Cart</a></div>
                            <div class="cart_price">$85</div>
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
            count: state.cart.products.length,
        };
    },
    (dispatch) => { return {}; }
)(Cart);