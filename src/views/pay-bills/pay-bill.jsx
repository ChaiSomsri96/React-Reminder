import React,{Component, Fragment} from 'react';
import Table from '../../components/ui-components/table'

class PayBill extends Component{
    rowRender = (item, i) => {
        const {content, image_url, task_id, status, price, deadline, link} = item;
        if(item.component){
            return item.component
        }
        return(
            <tr key={i}>
                <td> <input type="checkbox" /></td>
                <th scope="row">
                    <div className="media align-items-center">
                    <div><img alt="placeholder" src={image_url} className="avatar  rounded-circle avatar-sm" /></div>
                    <div className="media-body ml-4">
                        <a href={link} className="name mb-0 h6 text-sm">{content}</a>
                    </div>
                    </div>
                </th>
                <td className="budget">{task_id}</td>
                <td>
                    <span className="badge badge-dot mr-4">
                        {
                            !status ? (
                                <Fragment>
                                    <i className="bg-info"></i>
                                    <span className="status">on schedule</span>
                                </Fragment>
                            ) : (
                                !(status-1) ? (
                                    <Fragment>
                                        <i className="bg-warning"></i>
                                        <span className="status">pending</span>
                                    </Fragment>          
                                ): (
                                    !(status-2) ? (
                                        <Fragment>
                                            <i className="bg-danger"></i>
                                            <span className="status">delayed</span>
                                        </Fragment>          
                                    ):(
                                        !(status-3)? (
                                            <Fragment>
                                                <i className="bg-success"></i>
                                                <span className="status">completed</span>
                                            </Fragment>          
                                        ): (null) 
                                    )
                                )
                            )
                        }
                    </span>
                </td>
                <td>{price}</td>
                <td>{deadline}</td>
                <td className="text-right">
                    <div className="actions ml-3">
                    <a className="action-item mr-2" data-toggle="tooltip" title="Quick view">
                        <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a className="action-item mr-2" data-toggle="tooltip" title="Edit">
                        <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a className="action-item text-danger mr-2" data-toggle="tooltip" title="Move to trash">
                        <i className="fas fa-trash"></i>
                    </a>
                    </div>
                </td>
            </tr>
        )
    }
    render(){
        const headers = [
            {
                scope:'col'
            },{
                className:'sort',
                dataSort:'name',
                scope:'col',
                label: 'Project'
            },{
                className:'sort',
                dataSort:'budget',
                scope:'col',
                label: 'Tasks'
            },{
                className:'sort',
                dataSort:'status',
                scope:'col',
                label: 'Status'
            },{
                className:'sort',
                dataSort:'price',
                scope:'col',
                label: 'Price'
            },{
                className:'sort',
                dataSort:'toBePaidOn',
                scope:'col',
                label: 'To be paid on'
            },{
                scope:'col'
            }
        ]
        const data=[
            // status 0: on schedule, 1: pending, 2:delayed, 3: completed
            {
                content:"Purpose Website UI",
                image_url: '../../assets/img/theme/light/brand-avatar-1.png',
                task_id: 1,
                status : 1,
                price: '$129 USD',
                deadline:'20 Sep, 19',
                link:''
            },{
                content:"Website Redesign",
                image_url: '../../assets/img/theme/light/brand-avatar-2.png',
                task_id: 2,
                status : 3,
                price: '$49 USD',
                deadline:'20 Sep, 19',
                link:''
            },{
                content:"Webpixels Website",
                image_url: '../../assets/img/theme/light/brand-avatar-3.png',
                task_id: 1,
                status : 2,
                price: '165 USD',
                deadline:'20 Sep, 19',
                link:''
            },{
                content:"Purpose Application UI",
                image_url: '../../assets/img/theme/light/brand-avatar-4.png',
                task_id: 1,
                status : 0,
                price: '$288 USD',
                deadline:'20 Sep, 19',
                link:''
            },{
                component: (<tr><td colspan="3"></td><td>Total = $1290</td><td colspan="3"></td></tr>)
            }
        ]
        return(
            <div className="card">
                <div className="card-header actions-toolbar border-0">
                    <div className="row justify-content-between align-items-center">
                        <div className="col">
                            <h6 className="d-inline-block mb-0">Pay Bills</h6>
                            <a role="button" className="ml-2 btn btn-sm btn-primary btn-icon rounded-pill">
                                <span className="btn-inner--text">Create</span>
                                <span className="btn-inner--icon"><i className="fas fa-plus-circle"></i></span>
                            </a>
                            <button type="button" className="ml-2 btn btn-sm btn-danger btn-icon rounded-pill">
                                <span className="btn-inner--text">Delete</span>
                                <span className="btn-inner--icon"><i className="fas fa-trash"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <Table 
                        hasOptions = {false}
                        headers = {headers}
                        data= {data}
                        rowRender = {this.rowRender}
                    />
                </div>
            </div>
        )
    }
}

export default PayBill;
