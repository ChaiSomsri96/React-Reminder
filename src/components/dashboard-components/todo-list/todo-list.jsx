import React from 'react';


class TodoList extends React.Component {
  componentDidMount(){
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-0">To do list</h6>
            </div>
            <div className="text-right">
              <div className="actions">
                <a href="home" className="action-item"><i className="fas fa-sync"></i></a>
                <div className="dropdown action-item" data-toggle="dropdown">
                  <a href="home" className="action-item"><i className="fas fa-ellipsis-h"></i></a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="home" className="dropdown-item">Refresh</a>
                    <a href="home" className="dropdown-item">Manage Widgets</a>
                    <a href="home" className="dropdown-item">Settings</a>
                  </div>
                </div>
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
                    <a href="home" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-h"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a href="home" className="dropdown-item">Refresh</a>
                      <a href="home" className="dropdown-item">Manage Widgets</a>
                      <a href="home" className="dropdown-item">Settings</a>
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
                    <a href="home" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-h"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a href="home" className="dropdown-item">Refresh</a>
                      <a href="home" className="dropdown-item">Manage Widgets</a>
                      <a href="home" className="dropdown-item">Settings</a>
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
                    <label className="custom-control-label h6 text-sm" htmlFor="check-item-3">Webpixels website redesign</label>
                  </div>
                </div>
                <div className="col-auto card-meta d-inline-flex align-items-center ml-sm-auto">
                  <div className="dropdown" data-toggle="dropdown">
                    <a href="home" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-h"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a href="home" className="dropdown-item">Refresh</a>
                      <a href="home" className="dropdown-item">Manage Widgets</a>
                      <a href="home" className="dropdown-item">Settings</a>
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
                    <a href="home" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-h"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a href="home" className="dropdown-item">Refresh</a>
                      <a href="home" className="dropdown-item">Manage Widgets</a>
                      <a href="home" className="dropdown-item">Settings</a>
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
                    <a href="home" className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-h"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a href="home" className="dropdown-item">Refresh</a>
                      <a href="home" className="dropdown-item">Manage Widgets</a>
                      <a href="home" className="dropdown-item">Settings</a>
                    </div>
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
export default TodoList;
