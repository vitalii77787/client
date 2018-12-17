import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import { setPrice } from '../../_actions/products.actions';
import '../../Style/Slyder/slider-styles.css';

 class FilterPrice extends React.Component {
    changeValue = (event) => {
        const newValue= event.value
        this.props.setPriceValue(newValue);
    };

    render() {
        const {priceValue}=this.props;
        return (
            <div className="filter_price">
                <div id="slider-range" className="slider_range"></div>
                <InputRange
                    maxValue={1000}
                    minValue={0}
                    value={priceValue}
                    onChange={value => this.changeValue({ value })} 
                    formatLabel={value=>(value).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}/>
            </div>
        )
    }
}
export const ConnectedFilterPrice = connect(
    (state, ownProps) => {
        return {
            ...ownProps,
            priceValue: state.products.priceValue
        }
    },
    (dispatch) => {
        return {
            setPriceValue: (value) => dispatch(setPrice(value))

        }
    }
)(FilterPrice);