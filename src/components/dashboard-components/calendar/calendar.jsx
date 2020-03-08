import React from 'react';


class Calendar extends React.Component {
  componentDidMount(){
    let $ = window.$;
    if($('[data-toggle="widget-calendar"]')[0]) {
      $('[data-toggle="widget-calendar"]').fullCalendar({
          contentHeight: 'auto',
          theme: false,
          buttonIcons: {
              prev: ' fas fa-angle-left',
              next: ' fas fa-angle-right'
          },
          header: {
              right: 'next',
              center: 'title, ',
              left: 'prev'
          },
          defaultDate: '2018-12-01',
          editable: true,
          events: [
  
              {
                  title: 'Call with Dave',
                  start: '2018-11-18',
                  end: '2018-11-18',
                  className: 'bg-danger'
              },
  
              {
                  title: 'Lunch meeting',
                  start: '2018-11-21',
                  end: '2018-11-22',
                  className: 'bg-warning'
              },
  
              {
                  title: 'All day conference',
                  start: '2018-11-29',
                  end: '2018-11-29',
                  className: 'bg-success'
              },
  
              {
                  title: 'Meeting with Mary',
                  start: '2018-12-01',
                  end: '2018-12-01',
                  className: 'bg-info'
              },
  
              {
                  title: 'Winter Hackaton',
                  start: '2018-12-03',
                  end: '2018-12-03',
                  className: 'bg-danger'
              },
  
              {
                  title: 'Digital event',
                  start: '2018-12-07',
                  end: '2018-12-09',
                  className: 'bg-warning'
              },
  
              {
                  title: 'Marketing event',
                  start: '2018-12-10',
                  end: '2018-12-10',
                  className: 'bg-primary'
              },
  
              {
                  title: 'Dinner with Family',
                  start: '2018-12-19',
                  end: '2018-12-19',
                  className: 'bg-danger'
              },
  
              {
                  title: 'Black Friday',
                  start: '2018-12-23',
                  end: '2018-12-23',
                  className: 'bg-info'
              },
  
              {
                  title: 'Cyber Week',
                  start: '2018-12-02',
                  end: '2018-12-02',
                  className: 'bg-warning'
              },
  
          ]
      });
  
      //Display Current Date as Calendar widget header
      var mYear = window.moment().format('YYYY');
      var mDay =window. moment().format('dddd, MMM D');
      $('.widget-calendar-year').html(mYear);
      $('.widget-calendar-day').html(mDay);
  }
  
  }
  render() {
    return (
      <div className="card widget-calendar">
        <div className="card-header">
          <div className="text-sm text-muted mb-1 widget-calendar-year"></div>
          <div className="h5 mb-0 widget-calendar-day"></div>
        </div>
        <div data-toggle="widget-calendar"></div>
      </div>
    );
  }
}
export default Calendar;
