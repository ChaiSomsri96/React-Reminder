import React, {Component, Fragment} from 'react';
class PayForm extends Component {
    render() {
        return (
            <div className="page-content">
                <div className="row justify-content-center">
                <div className="col-xl-8">
                    <div className="card">
                    <div className="card-body">
                        <form>
                        {/* <!-- General information --> */}
                        <div className="row">
                            <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-control-label">Bill name</label>
                                <input className="form-control" type="text" placeholder="Enter your first name" />
                            </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-control-label">Status</label>
                                <select className="form-control" data-toggle="select">
                                <option value="1">Female</option>
                                <option value="2">Male</option>
                                <option value="2">Rather not say</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-control-label">Amount / Price</label>
                                <input className="form-control" type="email" placeholder="name@exmaple.com" />
                                <small className="form-text text-muted mt-2">This is the main email address that we'll send notifications.</small>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <div className="form-group">
                                <label className="form-control-label">To be paid on</label>
                                <input className="form-control" type="datetime-local" />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <div className="form-group">
                                <label className="form-control-label">Create reminder</label>
                                <input type="checkbox" id="reminder" checked />
                            </div>
                            </div>
                        </div>

                        <div id="reminderDiv">
                            <div className="row px-4 m-0 mt-2 align-items-center">
                            <div className="col-6">
                                <span className="fas fa-envelope"></span>
                                <span className="ml-2">Remind me via email</span>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-0 text-right">
                                <select className="custom-select py-0" style={{height: 35}}>
                                    <option selected>Open this select menu</option>
                                    <option value="1">Personal</option>
                                    <option value="2">Work Grocery</option>
                                    <option value="3">Other</option>
                                </select>
                                </div>
                            </div>
                            </div>

                            <div className="row px-4 m-0 mt-2 align-items-center">
                            <div className="col-6">
                                <span className="fas fa-phone"></span>
                                <span className="ml-2">Remind me via SMS</span>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-0 text-right">
                                <select className="custom-select py-0" style={{height: 35}}>
                                    <option selected>Open this select menu</option>
                                    <option value="1">Personal</option>
                                    <option value="2">Work Grocery</option>
                                    <option value="3">Other</option>
                                </select>
                                </div>
                            </div>
                            </div>

                            <div className="row px-4 m-0 mt-2 align-items-center">
                            <div className="col-6">
                                <span className="fab fa-amazon"></span>
                                <span className="ml-2">Remind me via alexa</span>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-0 text-right">
                                <select className="custom-select py-0" style={{height: 35}}>
                                    <option selected>Open this select menu</option>
                                    <option value="1">Personal</option>
                                    <option value="2">Work Grocery</option>
                                    <option value="3">Other</option>
                                </select>
                                </div>
                            </div>
                            </div>

                            <div className="row px-4 m-0 mt-2 align-items-center">
                            <div className="col-6">
                                <span className="fab fa-whatsapp"></span>
                                <span className="ml-2">Remind me via Whatsup</span>
                            </div>
                            <div className="col-6">
                                <div className="form-group mb-0 text-right">
                                <select className="custom-select py-0" style={{height: 35}}>
                                    <option selected>Open this select menu</option>
                                    <option value="1">Personal</option>
                                    <option value="2">Work Grocery</option>
                                    <option value="3">Other</option>
                                </select>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <!-- Save changes buttons --> */}
                        <button type="button" className="btn btn-sm btn-primary rounded-pill border-0" style={{backgroundColor: '#1f8475'}}>
                            <span className="fas fa-plus-circle"></span>
                            Submit
                        </button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>       
            );

    }
}

export default PayForm;
