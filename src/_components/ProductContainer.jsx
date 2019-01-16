import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/ProductInfo/productinfo.css'
import { setActiveImage } from '../_actions/products.actions';
import { getCartItem } from '../_actions/productCart.actions';


class ProductPage extends Component {

    render() {
        const { product } = this.props;
        const {products}=this.props;
            let activeImage=(this.props.activeImage===0)?product.photo?product.photo[0]:0:this.props.activeImage;
            return (
                product?
                <div className="container">
                <div className='card'>
                    <div className="row">
                        <aside className="col-sm-5 border-right">
                            <div className='row'>
                                <ul className="image_list col-lg-4 order-1">
                                {
                                    product.photo?
                                product.photo.map(photo =>
                                        <li key={photo} onClick={() => this.props.setActiveImg(photo)}>
                                            <img src={photo} />
                                        </li>
                                    ):<div></div>
                                }
                                </ul>
                                <div className="col-lg-8 order-2">
                                     <div className="image_selected"><img src={activeImage} alt="" /></div> 
                                </div>
                            </div>
                        </aside>
                        <aside className="col-sm-7">
                            <article className="card-body p-5">
                                <h3 className="title mb-3">{product.name}</h3>
                                <p className="price-detail-wrap">
                                    <span className="price h3 text-warning">
                                        <span className="currency">US $</span><span className="num">{product.price}</span>
                                    </span>
                                    <span>/per kg</span>
                                </p>
                                <dl className="item-property">
                                    <dt>Description</dt>
                                    <dd><p>{product.description}</p></dd>
                                </dl>
                                <dl className="param param-feature">
                                    <dt>Model#</dt>
                                    <dd>12345611</dd>
                                </dl>
                                <dl className="param param-feature">
                                    <dt>Color</dt>
                                    <dd>Black and white</dd>
                                </dl>
                                <dl className="param param-feature">
                                    <dt>Delivery</dt>
                                    <dd>Russia, USA, and Europe</dd>
                                </dl>
                                <div className="btn btn-lg btn-primary text-uppercase"> Buy now </div>
                                {
                                    (products.length && products.some(cartproduct=>cartproduct.id===product.id))?<button className="btn btn-lg btn-outline-primary text-uppercase" disabled> <i className="fa fa-shopping-cart"></i> In cart</button>:
                                    <div className="btn btn-lg btn-outline-primary text-uppercase" onClick={()=>this.props.addToCart(product.id)}> <i className="fa fa-shopping-cart"></i> Add to cart </div>
                                }
                            </article>
                        </aside>
                    </div>
                </div>
                </div>
                :
                <div>Loading</div>
            )
    }
}

export const ProductContainer = connect(
    (state, ownProps) => {
        return {
            ...ownProps,
            product: state.products.product,
            activeImage:state.products.productActiveImage,
            products: state.cart.cartProducts
        };
    },
    (dispatch) => {   return {
        setActiveImg: (src) => dispatch(setActiveImage(src)),
        addToCart:(id)=>dispatch(getCartItem(id))
    } }
)(ProductPage);