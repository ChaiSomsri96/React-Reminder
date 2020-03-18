import React , {Component} from 'react';

class ContactUs extends Component{
    render(){
        return (
            <div className="page-content">
        <div className="min-vh-100 py-5 d-flex align-items-center">
          <div className="w-100">
            <div className="row justify-content-center">
              <div className="col-sm-8 col-lg-8 col-xl-8">
                <div className="card shadow zindex-100 mb-0">
                  <div className="card-body px-md-5 py-5">
                    <div className="mb-5">
                      <h6 className="h3 text-info font-weight-bold">Tell us about <b>yourself</b></h6>
                      <p className="text-muted mb-0">Whether yuo have questions or you would just like to say hello, contact us.</p>
                    </div>
                    <span className="clearfix"></span>
                    <div id="yourAccount" className="tab-pane fade show active" role="tabpanel"
                         aria-labelledby="yourAccoun-tab">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-control-label">YOUR NAME</label>
                            <input className="form-control" type="text" placeholder="Jack Wayley" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-control-label">YOUR EMAIL ADDRESS</label>
                            <input className="form-control" type="email" placeholder="jackwayley@gmail.com" />
                          </div>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-control-label">SUBJECT</label>
                            <input type="text" className="form-control" data-toggle="date"
                                   placeholder="Web design" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-control-label">YOUR PHONE NUMBER</label>
                            <input className="form-control" type="text" placeholder="1-800-643-4500" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-group">
                            <div className="form-group">
                              <label className="form-control-label">HOW CAN WE HELP YOU?</label>
                              <textarea className="form-control"
                                        placeholder="Hi there, I would like to ..."
                                        rows="3"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer px-md-5 text-center">
                    <button type="button" className="btn btn-sm btn-primary rounded-pill">Submit
                    </button>
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
export default ContactUs;