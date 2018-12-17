import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    changeNameAction,
    changeMailAction,
    changePasswordAction,
    changePasswordConfirmAction
} from '../../../_actions/registerModel.actions';
import { validate } from '../../../_services/user-register-validation.service';

 class RegisterForm extends Component {
    changeName = (event) => {
        const newName = event.target.value
        
        this.props.changeName(newName);
    };

    changeMail = (event) => {
        const newMail = event.target.value
        
        this.props.changeMail(newMail);
    };

    changePassword = (event) => {
        const newPassword = event.target.value
        
        this.props.changePassword(newPassword);
    };

    changePasswordConfirm = (event) => {
        const newPasswordConfirm = event.target.value
        
        this.props.changePasswordConfirm(newPasswordConfirm);
    };


    render() {
        return (
            <div className="container" >
                <form className="form-horizontal"  method="POST" action="/register">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2>Register New User</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 field-label-responsive">
                            <label for="name">Name</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{width: '2.6rem'}}><i className="fa fa-user"></i></div>
                                    <input type="text" name="name" className="form-control" id="name"
                                        value={this.props.name} onChange={this.changeName}
                                        placeholder="John Doe" required autoFocus />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-control-feedback">
                                <span className="text-danger align-middle">
                              { 
                                  this.props.validationResult.errors.length>0?
                                "errors":""
                                  /* { this.props.validationResult.errors.map((error) => 
                               error.id==="name"?
                                (<i className="fa fa-close" key={error.id}>{error.text}</i>):{}) */
                                }
                                </span>
                            </div>
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
                                     value={this.props.mail} onChange={this.changeMail}
                                        placeholder="you@example.com" required autoFocus />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-control-feedback">
                                <span className="text-danger align-middle">
                                 {this.props.validationResult.errors.length>0?
                                 "errors":""
                                     /* { this.props.validationResult.errors.map((error) => 
                               error.id==="mail"?
                                (<i className="fa fa-close" key={error.id}>{error.text}</i>):{}) */
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
                                    <input type="password" name="password" className="form-control" id="password"
                                    value={this.props.password} onChange={this.changePassword}
                                        placeholder="Password" required />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-control-feedback">
                                <span className="text-danger align-middle">
                                    
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 field-label-responsive">
                            <label for="password">Confirm Password</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon" style={{width: '2.6rem'}}>
                                        <i className="fa fa-repeat"></i>
                                    </div>
                                    <input type="password" name="password-confirmation" className="form-control"
                                        id="password-confirm" value={this.props.passwordConfirm} onChange={this.changePasswordConfirm}
                                        placeholder="Password" required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <button type="submit" disabled={!this.props.validationResult.isValid} className="btn btn-success"><i className="fa fa-user-plus"></i> Register</button>
                        </div>
                    </div>
                   
                </form>
            </div>

        )

    }
}

export const ConnectedRegisterForm = connect(
    (state, ownProps) => {
        return {
            ...ownProps,
            name: state.register.name,
            mail: state.register.mail,
            password: state.register.password,
            passwordConfirm: state.register.passwordConfirm,
            validationResult: validate(state.register.name, state.register.mail, state.register.password, state.register.passwordConfirm)
        };
    },
    (dispatch) => {
        return {
            changeName: (name) => dispatch(changeNameAction(name)),
            changeMail: (mail) => dispatch(changeMailAction(mail)),
            changePassword: (password) => dispatch(changePasswordAction(password)),
            changePasswordConfirm: (passwordConfirm) => dispatch(changePasswordConfirmAction(passwordConfirm))
        }
    }
)(RegisterForm);

