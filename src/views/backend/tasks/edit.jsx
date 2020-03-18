import React, {Component} from 'react'

class EditModal extends Component{
    render(){
        return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit task</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>z
                </button>
            </div>
            <div className="modal-body">
                <div className="card">
                <div className="row align-items-center m-0 mt-2 px-2">
                    <input type="checkbox" />
                    <span>Completed</span>
                    <input type="checkbox" className="ml-3" />
                    <span>Delayed</span>
                </div>
                <div className="row m-0 mt-2 px-2">
                    <div className="col-6">
                    <div className="form-group">
                        <label className="form-control-label">
                        Start date
                        </label>
                        <input type="datetime-local" className="form-control" />
                    </div>
                    </div>
                    <div className="col-6">
                    <div className="form-group">
                        <label className="form-control-label">
                        Remind me on
                        </label>
                        <input type="datetime-local" className="form-control" />
                    </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                        <h6 className="mb-0">Check list</h6>
                        </div>
                        <div className="text-right">
                        <div className="actions">
                            <button  className="btn btn-sm btn-secondary btn-icon rounded-pill"><i
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
                                <label className="custom-control-label h6 text-sm" htmlFor="check-item-1">Call with Dave</label>
                            </div>
                            </div>
                            <div className="col-auto card-meta d-inline-flex align-items-center ml-sm-auto">
                            <div className="dropdown" data-toggle="dropdown">
                                <a  className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fas fa-ellipsis-h"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a  className="dropdown-item">Refresh</a>
                                <a  className="dropdown-item">Manage Widgets</a>
                                <a  className="dropdown-item">Settings</a>
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
                                <label className="custom-control-label h6 text-sm" htmlFor="check-item-2">Lunch meeting</label>
                            </div>
                            </div>
                            <div className="col-auto card-meta d-inline-flex align-items-center ml-sm-auto">
                            <div className="dropdown" data-toggle="dropdown">
                                <a  className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fas fa-ellipsis-h"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a  className="dropdown-item">Refresh</a>
                                <a  className="dropdown-item">Manage Widgets</a>
                                <a  className="dropdown-item">Settings</a>
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
                                <label className="custom-control-label h6 text-sm" htmlFor="check-item-3">Webpixels website
                                redesign</label>
                            </div>
                            </div>
                            <div className="col-auto card-meta d-inline-flex align-items-center ml-sm-auto">
                            <div className="dropdown" data-toggle="dropdown">
                                <a  className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fas fa-ellipsis-h"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a  className="dropdown-item">Refresh</a>
                                <a  className="dropdown-item">Manage Widgets</a>
                                <a  className="dropdown-item">Settings</a>
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
                                <label className="custom-control-label h6 text-sm" htmlFor="check-item-4">Dashboard cards</label>
                            </div>
                            </div>
                            <div className="col-auto card-meta d-inline-flex align-items-center ml-sm-auto">
                            <div className="dropdown" data-toggle="dropdown">
                                <a  className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fas fa-ellipsis-h"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a  className="dropdown-item">Refresh</a>
                                <a  className="dropdown-item">Manage Widgets</a>
                                <a  className="dropdown-item">Settings</a>
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
                                <label className="custom-control-label h6 text-sm" htmlFor="check-item-5">Call with Dave</label>
                            </div>
                            </div>
                            <div className="col-auto card-meta d-inline-flex align-items-center ml-sm-auto">
                            <div className="dropdown" data-toggle="dropdown">
                                <a  className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fas fa-ellipsis-h"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                <a  className="dropdown-item">Refresh</a>
                                <a  className="dropdown-item">Manage Widgets</a>
                                <a  className="dropdown-item">Settings</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
        );
    }
}
export default EditModal;