import React,{Component, Fragment} from 'react';

class Calendar extends Component{
    componentDidMount(){
        let $ = window.$;
        let $calendar = $('[data-toggle="calendar"]');
        if ($calendar.length) {
            window.initFullcalendar($calendar);
        }
    

    }
    render(){
        return(
            <Fragment>
            <div className="page-title">
            <div className="row justify-content-between align-items-center">
            <div className="col d-flex align-items-center">
              <a  className="text-white pr-3" data-toggle="tooltip" data-placement="left" data-original-title="Go back"><i className="fas fa-angle-left"></i></a>
              <h5 className="fullcalendar-title h4 d-inline-block font-weight-400 mb-0 text-white">Calendar</h5>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0 text-lg-right">
              <div className="btn-group" role="group" aria-label="Basic example">
                <a  className="fullcalendar-btn-prev btn btn-sm btn-neutral">
                  <i className="fas fa-angle-left"></i>
                </a>
                <a  className="fullcalendar-btn-next btn btn-sm btn-neutral">
                  <i className="fas fa-angle-right"></i>
                </a>
              </div>
              <div className="btn-group" role="group" aria-label="Basic example">
                <a  className="btn btn-sm btn-neutral" data-calendar-view="month">Month</a>
                <a  className="btn btn-sm btn-neutral" data-calendar-view="basicWeek">Week</a>
                <a  className="btn btn-sm btn-neutral" data-calendar-view="basicDay">Day</a>
              </div>
            </div>
          </div>
            </div>
            <div className="row">
          <div className="col">
            <div className="card overflow-hidden">
              <div className="calendar" data-toggle="calendar" id="calendar"></div>
            </div>
            <div className="modal fade" id="new-event" tabindex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <form className="new-event--form">
                      <div className="form-group">
                        <label className="form-control-label">Event title</label>
                        <input type="text" className="form-control form-control-alternative new-event--title" placeholder="Event Title"/>
                      </div>
                      <div className="form-group mb-0">
                        <label className="form-control-label d-block mb-3">Status color</label>
                        <div className="btn-group btn-group-toggle btn-group-colors event-tag" data-toggle="buttons">
                          <label className="btn bg-info active"><input type="radio" name="event-tag" value="bg-info" defaultChecked/></label>
                          <label className="btn bg-warning"><input type="radio" name="event-tag" value="bg-warning"/></label>
                          <label className="btn bg-danger"><input type="radio" name="event-tag" value="bg-danger"/></label>
                          <label className="btn bg-success"><input type="radio" name="event-tag" value="bg-success"/></label>
                          <label className="btn bg-secondary"><input type="radio" name="event-tag" value="bg-default"/></label>
                          <label className="btn bg-primary"><input type="radio" name="event-tag" value="bg-primary"/></label>
                        </div>
                      </div>
                      <input type="hidden" className="new-event--start" />
                      <input type="hidden" className="new-event--end" />
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-sm btn-link" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-sm btn-primary rounded-pill float-right new-event--add">Create event</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade" id="edit-event" tabindex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <form className="edit-event--form">
                      <div className="form-group">
                        <label className="form-control-label">Event title</label>
                        <input type="text" className="form-control form-control-alternative edit-event--title" placeholder="Event Title" />
                      </div>
                      <div className="form-group">
                        <label className="form-control-label d-block mb-3">Status color</label>
                        <div className="btn-group btn-group-toggle btn-group-colors event-tag mb-0" data-toggle="buttons">
                          <label className="btn bg-info active"><input type="radio" name="event-tag" value="bg-info" defaultChecked /></label>
                          <label className="btn bg-warning"><input type="radio" name="event-tag" value="bg-warning" /></label>
                          <label className="btn bg-danger"><input type="radio" name="event-tag" value="bg-danger" /></label>
                          <label className="btn bg-success"><input type="radio" name="event-tag" value="bg-success" /></label>
                          <label className="btn bg-secondary"><input type="radio" name="event-tag" value="bg-default" /></label>
                          <label className="btn bg-primary"><input type="radio" name="event-tag" value="bg-primary" /></label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-control-label">Description</label>
                        <textarea className="form-control form-control-alternative edit-event--description textarea-autosize" placeholder="Event Desctiption"></textarea>
                        <i className="form-group--bar"></i>
                      </div>
                      <input type="hidden" className="edit-event--id" />
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-sm btn-link" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-sm btn-primary rounded-pill float-right" data-calendar="update">Update</button>
                    <button type="button" className="btn btn-sm btn-danger rounded-pill float-right" data-calendar="delete">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Fragment>
        
        );
    }
}
export default Calendar;