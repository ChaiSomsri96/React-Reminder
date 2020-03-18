import React , {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Recover extends Component{
    render(){
        return (
            <div className="page-content">
        <div className="min-vh-100 py-5 d-flex align-items-center">
          <div className="w-100">
            <div className="row justify-content-center">
              <div className="col-sm-8 col-lg-5 col-xl-4">
                <div className="card shadow zindex-100 mb-0">
                  <div className="card-body px-md-5 py-5">
                    <div className="mb-5">
                      <h6 className="h3">Password reset</h6>
                      <p className="text-muted mb-0">Enter your email below to proceed.</p>
                    </div>
                    <span className="clearfix"></span>
                    <form role="form">
                      <div className="form-group">
                        <label className="form-control-label">Email address</label>
                        <div className="input-group input-group-merge">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                          </div>
                          <input type="email" className="form-control" id="input-email" placeholder="name@example.com" />
                        </div>
                      </div>
                      <div className="mt-4"><button type="button" className="btn btn-sm btn-primary btn-icon rounded-pill">
                          <span className="btn-inner--text">Reset password</span>
                          <span className="btn-inner--icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                        </button></div>
                    </form>
                  </div>
                  <div className="card-footer px-md-5"><small>Not registered?</small>
                    <NavLink to="/register" className="small font-weight-bold">
                        Create account
                    </NavLink>
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
export default Recover;