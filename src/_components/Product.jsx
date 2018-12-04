import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { store } from '../_helpers/store';
import {getProductById} from '../_actions/products.actions';

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



export class Product extends React.Component {
    componentDidMount() {
        const productId = this.props.match.params.productId;
        // ToDo : implement
        store.dispatch(getProductById(productId))
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.productId !== prevProps.match.params.productId) {
            const productId = this.props.match.params.productId;
            // ToDo : implement
            store.dispatch(getProductById(productId))
        }
    }

    render() {
        return (
            <div>
                <ProductContainer />
            </div>
        );
    }
}
export const RoutedProduct = withRouter(Product);