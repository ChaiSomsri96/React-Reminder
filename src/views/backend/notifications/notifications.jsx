import React, {Component} from 'react';
import Table from '../../../components/ui-components/table'
import {notificationService} from "../../../services";


class Notifications extends Component {
    state = {
        data: []
    };
    constructor(props) {
        super(props);
        notificationService.getAll()
            .then(response => {
                this.setState({data: response.data})
            });
    }
    rowRender(item, i){
        return (
            <tr key={i}>
                <th scope="row">
                    <input type="checkbox" />
                </th>
                <th scope="row">{item.content}</th>
                <th scope="row">{item.date}</th>
                <th scope="row">{
                    item.read ? (
                        <div>
                            <span className="text-sm text-success">●</span>
                            <span>Read</span>
                        </div>
                        ) : (
                        <div>
                            <span className="text-sm text-danger">●</span>
                            <span>Unread</span>
                        </div>
                    )
                }
                </th>
                <th className="text-right">
                    <div className="actions ml-3">
                        <a className="action-item text-danger mr-2" data-toggle="tooltip" title="Move to trash">
                            <i className="fas fa-trash"></i>
                        </a>
                    </div>
                </th>
            </tr>
        )
    }
    render(){
        const headers = [
            {
                label:'All',
                data_sort: 'all',
                className:'sort',
                scope:'col'
            },{
                label:'Notification',
                data_sort: 'important',
                className:'sort',
                scope:'col'
            },{
                label:'Date',
                data_sort: 'name',
                className:'sort',
                scope:'col'
            },{
                label:'Status',
                data_sort: 'phone',
                className:'sort',
                scope:'col'
            },{
                scope:'col'
            }
        ];

        return(
            <div className="row">
                <div className="col-xl-12">
                    <div className="card card-fluid">
                        <div className="card-header border-0">
                            <div className="row card-fluid align-items-center">
                                <h5 className="mb-0">Notifications</h5>
                                <button type="button" className="ml-2 btn btn-sm btn-primary btn-icon rounded-pill">
                                    <span className="btn-inner--text">Read</span>
                                    <span className="btn-inner--icon"><i className="fas fa-check"></i></span>
                                </button>
                                <button type="button" className="ml-2 btn btn-sm btn-secondary btn-icon rounded-pill">
                                    <span className="btn-inner--text">Unread</span>
                                    <span className="btn-inner--icon"><i className="fas fa-check"></i></span>
                                </button>
                                <button type="button" className="ml-2 btn btn-sm btn-danger btn-icon rounded-pill">
                                    <span className="btn-inner--text">Delete</span>
                                    <span className="btn-inner--icon"><i className="fas fa-trash"></i></span>
                                </button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <Table
                                hasOptions = {false}
                                headers = {headers}
                                data= {this.state.data}
                                rowRender = {this.rowRender}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Notifications
