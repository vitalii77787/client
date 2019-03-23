import React from 'react';
import { connect } from 'react-redux';
import { store } from '../../_helpers/store';
import { NewProductList } from './NewProductList';
import { getNewProducts } from '../../_actions/products.actions';

export class NewArrivals extends React.Component {
    render() {
        return this.props.newproducts.length?
            (
             <NewProductList products={this.props.newproducts} />
            ) 
            :
            (<div className='container'> No Products Found! </div>
            );
       }
}

export const NewArrivalsPageContainer = connect(
    (state) => {
        return {
            newproducts: state.products.newProducts
        };
    },
    (dispatch) => { return {} }
)(NewArrivals);

export class NewProducts extends React.Component {
    componentDidMount() {
        store.dispatch(getNewProducts())  
    }
    render() {
        return (
            <div>
                <NewArrivalsPageContainer />
            </div>
        )
    }
}