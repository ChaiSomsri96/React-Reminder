import React from 'react';


class Notification extends React.Component {
  render() {
    return (
      <div className="card">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-0">Notifications</h6>
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
      <div className="list-group list-group-flush">
        <a href="home" className="list-group-item list-group-item-action">
          <div className="d-flex">
            <div>
              <i className="fas fa-bell mr-3"></i>
            </div>
            <div>
              <div className="text-sm lh-150">
                Mail sent to <span className="text-dark font-weight-bold">Alex Michael</span>
              </div>
              <small className="d-block text-muted">2 hrs ago</small>
            </div>
          </div>
        </a>
        <a href="home" className="list-group-item list-group-item-action">
          <div className="d-flex">
            <div>
              <i className="fas fa-thumbs-up mr-3"></i>
            </div>
            <div>
              <div className="text-sm lh-150">
                You liked a comment from <span className="text-dark font-weight-bold">Sandra Wayne</span>
              </div>
              <small className="d-block text-muted">3 hrs ago</small>
            </div>
          </div>
        </a>
        <a href="home" className="list-group-item list-group-item-action">
          <div className="d-flex">
            <div>
              <i className="fas fa-thumbs-up mr-3"></i>
            </div>
            <div>
              <div className="text-sm lh-150">
                New likes from <span className="text-dark font-weight-bold">Jason Miller</span>
              </div>
              <small className="d-block text-muted">5 hrs ago</small>
            </div>
          </div>
        </a>
        <a href="home" className="list-group-item list-group-item-action">
          <div className="d-flex">
            <div>
              <i className="fas fa-tasks mr-3"></i>
            </div>
            <div>
              <div className="text-sm lh-150">
                You are now in team with <span className="text-dark font-weight-bold">Mike Thomson</span>
              </div>
              <small className="d-block text-muted">2 hrs ago</small>
            </div>
          </div>
        </a>
        <a href="home" className="list-group-item list-group-item-action">
          <div className="d-flex">
            <div>
              <i className="fas fa-envelope mr-3"></i>
            </div>
            <div>
              <div className="text-sm lh-150">
                Mail sent to <span className="text-dark font-weight-bold">Richard Nixon</span>
              </div>
              <small className="d-block text-muted">3 hrs ago</small>
            </div>
          </div>
        </a>
      </div>
      <div className="card-footer py-2 text-center">
        <a href="home" className="text-sm text-muted font-weight-bold">See all notifications</a>
      </div>
    </div>
    );
  }
}
export default Notification;
