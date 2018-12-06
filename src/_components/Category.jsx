import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { RoutedCategoryProducts } from './Products';
import '../Style/Category/category.css'


class CategoryList extends Component {
    render() {
        const { categories } = this.props;
        const activeCategoryId = this.props.match.params.categoryId;
        return (
            <div className='category-wrapper'>
            {
                categories.map(category =>
                <div key={category.id}>
                    <div className={activeCategoryId === category.id ? 'category-item active' : 'category-item'} >
                        <h4 style={{ textAlign: 'center' }} >
                            <Link to={`/categories/${category.id}`}>{category.name}</Link>
                        </h4>
                    </div>
                </div>
            )
            }
            </div>
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

