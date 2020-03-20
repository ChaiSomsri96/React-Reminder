import React, {Component, Fragment} from 'react';
class Create extends Component {
    componentDidMount(){
        window.jQuery.Dragula.init();
    }
    render() {
        return (
            <div className="page-content">
                <div className="card">
                <div className="row">
                    <div className="col-lg-6">
                    <form>
                        <div>
                        <div className="card-body">
                            <div className="form-group">
                            <label className="form-control-label">
                                Task name
                            </label>
                            <input type="text" className="form-control" />
                            </div>
                            {/* <!-- Task project --> */}
                            <div className="form-group">
                            <label className="form-control-label">
                                Task type
                            </label>
                            <select className="custom-select">
                                <option selected>Open this select menu</option>
                                <option value="1">Personal</option>
                                <option value="2">Work Grocery</option>
                                <option value="3">Other</option>
                            </select>
                            </div>
                            {/* <!-- Task description --> */}
                            <div className="form-group">
                            <label className="form-control-label mb-0">
                                Task description
                            </label>
                            <small className="form-text text-muted mb-2 mt-0">
                                Textarea with editing toolbar
                            </small>
                            <div data-toggle="quill"></div>
                            </div>
                            {/* <!-- Task date --> */}
                            <div className="form-group">
                            <div className="row">
                                <div className="col-12 col-md-12">
                                {/* <!-- Start date --> */}
                                <div className="form-group">
                                    <label className="form-control-label">
                                    Start date
                                    </label>
                                    <input type="datetime-local" className="form-control" />
                                </div>
                                </div>
                                <div className="col-12 col-md-12">
                                {/* <!-- Start date --> */}
                                <div className="form-group">
                                    <label className="form-control-label">
                                    Remind me on
                                    </label>
                                    <input type="datetime-local" className="form-control" />
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>

                    <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                            <h6 className="mb-0">Check list</h6>
                            </div>
                            <div className="text-right">
                            <div className="actions">
                                <button href="#" className="btn btn-sm btn-secondary btn-icon rounded-pill"><i
                                        className="fas fa-plus-circle"></i>Add Item
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card-wrapper p-3">
                        <div className="checklist" data-toggle="dragula">
                            <div className="card border draggable-item shadow-none">
                            <div className="px-3 py-2 row align-items-center">
                                <div className="col-10">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check-item-1" defaultChecked />
                                    <label className="custom-control-label h6 text-sm" for="check-item-1">Call with Dave</label>
                                </div>
                                </div>
                                <div className="col-auto card-meta d-inline-flex align-items-center ml-sm-auto">
                                <div className="dropdown" data-toggle="dropdown">
                                    <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="fas fa-ellipsis-h"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item">Refresh</a>
                                    <a href="#" className="dropdown-item">Manage Widgets</a>
                                    <a href="#" className="dropdown-item">Settings</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="card border draggable-item shadow-none">
                            <div className="px-3 py-2 row align-items-center">
                                <div className="col-10">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check-item-2" />
                                    <label className="custom-control-label h6 text-sm" for="check-item-2">Lunch meeting</label>
                                </div>
                                </div>
                                <div className="col-auto card-meta d-inline-flex align-items-center ml-sm-auto">
                                <div className="dropdown" data-toggle="dropdown">
                                    <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="fas fa-ellipsis-h"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item">Refresh</a>
                                    <a href="#" className="dropdown-item">Manage Widgets</a>
                                    <a href="#" className="dropdown-item">Settings</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="card border draggable-item shadow-none">
                            <div className="px-3 py-2 row align-items-center">
                                <div className="col-10">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check-item-3" />
                                    <label className="custom-control-label h6 text-sm" for="check-item-3">Webpixels website
                                    redesign</label>
                                </div>
                                </div>
                                <div className="col-auto card-meta d-inline-flex align-items-center ml-sm-auto">
                                <div className="dropdown" data-toggle="dropdown">
                                    <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="fas fa-ellipsis-h"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item">Refresh</a>
                                    <a href="#" className="dropdown-item">Manage Widgets</a>
                                    <a href="#" className="dropdown-item">Settings</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="card border draggable-item shadow-none">
                            <div className="px-3 py-2 row align-items-center">
                                <div className="col-10">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check-item-4" defaultChecked />
                                    <label className="custom-control-label h6 text-sm" for="check-item-4">Dashboard cards</label>
                                </div>
                                </div>
                                <div className="col-auto card-meta d-inline-flex align-items-center ml-sm-auto">
                                <div className="dropdown" data-toggle="dropdown">
                                    <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="fas fa-ellipsis-h"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item">Refresh</a>
                                    <a href="#" className="dropdown-item">Manage Widgets</a>
                                    <a href="#" className="dropdown-item">Settings</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="card border draggable-item shadow-none">
                            <div className="px-3 py-2 row align-items-center">
                                <div className="col-10">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="check-item-5" defaultChecked />
                                    <label className="custom-control-label h6 text-sm" for="check-item-5">Call with Dave</label>
                                </div>
                                </div>
                                <div className="col-auto card-meta d-inline-flex align-items-center ml-sm-auto">
                                <div className="dropdown" data-toggle="dropdown">
                                    <a href="#" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="fas fa-ellipsis-h"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#" className="dropdown-item">Refresh</a>
                                    <a href="#" className="dropdown-item">Manage Widgets</a>
                                    <a href="#" className="dropdown-item">Settings</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div>
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
                            <span className="fas fa-amazon"></span>
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
                            <span className="fas fa-phone"></span>
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

                    <div className="text-right my-3 mr-3">
                        <button type="button" className="btn btn-sm btn-primary rounded-pill border-0" style={{backgroundColor: "#1f8475"}}>
                        <span className="fas fa-plus-circle"></span>
                        Submit
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            );

    }
}

export default Create;
