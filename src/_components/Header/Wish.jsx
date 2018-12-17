import { connect } from 'react-redux';
import React from 'react';

 class Wish extends React.Component {
    render() {
        const { count } = this.props;
        return (
            <div class="wishlist d-flex flex-row align-items-center justify-content-end">
                <div class="wishlist_icon"><img src="images/heart.png" alt="" /></div>
                <div class="wishlist_content">
                    <div class="wishlist_text"><a href="#">Wishlist</a></div>
                    <div class="wishlist_count">{count}</div>
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