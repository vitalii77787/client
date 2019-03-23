import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    changeMailAction,
    changePasswordAction
} from '../../../_actions/loginModel.actions';
import { validateLogin } from '../../../_services/user-login-service';
import {
    loginValidation
} from '../../../_constants/ValidationConstants/login-validation.constants';
import { loginUser } from '../../../_actions/user.actions';

export class LoginForm extends Component {

    changeMail = (event) => {
        const newMail = event.target.value
        this.props.changeMail(newMail);
    };
    changePassword = (event) => {
        const newPassword = event.target.value
         this.props.changePassword(newPassword);
    };
    check(param) {
        for (let i = 0; i < this.props.validationResult.errors.length; i++) {
            if (this.props.validationResult.errors[i].id === param) {
                return this.props.validationResult.errors[i].text;
            }
        }
    }
    onSubmit=(e)=> {
        e.preventDefault();
        this.props.login();
        }

    render() {
        return (
            <div className="container" >
                <form className="form-horizontal"  onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2>Login</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 field-label-responsive">
                            <label for="email">E-Mail Address</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{width: '2.6rem'}}><i className="fa fa-at"></i></div>
                                    <input type="text" name="email" className="form-control" id="email"
                                        placeholder="you@example.com" required autofocus  value={this.props.mail} onChange={this.changeMail}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-control-feedback">
                                <span className="text-danger align-middle">
                                {
                                        this.check(loginValidation.mail)
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 field-label-responsive">
                            <label for="password">Password</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{width: '2.6rem'}}><i className="fa fa-key"></i></div>
                                    <input type="password" name="password" className="form-control" id="password"  value={this.props.password} onChange={this.changePassword}
                                        placeholder="Password" required />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-control-feedback">
                                <span className="text-danger align-middle">
                                {
                                        this.check(loginValidation.password)
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <button type="submit" disabled={!this.props.validationResult.isValid}  className="btn btn-success"><i className="fa fa-user"></i>  Login</button>
                        </div>
                    </div>
                </form>
            </div>

        )

    }
}
export const ConnectedLoginForm = connect(
    (state, ownProps) => {
        return {
            ...ownProps,
            mail: state.login.email,
            password: state.login.password,
            validationResult: validateLogin(state.login.email, state.login.password)
        };
    },
    (dispatch) => {
        return {
            changeMail: (mail) => dispatch(changeMailAction(mail)),
            changePassword: (password) => dispatch(changePasswordAction(password)), 
            login: () =>dispatch(loginUser())
        }
    }
)(LoginForm);

