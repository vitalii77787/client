import { connect } from 'react-redux';
import React from 'react';

 class Wish extends React.Component {
    render() {
        const { count } = this.props;
        return (
            <div class="wishlist d-flex flex-row align-items-center justify-content-end">
                <div class="wishlist_icon"><i className="fa fa-heart  fa-2x"></i>
                <div class="cart_count"><span>{count}</span></div></div>
                <div class="wishlist_content">
                    <div class="wishlist_text"><a href="#">Wishlist</a></div>
                </div>
            </div>
        )
    }
}
export const ConnectedWish = connect(
    (state, ownProps) => {
        return {
            ...ownProps,
            count: state.products.wishList.length,
        };
    },
    (dispatch) => { return {}; }
)(Wish);