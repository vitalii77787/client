import React from 'react';
import { Link } from 'react-router-dom';
import { ConnectedCart } from './Cart';
import { ConnectedWish } from './Wish';
import { Input } from 'antd';

export class WishListCart extends React.Component {
	render() {
		const Search = Input.Search;
		return (
			<div class="header_main">
				<div class="container">
					<div class="row">
						<div class="col-lg-2 col-sm-3 col-3 order-1">
							<div class="logo_container">
								<div class="logo">
									<Link to={`/`} style={{ margin: '10px' }}>OneTech</Link></div>
							</div>
						</div>
						<div class="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
							<div class="header_search">
								<div class="header_search_content">
											<Search
												placeholder="input search text"
												onSearch={value => console.log(value)}
												enterButton
											/>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
							<div class="wishlist_cart d-flex flex-row align-items-center justify-content-end">
								<ConnectedWish />
								<ConnectedCart />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}