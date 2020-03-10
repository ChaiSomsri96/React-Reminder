import React from 'react';


class EmailStat extends React.Component {
  componentDidMount(){
    /**
     *  Draw Progress Circle
     */
        let progress_circle = document.getElementById(this.props.id);
        var options = {
          color: window.PurposeStyle.colors.theme['warning'],
          strokeWidth: 7,
          trailWidth: 2,
          text: { 
            value: 98 ,
            className:'h1'
          },
          svgStyle: { display: 'block', },
          duration: 1500,
          easing: 'easeInOut'
        };
        let progress_obj = new window.ProgressBar.Circle(progress_circle, options);
        progress_obj.animate(50 / 100);
        /**
         * End of Drawing Progress Circle
         */
    }
  render() {
    return (
      <div className="card">
        <div className="card-body text-center d-flex flex-column justify-content-center">
          <h5 className="mb-4">Emails sent</h5>
          <div className="progress-circle progress-lg mx-auto" id={this.props.id} data-progress="50" data-text="98" data-textclass="h1" data-color="warning"></div>
          <div className="d-flex mt-4">
            <div className="col">
            <span className="d-block badge badge-dot badge-lg h6">
              <i className="bg-danger"></i>30 not sent
            </span>
              <span className="d-block badge badge-dot badge-lg h6">
              <i className="bg-success"></i>68 success
            </span>
            </div>
            <div className="col">
            <span className="d-block badge badge-dot badge-lg h6">
              <i className="bg-warning"></i>38 opened
            </span>
              <span className="d-block badge badge-dot badge-lg h6">
              <i className="bg-danger"></i>SMTP error
            </span>
            </div>
          </div>
          <a className="btn btn-block btn-secondary mt-auto">Open insights</a>
        </div>
      </div>
    );
  }
}
export default EmailStat;
