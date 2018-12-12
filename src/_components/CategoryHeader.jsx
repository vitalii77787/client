import React, { Component } from 'react';
import { connect } from 'react-redux';


class CategoryHeader extends Component {
    render() {
        const { activeCategoryName } = this.props;
            return (
                <div className="home">
                    <div className="home_background parallax-window" data-parallax="scroll" data-image-src="images/shop_background.jpg"></div>
                    <div className="home_overlay"></div>
                    <div className="home_content d-flex flex-column align-items-center justify-content-center">
                    {
                        activeCategoryName===''?<h2>No category selected</h2>:<h2 className="home_title">{activeCategoryName}</h2>
                    }
                    </div>
                </div>
            )
    }
}
export const ConnectedCategoryHeader = connect(
    (state, ownProps) => {
        return {
            ...ownProps,
            activeCategoryName: state.categories.activeCategoryName
        }
    },
    (dispatch) => {
        return {
        }
    }
)(CategoryHeader);