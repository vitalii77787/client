import { connect } from 'react-redux';
import React from 'react';

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
                            <div class="cart_text"><a href="#">Cart</a></div>
                           
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
            count: state.cart.productsId.length,
        };
    },
    (dispatch) => { return {}; }
)(Cart);