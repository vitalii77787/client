import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../Style/Cart/cart.styles.css'
import { CartList } from './CartList';
import { Link } from 'react-router-dom';
import { store } from '../../_helpers/store';
import { getCartProducts } from '../../_actions/productCart.actions';


export class CartComponent extends React.Component {
	render() {
		return this.props? (
				<div className="container">
					<div className="row">
						<div className="col-lg-10 offset-lg-1">
							<div className="cart_container">
								<div className="cart_title">Shopping Cart</div>
								<div className="cart_items">
									<CartList products={this.props.cartProducts} />
								</div>

								<div className="order_total">
									<div className="order_total_content text-md-right">
										<div className="order_total_title">Order Total:</div>
										<div className="order_total_amount">${this.props.cartProducts.reduce((sum,i)=>(sum+=i.quantity*Math.round(i.price)),0)}</div>
									</div>
								</div>
								<div className="cart_buttons">
									<button type="button" className="button cart_button_clear">Return to shopping</button>
									<Link to="/order">Order</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
		):(<div></div>);
	}
}

export const ConnectedCartComponent = connect(
	(state) => {
		return {
			cartProducts: state.cart.cartProducts
		};
	},
	(dispatch) => { return {} }
)(CartComponent);

export class CartContainer extends React.Component{
    // componentDidMount() {
	// 	const {productIds} = this.props;
    //     store.dispatch(getCartProducts(productIds))
    // }

    render(){
        return(
        <ConnectedCartComponent/>
        )
    }
}

// export const ConnectedCartContainer = connect(
//     (state) => {
//         return {
//            productIds: state.cart.productsId
//         };
//     },
//     (dispatch) => { return {} }
// )(CartContainer);