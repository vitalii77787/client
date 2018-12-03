import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { RoutedCategoryProducts } from './Products';

class CategoryList extends Component {
    render() {
        const { categories } = this.props;
        const activeCategoryId = this.props.match.params.categoryId;
        return (
            categories.map(category =>
                <div key={category.id} className="product-list__li">
                    <div className={activeCategoryId === category.id ? 'category active' : 'category'} >
                        <h4 style={{ textAlign: 'center' }} >
                            <Link to={`/categories/${category.id}`}>{category.name}</Link>
                        </h4>
                    </div>
                </div>
            )
        )
    }
}

export const RoutedCategoryListContainer = withRouter(connect(
    (state, ownProps) => {
        return {
            ...ownProps,
            categories: state.categories.categories
        }
    },
    (dispatch) => { return {} }
)(CategoryList));


export class CategoriesPage extends React.Component {
    render() {
        return (
            <div>
                <RoutedCategoryListContainer />
                <RoutedCategoryProducts />
            </div>
        );
    }
}

