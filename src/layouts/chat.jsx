import React from 'react';


class Chat extends React.Component {
  render() {
    return (
        <div className="modal fade fixed-right" id="modal-chat" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-vertical" role="document">
          <div className="modal-content">
            <div className="modal-header align-items-center">
              <div className="modal-title">
                <h6 className="mb-0">Chat</h6>
                <span className="d-block text-sm">3 new conversations</span>
              </div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="scrollbar-inner">
              <div className="list-group list-group-flush">
                <a href="home" className="list-group-item list-group-item-action">
                  <div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="">
                    <div>
                      <div className="avatar-parent-child">
                        <img alt="Placeholder" src="../../assets/img/theme/light/team-1-800x800.jpg" className="avatar  rounded-circle" />
                        <span className="avatar-child avatar-badge bg-warning"></span>
                      </div>
                    </div>
                    <div className="flex-fill ml-3">
                      <h6 className="text-sm mb-0">John Sullivan</h6>
                      <p className="text-sm mb-0">
                        Working remotely
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="modal-footer py-3 mt-auto">
              <a href="home" className="btn btn-block btn-sm btn-neutral btn-icon rounded-pill">
                <span className="btn-inner--icon"><i className="fab fa-facebook-messenger"></i></span>
                <span className="btn-inner--text">Open Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Chat;
