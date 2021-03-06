import React, { Component } from 'react';
import {
    setActiveProduct,
    setDefault,
    ToggleProduct,
    ToggleWish
} from '../_actions/products.actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../images/Hunting_Knife.png'
import '../Style/ProductInfo/shop_styles.css'
import { product } from '../_data/product';

class ProductView extends Component {
    render() {
        const {wishList}=this.props;
        const { product } = this.props;
        if(product)
        {
        return (
            <div className={product.discount!==0 ? "product_item discount" : "product_item"}>
                <div className="product_border"></div>
                <div className="product_image d-flex flex-column align-items-center justify-content-center"><img className="center" src={product.photo?product.photo:""} alt="Photo" /></div>
                <div className="product_content">
                    <div className="product_price">
                        {
                            product.discount!==0 ? <div className="discounted_price">${Math.round(product.price -(product.price * product.discount) / 100)}<span>${product.price}</span></div> : <div>${product.price}</div>
                        }
                    </div>
                    <div className="product_name">
                        <Link to={`/product/${product.id}`}> {product.name}
                        </Link>
                    </div>
                </div>
                <div className={( wishList.some(e=>e===product.id)) ? "product_fav active" : "product_fav"} onClick={() => this.props.Toggle(product.id)}>
                    <i className="fa fa-heart"></i>
                </div>
                <ul className="product_marks">
                        {product.discount===0?'':<li className="product_mark product_discount">-{product.discount}%</li>}
                         <li className="product_mark product_new">new</li>
                </ul>
            </div>
        )
                    }
    }
}


export const ProductViewContainer = connect(
    (state, ownProps) => {
        return {
            ...ownProps,
            activeProductId: state.products.activeProductId,
            wishList:state.wish.wishListId
        }
    },
    (dispatch) => {
        return {
            Toggle: (id) => dispatch(ToggleWish(id))

        }
    }
)(ProductView);
