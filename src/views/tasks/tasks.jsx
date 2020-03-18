import React, {Component, Fragment} from 'react';
import Table from '../../components/ui-components/table'
import EditModal from './edit.jsx'

class Tasks extends Component {
    rowRender = (item, i) => {
        const {content, reminder,status,progress} = item;
        return(
            <tr key={i}>
                <td>
                    <input type="checkbox" />
                </td>
                <td>{content}</td>
                <td>
                    <button type="button" className="btn btn-secondary rounded-circle btn-icon-only btn-sm" data-toggle="modal" data-target="#exampleModal">
                        <span className="fas fa-eye"></span>
                    </button>
                </td>
                <td>
                    {
                        reminder && reminder.length && reminder.map((sub_reminder, index)=>(
                            <span className={sub_reminder} key={index}></span>
                        )) 
                    }
                </td>
                <td>
                    {
                        !status ? (
                            <Fragment>
                                <span className="text-sm text-warning">●</span>
                                <small>Pending</small>
                            </Fragment>
                        ): (
                            !(status-1) ? (
                                <Fragment>
                                    <span className="text-sm text-danger">●</span>
                                    <small>delayed</small>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <span className="text-sm text-success">●</span>
                                    <small>Completed</small>
                                </Fragment>
                            )
                        )
                        
                    }
                </td>
                <td>
                    <span className="fas fa-check-circle"></span>&nbsp;{progress+'%'}
                </td>
            </tr>
        )
    }
    render() {
        const data=[
            // status 0: pending, 1: delayed, 2:completed
            {
                content:"Create the app's wireframe",
                progress:50,
                status : 0,
                reminder: ["fas fa-envelope","fas fa-phone"]  
            },{
                content:"Create the login and register with Laravel",
                progress:50,
                status : 2,
                reminder: ["fas fa-envelope","fab fa-amazon"]  
            },{
                content:"Finish the login design",
                progress:50,
                status : 1 ,
                reminder: ["fas fa-envelope","fas fa-phone","fab fa-whatsapp-square"]  
            }
        ]
        const headers = [
            {
                scope:'col'
            },{
                label:'View',
                scope:'col'
            },{
                label:'Task title',
                scope:'col'
            },{
                label:'Reminder type',
                scope:'col'
            },{
                label:'Status',
                scope:'col'
            },{
                label:'Percentage',
                scope:'col'
            }
        ]
        return (
            <Fragment>
                <EditModal />
                <div className="page-title">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-6 d-flex align-items-center justify-content-between justify-content-md-start mb-3 mb-md-0">
                            <div className="d-inline-block">
                                <h5 className="h4 d-inline-block font-weight-400 mb-0 text-white">Tasks</h5>
                                <h5 className="h4 d-inline-block font-weight-300 mb-0 ml-3 text-success">9</h5>
                                <h5 className="h6 d-inline-block font-weight-300 mb-0 ml-3 text-white">New tasks</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header actions-toolbar border-0">
                        <div className="actions-search" id="actions-search">
                            <div className="input-group input-group-merge input-group-flush">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-transparent"><i className="fas fa-search"></i></span>
                                </div>
                                <input type="text" className="form-control form-control-flush" placeholder="Type and hit enter ..." />
                                <div className="input-group-append">
                                    <a  className="input-group-text bg-transparent" data-action="search-close" data-target="#actions-search"><i className="fas fa-times"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between align-items-center">
                            <div className="col">
                                <h6 className="d-inline-block mb-0">All tasks</h6>
                                <a role="button" className="ml-2 btn btn-sm btn-primary btn-icon rounded-pill">
                                <span className="btn-inner--text">Create</span>
                                <span className="btn-inner--icon"><i className="fas fa-plus-circle"></i></span>
                                </a>
                                <button type="button" className="ml-2 btn btn-sm btn-danger btn-icon rounded-pill">
                                <span className="btn-inner--text">Delete</span>
                                <span className="btn-inner--icon"><i className="fas fa-trash"></i></span>
                                </button>
                            </div>
                            <div className="col text-right">
                                <div className="actions"><a  className="action-item mr-3" data-action="search-open" data-target="#actions-search"><i className="fas fa-search"></i></a>
                                    <div className="dropdown mr-3">
                                        <a  className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-filter"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" >
                                                <i className="fas fa-sort-amount-down"></i>Newest
                                            </a>
                                            <a className="dropdown-item" >
                                                <i className="fas fa-sort-alpha-down"></i>From A-Z
                                            </a>
                                            <a className="dropdown-item" >
                                                <i className="fas fa-sort-alpha-up"></i>From Z-A
                                            </a>
                                        </div>
                                    </div>
                                    <div className="dropdown" data-toggle="dropdown">
                                        <a  className="action-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-h"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                        <a  className="dropdown-item">Refresh</a>
                                        <a  className="dropdown-item">Manage Widgets</a>
                                        <a  className="dropdown-item">Settings</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="docs-example">
                        <ul className="nav nav-pills nav-example ml-2" id="tab-example" role="tablist">
                        <li className="nav-item">
                            <a className="btn btn-xs btn-secondary active" id="avatar-result-tab" data-toggle="tab" href="#today-table" role="tab" aria-controls="avatar-result" aria-selected="true">
                            <i className="fas fa-eye mr-2"></i>Today
                            </a>
                        </li>
                        <li className="nav-item ml-2">
                            <a className="btn btn-xs btn-secondary" id="avatar-html-tab" data-toggle="tab" href="#tomorrow-table" role="tab" aria-controls="avatar-html" aria-selected="false">
                            <i className="fas fa-flag mr-2"></i>Tomorrow
                            </a>
                        </li>
                        </ul>
                        <ul className="nav nav-pills nav-example ml-2 mt-2" id="tab-example1" role="tablist">
                            <li className="nav-item">
                                <a className="btn btn-xs btn-secondary active" id="all-tab" data-toggle="tab" href="#all-table" role="tab" aria-controls="avatar-result" aria-selected="true">
                                All
                                </a>
                            </li>
                            <li className="nav-item ml-2">
                                <a className="btn btn-xs btn-secondary" id="personal-tab" data-toggle="tab" href="#personal-table" role="tab" aria-controls="avatar-result" aria-selected="false">
                                Personal
                                </a>
                            </li>
                            <li className="nav-item ml-2">
                                <a className="btn btn-xs btn-secondary" id="work-tab" data-toggle="tab" href="#work-table" role="tab" aria-controls="avatar-html" aria-selected="false">
                                Work
                                </a>
                            </li>
                            <li className="nav-item ml-2">
                                <a className="btn btn-xs btn-secondary" id="groceries-tab" data-toggle="tab" href="#groceries-table" role="tab" aria-controls="avatar-html" aria-selected="false">
                                Groceries list
                                </a>
                            </li>
                            <li className="nav-item ml-2">
                                <a className="btn btn-xs btn-secondary" id="other-tab" data-toggle="tab" href="#other-table" role="tab" aria-controls="avatar-html" aria-selected="false">
                                Other
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content mt-3">
                            <div id="today-table" className="tab-pane tab-example-result fade show active table-responsive" role="tabpanel" aria-labelledby="all-table" >
                                <div className="table-responsive">
                                    <Table 
                                        hasOptions = {false}
                                        headers = {headers}
                                        data= {data}
                                        rowRender = {this.rowRender}
                                    />
                                </div>
                            </div>
                            <div id="tomorrow-table" className="tab-pane tab-example-html fade table-responsive" role="tabpanel" aria-labelledby="complete-table">
                                <div className="table-responsive">
                                    <Table 
                                        hasOptions = {false}
                                        headers = {headers}
                                        data= {data}
                                        rowRender = {this.rowRender}
                                    />
                                </div>
                            </div>
                            <div id="personal-table" className="tab-pane tab-example-html fade table-responsive" role="tabpanel" aria-labelledby="complete-table">
                                <div className="table-responsive">
                                    <Table 
                                        hasOptions = {false}
                                        headers = {headers}
                                        data= {data}
                                        rowRender = {this.rowRender}
                                    />
                                </div>
                            </div>
                            <div id="all-table" className="tab-pane tab-example-html fade table-responsive" role="tabpanel" aria-labelledby="complete-table">
                                <div className="table-responsive">
                                    <Table 
                                        hasOptions = {false}
                                        headers = {headers}
                                        data= {data}
                                        rowRender = {this.rowRender}
                                    />
                                </div>
                            </div>
                            <div id="work-table" className="tab-pane tab-example-html fade table-responsive" role="tabpanel" aria-labelledby="complete-table">
                                <div className="table-responsive">
                                    <Table 
                                        hasOptions = {false}
                                        headers = {headers}
                                        data= {data}
                                        rowRender = {this.rowRender}
                                    />
                                </div>
                            </div>
                            <div id="groceries-table" className="tab-pane tab-example-html fade table-responsive" role="tabpanel" aria-labelledby="complete-table">
                                <div className="table-responsive">
                                    <Table 
                                        hasOptions = {false}
                                        headers = {headers}
                                        data= {data}
                                        rowRender = {this.rowRender}
                                    />
                                </div>
                            </div>
                            <div id="other-table" className="tab-pane tab-example-html fade table-responsive" role="tabpanel" aria-labelledby="complete-table">
                                <div className="table-responsive">
                                    <Table 
                                        hasOptions = {false}
                                        headers = {headers}
                                        data= {data}
                                        rowRender = {this.rowRender}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>        
        );

    }
}

export default Tasks;
