import React from 'react';


class Timeline extends React.Component {
  render() {
    return (
      <div className="card">
              <div className="card-header">
                <h5 className=" h6 mb-0">Timeline</h5>
              </div>
              <div className="card-body">
                <div className="timeline timeline-one-side" data-timeline-content="axis" data-timeline-axis-style="dashed">
                  <div className="timeline-block">
                    <span className="timeline-step badge-primary">
                    </span>
                    <div className="timeline-content">
                      <small className="text-muted font-weight-bold">10:30 AM</small>
                      <h5 className="h6 ">Mail sent to</h5>
                      <p className=" text-sm mb-0">Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                      <div className="mt-3">
                        <span className="badge badge-pill badge-soft-primary">design</span>
                        <span className="badge badge-pill badge-soft-primary">system</span>
                        <span className="badge badge-pill badge-soft-primary">creative</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-block">
                    <span className="timeline-step badge-warning">
                    </span>
                    <div className="timeline-content">
                      <small className="text-muted font-weight-bold">10:30 AM</small>
                      <h5 className="h6 ">You liked a comment from</h5>
                      <p className=" text-sm mb-0">Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                      <div className="mt-3">
                        <span className="badge badge-pill badge-soft-warning">design</span>
                        <span className="badge badge-pill badge-soft-warning">system</span>
                        <span className="badge badge-pill badge-soft-warning">creative</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-block">
                    <span className="timeline-step badge-info">
                    </span>
                    <div className="timeline-content">
                      <small className="text-muted font-weight-bold">10:30 AM</small>
                      <h5 className="h6 ">New likes from</h5>
                      <p className=" text-sm mb-0">Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                      <div className="mt-3">
                        <span className="badge badge-pill badge-soft-info">design</span>
                        <span className="badge badge-pill badge-soft-info">system</span>
                        <span className="badge badge-pill badge-soft-info">creative</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    );
  }
}
export default Timeline;
