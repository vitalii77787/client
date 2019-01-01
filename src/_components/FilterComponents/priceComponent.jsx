import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import { setPrice } from '../../_actions/products.actions';
import '../../Style/Slyder/slider-styles.css';
import { Slider } from 'antd';

 class FilterPrice extends React.Component {
    changeValue = (event) => {
        const newValue= event.value
        this.props.setPriceValue(newValue);
    };
     onChange=(value)=> {
        const newValue= value;
        this.props.setPriceValue(newValue);
      }
     onAfterChange=(value)=> {
       console.log(value);
      }
      
    render() {
        const {priceValue}=this.props;
        const marks = {
            0: {
                label: <strong>0$</strong>,
              },
            2000: {
              label: <strong>2000$</strong>,
            },
          };
        return (
            <div className="filter_price">
                <div id="slider-range" className="slider_range"></div>
                 <Slider range step={50} value={priceValue} onChange={this.onChange} onAfterChange={this.onAfterChange}  min={0}
            max={2000} range marks={marks}/> 
                {/* <InputRange
                    maxValue={1000}
                    minValue={0}
                    value={priceValue}
                    onChange={value => this.changeValue({ value })} 
                    formatLabel={value=>(value).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}/> */}
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