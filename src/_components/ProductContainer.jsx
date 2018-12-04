import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductPage extends React.Component {
    render() {
        const { product } = this.props;
        return (
            <div>{product.price}</div>
        )
    }
}

export const ProductContainer=connect(
    (state) => {
        return {
            product: state.products.product
        };
    },
    (dispatch) => { return {} }
)(ProductPage);