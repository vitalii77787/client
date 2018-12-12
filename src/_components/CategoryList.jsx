import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { setActiveCategory } from '../_actions/categories.actions';



class CategoryList extends Component {
    render() {
        const { categories } = this.props;
        const activeCategoryId = this.props.match.params.categoryId;
        return (
            <ul className="sidebar_categories">
                {
                    categories.map(category =>
                        <li key={category.id} onClick={() => this.props.setActiveCategory(category.id, category.name)}>
                            <Link to={`/categories/${category.id}`}>{category.name}</Link>
                        </li>
                    )
                }
            </ul>
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
    (dispatch) => { return {
        setActiveCategory: (id, name)=>dispatch(setActiveCategory(id,name))
    } }
)(CategoryList));