import React from 'react';
import { withRouter } from 'react-router';
import { store } from '../_helpers/store';
import { getProductById, setActiveImage } from '../_actions/products.actions';
import { ProductContainer } from './ProductContainer'



export class Product extends React.Component {
    componentDidMount() {
        const productId = this.props.match.params.productId;
        store.dispatch(getProductById(productId))
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.productId !== prevProps.match.params.productId) {
            const productId = this.props.match.params.productId;
            store.dispatch(getProductById(productId))
        }
    }

    componentWillUnmount() {
        store.dispatch(setActiveImage(null));
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