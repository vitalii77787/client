import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../../_helpers/store';
import { getWishProducts } from '../../_actions/wish.actions';


export class WishComponent extends React.Component {
	render() {
		return this.props? (
				<div className="container">
					
				</div>
		):(<div>Loading...</div>);
	}
}

export const ConnectedWishComponent = connect(
	(state) => {
		return {
			wishProducts: state.wish.wishProducts
		};
	},
	(dispatch) => { return {} }
)(WishComponent);

class WishContainer extends React.Component{
    componentDidMount() {
		const {productIds} = this.props;
        store.dispatch(getWishProducts(productIds))
    }

    render(){
        return(
        <ConnectedWishComponent/>
        )
    }
}

export const ConnectedWishContainer = connect(
    (state) => {
        return {
           productIds: state.wish.wishListId
        };
    },
    (dispatch) => { return {} }
)(WishContainer);