import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/ProductInfo/productinfo.css'
import { setActiveImage } from '../_actions/products.actions';

class ProductPage extends Component {

    render() {
        const { product } = this.props;
        if (product.photos) {
            let activeImage=(this.props.activeImage===0)?product.photos[0]:this.props.activeImage;
            return (
                <div className="container">
                <div className='card'>
                    <div className="row">
                        <aside className="col-sm-5 border-right">
                            <div className='row'>
                                <ul className="image_list col-lg-4 order-1">
                                {
                                product.photos.map(photo =>
                                        <li key={photo} onClick={() => this.props.setActiveImg(photo)}>
                                            <img src={photo} />
                                        </li>
                                    )
                                }
                                </ul>
                                <div className="col-lg-8 order-2">
                                    <div className="image_selected"><img src={activeImage} alt="" /></div>
                                </div>
                            </div>
                            {/* <div className="img-big-wrap">
                                <div> <img src={product.photos[0]} /></div>
                            </div>
                            <div className="img-small-wrap">
                                {
                                    product.photos.map(photo =>
                                        <div key={photo} className="item-gallery">
                                            <img src={photo} />
                                        </div>
                                    )
                                }
                            </div> */}
                            {/* </article> */}
                        </aside>
                        <aside className="col-sm-7">
                            <article className="card-body p-5">
                                <h3 className="title mb-3">{product.title}</h3>
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
                                <a href="#" className="btn btn-lg btn-primary text-uppercase"> Buy now </a>
                                <a href="#" className="btn btn-lg btn-outline-primary text-uppercase"> <i className="fas fa-shopping-cart"></i> Add to cart </a>
                            </article>
                        </aside>
                    </div>
                </div>
                </div>
            )
        }
        else {
            return (
                <span>Loading...</span>
            )
        }
    }
}

export const ProductContainer = connect(
    (state, ownProps) => {
        return {
            ...ownProps,
            product: state.products.product,
            activeImage:state.products.productActiveImage
        };
    },
    (dispatch) => {   return {
        setActiveImg: (src) => dispatch(setActiveImage(src))

    } }
)(ProductPage);