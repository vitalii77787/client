import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

export class NewProductView extends Component {
    render() {
        const { Meta } = Card;
        const { product } = this.props;
        if (product) {
            return (
                <div className='newproduct-wrapper'>
                <Link to={`/product/${product.id}`} style={{margin:'10px'}}>
                    <Card
                        hoverable
                        style={{ width: 200}}
                        cover={<img alt="example" src={product.photo ? product.photo : ""} style={{width: '200px', height: '200px'}}/>}
                    >
                        <Meta
                            title={product.name}
                            description={product.description}
                        />
                    </Card>
                </Link>
                </div>
            )
        }
    }
}