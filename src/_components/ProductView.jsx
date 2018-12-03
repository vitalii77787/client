import React, { Component } from 'react';
import { setActiveProduct } from '../_actions/products.actions';
import { connect } from 'react-redux';

class ProductView extends Component {
    render() {
        const { product } = this.props;
        console.log(this.props);
        const body = <section className="description">{product.text}</section>
        return (
            <div className="product">
                {
                    this.props.activeProductId === product.id &&
                    <h1>Active</h1>
                }
                <h2 style={{ textAlign: 'center' }} onClick={() => this.props.setActive(product.id)}>
                    {product.title}
                </h2>
                {body}
            </div>
        )
    }
}


export const ProductViewContainer = connect(
    (state, ownProps) => {
        return {
            ...ownProps,
            activeProductId: state.products.activeProductId
        }
    },
    (dispatch) => {
        return {
            setActive: (id) => dispatch(setActiveProduct(id))
        }
    }
)(ProductView);
