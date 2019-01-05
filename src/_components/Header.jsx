import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../_actions/user.actions';


export class Header extends React.Component {
    render() {
        return (
            <div className="top_bar">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-row">
                            <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="" alt="" /></div>+38 068 005 3570</div>
                            <div className="top_bar_contact_item"><div className="top_bar_icon"><img src="" alt="" /></div><a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
                            <div className="top_bar_contact_item"><Link to="/categories">Categories</Link></div>
                            {!this.props.isLogin && <div className="top_bar_content ml-auto">
                                <div className="top_bar_user">
                                    <div className="user_icon"><img src="" alt="" /></div>
                                    <div><Link to="/register">Register</Link></div>
                                    <div><Link to="/login">Sign in</Link></div>
                                </div>
                            </div>
                            }
                            {
                                this.props.isLogin &&
                                
                                    <div className="top_bar_contact_item ml-auto">
                                        Hello {this.props.mail+'  '} !
                                        <button className="btn btn-outline-success btn-sm" onClick={() => this.props.LogOut()}>LogOFF</button>
                                    </div>
                              
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export const HeaderContainer = connect(
    (state) => {
        return {
            isLogin: state.authentication.logginIn,
            mail: state.authentication.user.email
        };
    },
    (dispatch) => { return {
        LogOut: () => dispatch(logout())
    }; }
)(Header);