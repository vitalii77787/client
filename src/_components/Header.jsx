import { connect } from 'react-redux';
import React from 'react';
import '../Style/Header/header_styles.css'

export class Header extends React.Component {
    render() {
        return (
            <div className="top_bar">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-row">
                            <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="" alt="" /></div>+38 068 005 3570</div>
                            <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="" alt="" /></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
                            <div className="top_bar_content ml-auto">
                                <div className="top_bar_user">
                                    <div className="user_icon"><img src="" alt="" /></div>
                                    <div><a href="#">Register</a></div>
                                    <div><a href="#">Sign in</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export const HeaderContainer = connect(
    (store) => { return {}; },
    (dispatch) => { return {}; }
)(Header);