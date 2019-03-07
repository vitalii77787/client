import React, { Component } from 'react';
import { RoutedCategoryProducts } from './Products';
import { RoutedCategoryListContainer } from './CategoryList';
import '../Style/ProductInfo/shop_styles.css';
import { ConnectedCategoryHeader } from './CategoryHeader';
import { ConnectedProductsFilter } from './ProductsFilter';
import InputRange from 'react-input-range';
import '../Style/Slyder/slider-styles.css';
import { ConnectedFilterPrice } from './FilterComponents/priceComponent';
import { ConnectedFiltersCategoryComponent } from './FilterComponents/filterCategoryComponent';
import {ConnectedPaginationComponent} from './FilterComponents/paginationComponent';

export class CategoriesPage extends React.Component {
    render() {
        return (
            <div>
                <ConnectedCategoryHeader />
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
                                   <ConnectedFilterPrice/>
                                    </div>
                                    <div className="sidebar_section">
                                        <div className="sidebar_subtitle brands_subtitle">Brands</div>
                                        <ConnectedFiltersCategoryComponent/> 
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="shop_content">
                                    <div className="shop_bar clearfix">
                                        <div className="shop_product_count"><span></span> products found</div>
                                        <div className="shop_sorting">
                                            <span>Sort by:</span>
                                            <ul>
                                                <li>
                                                    <ConnectedProductsFilter />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <RoutedCategoryProducts />
                                    <div className="shop_page_nav d-flex flex-row">
                                        <ConnectedPaginationComponent/>
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

