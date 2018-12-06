import React, { Component } from 'react';
import { setActiveProduct, setDefault } from '../_actions/products.actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  logo from '../images/Hunting_Knife.png'

class ProductView extends Component {
    render() {
        const { product } = this.props;
        console.log(this.props);
        const body = <section className="description">{product.text}</section>
        return (
            <div className="card" style={{width:'18rem'}} onClick={() => this.props.setActive(product.id)}>
                <img class="card-img-top" src={logo} alt="Card image cap"></img>
                {
                    this.props.activeProductId === product.id &&
                    <h1>Active</h1>
                }
                <div className='card-body'>
                    <p className="card-text">
                        <Link to={`/product/${product.id}`}>
                            <h2 style={{ textAlign: 'center' }} >
                                {product.title}
                            </h2>
                        </Link>
                    </p>
                    {body}
                </div>
            </div>
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
            setActive: (id) => dispatch(setActiveProduct(id))

        }
    }
)(ProductView);
