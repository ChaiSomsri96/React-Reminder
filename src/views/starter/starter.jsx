import React, {Component, Fragment} from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col
} from 'reactstrap';
import {DashStat,Calendar,EmailStat,Notification,Timeline,TodoList} from '../../components/dashboard-components'
class Starter extends Component {
    render() {
        let stat = [
            {
                id:1,
                title: 'Spendings',
                detail: '$7.500',
                visual:{
                    progress: 40,
                    text:'40%',
                    color:'info'
                }
            },{
                id:2,
                title: 'New tasks',
                detail: '34',
                visual:{
                    progress: 60,
                    text:'60%',
                    color:'dark'
                }
            },{
                id:3,
                title: 'Finished tasks',
                detail: '68',
                visual:{
                    progress: 80,
                    color:'danger'
                }
            },{
                id:4,
                title: 'Issues',
                detail: '12',
                visual:{
                    progress: 20,
                    text:'20%',
                    color:'success'
                }
            }
        ]
        return (
            <Fragment>
                <div className="row">
                    {stat.map((data, key)=>(
                        <DashStat data = {data} key={key}/>
                    ))}
                </div>
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
