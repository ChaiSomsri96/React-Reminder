import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {toast} from 'react-toastify';
import {register} from '../../../services';

class Register extends Component {
    state = {
        email: '',
        password: '',
        is_password: 1, //1:'password', 0: 'text',
        confirm_password: '',
        privacy: 0,
        terms: 0
    };
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };
    handleSubmit = (event) => {
        const {email, password, confirm_password, privacy, terms} = this.state;

        if (email.trim().length > 0 && password.trim().length && password === confirm_password) {
            register(email, password)
                .then(({ data}) => {
                    toast.success(data.msg)
                })
                .catch((err) => {
                    console.log(err);
                });
            this.props.history.push('/login');
        }
    };
    handlePassword = () => {
        this.setState({is_password: 1 - this.state.is_password});
    };

    render() {
        const {email, password, is_password, confirm_password} = this.state;
        let password_type = 'password';
        if (!is_password) password_type = 'text';
        return (
            <div className="min-vh-100 py-5 d-flex align-items-center">
                <div className="w-100">
                    <div className="row justify-content-center">
                        <div className="col-sm-8 col-lg-5">
                            <div className="card shadow zindex-100 mb-0">
                                <div className="card-body px-md-5 py-5">
                                    <div className="mb-5">
                                        <h6 className="h3">Create account</h6>
                                        <p className="text-muted mb-0">Made with love by developers for developers.</p>
                                    </div>
                                    <span className="clearfix"/>
                                    <form role="form">
                                        <div className="form-group">
                                            <label className="form-control-label">Email address</label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-user"/>
                                                    </span>
                                                </div>
                                                <input type="email" name="email" value={email}
                                                       onChange={this.handleChange}
                                                       className="form-control" id="input-email"
                                                       placeholder="name@example.com"/>
                                            </div>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label className="form-control-label">Password</label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-key"/>
                                                    </span>
                                                </div>
                                                <input type={password_type} name="password" value={password}
                                                       onChange={this.handleChange} className="form-control"
                                                       id="input-password" placeholder="********"/>
                                                <div className="input-group-append">
                              <span className="input-group-text"
                                    onClick={this.handlePassword}
                              >
                                <span style={{color: '#6e00ff'}} data-toggle="password-text"
                                      data-target="#input-password">
                                  <i className="fas fa-eye"/>
                                </span>
                              </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-control-label">Confirm password</label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i
                                                        className="fas fa-key"></i></span>
                                                </div>
                                                <input type={password_type} className="form-control"
                                                       id="input-password-confirm" placeholder="********"
                                                       name="confirm_password" value={confirm_password}
                                                       onChange={this.handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="my-4">
                                            <div className="custom-control custom-checkbox mb-3">
                                                <input type="checkbox" className="custom-control-input" name="terms"
                                                       id="check-terms" onChange={this.handleChange}/>
                                                <label className="custom-control-label" for="check-terms">I agree to
                                                    the <span
                                                        style={{color: '#6e00ff'}}>terms and conditions</span></label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" name="privacy"
                                                       onChange={this.handleChange}
                                                       id="check-privacy"/>
                                                <label className="custom-control-label" for="check-privacy">I agree to
                                                    the <span style={{color: '#6e00ff'}}>privacy policy</span></label>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <button type="button"
                                                    className="btn btn-sm btn-primary btn-icon rounded-pill"
                                                    onClick={this.handleSubmit}
                                            >
                                                <span className="btn-inner--text">Create my account</span>
                                                <span className="btn-inner--icon">
                                                  <i className="fas fa-long-arrow-alt-right"/>
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer px-md-5"><small>Already have an acocunt?</small>
                                    <NavLink to="/login" className="small font-weight-bold">
                                        Sign in
                                    </NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
