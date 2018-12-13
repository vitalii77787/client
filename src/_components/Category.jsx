import React, { Component } from 'react';
import { RoutedCategoryProducts } from './Products';
import { RoutedCategoryListContainer } from './CategoryList';
import '../Style/ProductInfo/shop_styles.css';
import { ConnectedCategoryHeader } from './CategoryHeader';
import { ConnectedProductsFilter } from './ProductsFilter';


export class CategoriesPage extends React.Component {
    render() {
        return (
            <div>
                <ConnectedCategoryHeader/>
                <div className="shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="shop_sidebar">
                                    <div className="sidebar_section">
                                        <div className="sidebar_title">Categories</div>
                                        <RoutedCategoryListContainer />
                                    </div>
                                    <div className="sidebar_section filter_by_section">
                                        <div className="sidebar_title">Filter By</div>
                                        <div className="sidebar_subtitle">Price</div>
                                        <div className="filter_price">
                                            <div id="slider-range" className="slider_range"></div>
                                            <p>Range: </p>
                                            <p><input type="text" id="amount" className="amount" style={{ border: '0', fontWeight: 'bold' }} readOnly value='$1-$1000' /></p>
                                        </div>
                                    </div>
                                    <div className="sidebar_section">
                                        <div className="sidebar_subtitle brands_subtitle">Brands</div>
                                        <ul className="brands_list">
                                            <li className="brand"><a href="#">Apple</a></li>
                                            <li className="brand"><a href="#">Beoplay</a></li>
                                            <li className="brand"><a href="#">Google</a></li>
                                            <li className="brand"><a href="#">Meizu</a></li>
                                            <li className="brand"><a href="#">OnePlus</a></li>
                                            <li className="brand"><a href="#">Samsung</a></li>
                                            <li className="brand"><a href="#">Sony</a></li>
                                            <li className="brand"><a href="#">Xiaomi</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="shop_content">
                                    <div className="shop_bar clearfix">
                                        <div className="shop_product_count"><span>186</span> products found</div>
                                        <div className="shop_sorting">
                                            <span>Sort by:</span>
                                            <ul>
                                                <li>
                                                   <ConnectedProductsFilter/>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <RoutedCategoryProducts />
                                    <div className="shop_page_nav d-flex flex-row">
                                        <div className="page_prev d-flex flex-column align-items-center justify-content-center"><i className="fa fa-chevron-left"></i></div>
                                        <ul className="page_nav d-flex flex-row">
                                            <li><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">...</a></li>
                                            <li><a href="#">21</a></li>
                                        </ul>
                                        <div className="page_next d-flex flex-column align-items-center justify-content-center"><i class="fa fa-chevron-right"></i></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

