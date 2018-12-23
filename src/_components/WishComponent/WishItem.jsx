import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hunting_Knife from '../../images/Hunting_Knife.png';
import { incrementCartProduct, decrementCartProduct, deleteCartItem } from '../../_actions/productCart.actions';

export class WishItem extends Component {


    render() {
        const { product } = this.props;
        return (
            <tr>
                <td><img src={Hunting_Knife} alt="" /></td>
                <td></td>
                <td>@mdo</td>
            </tr>
        )
    }
}
export const ConnectedWishItem = connect(
    (store) => { return {}; },
    (dispatch) => {
        return {  
        }
    }
)(WishItem);