import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortProducts } from '../_actions/products.actions';

class ProductsFilter extends Component {
    render() {
        const { activeSortLabel } = this.props;
        return (
            <div>
                <span className="sorting_text">{activeSortLabel}<i clasName="fas fa-chevron-down"></i></span>
                <ul>
                    <li className="shop_sorting_button" data-isotope-option='{ "sortBy": "name" }' onClick={() => this.props.Filter('title')}>name</li>
                    <li className="shop_sorting_button" data-isotope-option='{ "sortBy": "price" }' onClick={() => this.props.Filter('price')}>price</li>
                </ul>
            </div>
        )
    }
}
export const ConnectedProductsFilter = connect(
    (state, ownProps) => {
        return {
            ...ownProps,
           activeSortLabel: state.products.activeSortLabel
        }
    },
    (dispatch) => {
        return {
            Filter:(key)=>dispatch (sortProducts(key))
        }
    }
)(ProductsFilter);