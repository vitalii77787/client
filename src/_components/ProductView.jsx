import React, { Component } from 'react';
import {
    setActiveProduct,
    setDefault,
    ToggleProduct,
    ToggleWish
} from '../_actions/products.actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  logo from '../images/Hunting_Knife.png'
import '../Style/ProductInfo/shop_styles.css'
import { product } from '../_data/product';

class ProductView extends Component {
    render() {
        const { product } = this.props;
        // const body = <section className="description">{product.text}</section>
        return (
            <div className={product.discount?"product_item discount":"product_item"}>
            <div className="product_border"></div>
            <div className="product_image d-flex flex-column align-items-center justify-content-center"><img src={logo}  alt=""/></div>
            <div className="product_content">
                <div className="product_price">
                {
                    product.discount?<div className="discounted_price">${product.price-(product.price*product.discount)/100}<span>${product.price}</span></div>:<div>${product.price}</div>
                }
                </div>
                <div className="product_name">
                <Link to={`/product/${product.id}`}> {product.title}
                </Link>
                </div>
            </div>
                    <div className={product.isWish==true?"product_fav active":"product_fav"}  onClick={() => this.props.Toggle(product.id)}>
                    <i className="fa fa-heart"></i>
                    </div>
            <ul className="product_marks">
                <li className="product_mark product_discount">-{product.discount}%</li>
                <li className="product_mark product_new">new</li>
            </ul>
            </div>
            // <div classNameName="card" style={{width:'18rem'}} onClick={() => this.props.setActive(product.id)}>
            //     <img className="card-img-top" src={logo} alt="Card image cap"></img>
            //     {
            //         this.props.activeProductId === product.id &&
            //         <h1>Active</h1>
            //     }
            //     <div classNameName='card-body'>
            //         <p classNameName="card-text">
            //             <Link to={`/product/${product.id}`}>
            //                 <h2 style={{ textAlign: 'center' }} >
            //                     {product.title}
            //                 </h2>
            //             </Link>
            //         </p>
            //         {body}
            //     </div>
            // </div>
        )
    }
}


export const ProductViewContainer = connect(
    (state, ownProps) => {
        return {
            ...ownProps,
            activeProductId: state.products.activeProductId
        }
    },
    (dispatch) => {
        return {
            Toggle: (id) => dispatch(ToggleWish(id))

        }
    }
)(ProductView);
