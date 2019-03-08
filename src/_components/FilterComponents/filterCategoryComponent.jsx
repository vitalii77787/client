import React from 'react';
import { connect } from 'react-redux';
import { getFiltersByCategory, onSearchProducts } from '../../_actions/filters.actions';
import { store } from '../../_helpers/store';
import { FiltersList } from './FiltersList';
import { Button } from 'antd';

class FiltersComponent extends React.Component {
    render() {
        return this.props?
            (<FiltersList filters={this.props.filters} />) :
            (<div> No Filters </div>);
    }
}

export const ConnectedFiltersComponent = connect(
    (state) => {
        return {
           filters: state.filters.categoryFilters
        };
    },
    (dispatch) => { return {} }
)(FiltersComponent);

class FiltersCategoryComponent extends React.Component{
    componentDidMount() {
        const {categoryId} = this.props;
        if (categoryId && categoryId!==0) {
            store.dispatch(getFiltersByCategory(categoryId))
        } 
    }
    componentDidUpdate(prevProps) {
        if (this.props.categoryId !== prevProps.categoryId) {

            const {categoryId} = this.props;
            if (categoryId && categoryId!==0) {
                store.dispatch(getFiltersByCategory(categoryId))
            } 
        }
    }

    render(){
        return(
            <div>
        <ConnectedFiltersComponent/>
        <Button  onClick={this.props.SearchProducts}>Find!</Button>
        </div>
        )
    }
}

export const ConnectedFiltersCategoryComponent = connect(
    (state) => {
        return {
           categoryId: state.categories.activeCategoryId
        };
    },
    (dispatch) => { return {
        SearchProducts:()=>dispatch(onSearchProducts())
    } }
)(FiltersCategoryComponent);