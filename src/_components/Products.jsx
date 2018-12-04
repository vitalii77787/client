import React from 'react';
import { connect } from 'react-redux';
import { getAllProducts, getProductsByCategory } from '../_actions/products.actions';
import { withRouter } from 'react-router';
import { store } from '../_helpers/store';
import { ProductList } from './ProductList';

class ProductsPage extends React.Component {
    render() {
        return this.props.products.length ?
            (<ProductList products={this.props.products} />) :
            (<div> No Products </div>);
    }
}

export const CategoriesPageContainer = connect(
    (state) => {
        return {
            products: state.products.products
        };
    },
    (dispatch) => { return {} }
)(ProductsPage);

export class CategoryProducts extends React.Component {
    componentDidMount() {
        const categoryId = this.props.match.params.categoryId;
        if (categoryId) {
            store.dispatch(getProductsByCategory(categoryId))
        } else {
            store.dispatch(getAllProducts())
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.categoryId !== prevProps.match.params.categoryId) {
            const categoryId = this.props.match.params.categoryId;
            if (categoryId) {
                store.dispatch(getProductsByCategory(categoryId))
            } else {
                store.dispatch(getAllProducts())
            }
        }
    }

    render() {
        return (
            <div>
                <CategoriesPageContainer />
            </div>
        )
    }
}

export const RoutedCategoryProducts = withRouter(CategoryProducts);