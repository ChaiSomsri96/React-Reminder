import React, {Component, Fragment} from 'react';
import {Calendar,EmailStat,Notification,Timeline,TodoList} from '../../components/dashboard-components'
class Starter extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-lg-4">
                        <Timeline />
                        <Calendar />
                    </div>
                    <div className="col-lg-4">
                        <TodoList />
                        <EmailStat id="progress-5" />
                    </div>
                    <div className="col-lg-4">
                        <Notification />
                        <EmailStat  id="progress-6"/>
                    </div>

                </div>
            </Fragment>
            );

    }
}

export default Starter;
