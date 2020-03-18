import React,{Component, Fragment} from 'react';
import Table from '../../../components/ui-components/table'
import DataTable from 'react-data-table-component';
import { NavLink } from 'react-router-dom';

const customStyles = {
    headCells: {
        style: {
            padding:'0.75rem 1.5rem',
            fontSize: '0.75rem',
            fontWeight:600,
            color:'#8492a6',
            flexGrow:1,
            flexShrink:0,
            flexBasis:0
        },
    },
    cells: {
        style: {
            color:'#8492a6',
            padding:'1rem 1.5rem',
            flexGrow:1,
            flexShrink:0,
            flexBasis:0
        },
    },
};
    
class PayBill extends Component{
   
    render(){
        const data=[
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
            }
            // ,{
            //     component: (<tr><td colspan="3"></td><td>Total = $1290</td><td colspan="3"></td></tr>)
            // }
        ]
        const columns = [
            {
                name: 'Project',
                width:'230px',
                cell: row =>(
                <div style={{width:'300px'}}>
                    <div className="media align-items-center">
                    <div><img alt="placeholder" src={row.image_url} className="avatar  rounded-circle avatar-sm" /></div>
                    <div className="media-body ml-4">
                        <a href={row.link} className="name mb-0 h6 text-sm">{row.content}</a>
                    </div>
                    </div>
                </div>
                ),
                selector:'task_id'

            },{
                name: 'Tasks',
                selector:'task_id',
                cell: row =>(<div style={{width:'70px'}}>{row.task_id}</div>),
                width:'10px'
            },{
                name: 'Status',
                cell: row =>(
                    <span className="badge badge-dot mr-4">
                        {
                            !row.status ? (
                                <Fragment>
                                    <i className="bg-info"></i>
                                    <span className="status">on schedule</span>
                                </Fragment>
                            ) : (
                                !(row.status-1) ? (
                                    <Fragment>
                                        <i className="bg-warning"></i>
                                        <span className="status">pending</span>
                                    </Fragment>          
                                ): (
                                    !(row.status-2) ? (
                                        <Fragment>
                                            <i className="bg-danger"></i>
                                            <span className="status">delayed</span>
                                        </Fragment>          
                                    ):(
                                        !(row.status-3)? (
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
                ),
                selector:'status'
            },{
                name: 'Price',
                selector: 'price',
            },{
                name: 'To be paid on',
                selector: 'deadline',
            },{
                name:'',
                cell: row=>(
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
                )
            }
        ];
        
        return(
            <div class="row">
                <div class="col-xl-12">
                    <div class="card card-fluid">
                        <div class="card-header border-0">
                            <div class="row card-fluid align-items-center">
                            <h6 class="mb-0">Pay Bills</h6>
                            <NavLink to="/admin/pay-bill/add" class="ml-2 btn btn-sm btn-primary btn-icon rounded-pill">
                                <span class="btn-inner--text">Create</span>
                                <span class="btn-inner--icon"><i class="fas fa-plus-circle"></i></span>
                            </NavLink>
                            <button type="button" class="ml-2 btn btn-sm btn-danger btn-icon rounded-pill">
                                <span class="btn-inner--text">Delete</span>
                                <span class="btn-inner--icon"><i class="fas fa-trash"></i></span>
                            </button>
                            </div>
                        </div>
                        
                        <DataTable
                            columns={columns}
                            data={data}
                            noHeader={true}
                            // selectableRows
                            // selectableRowsComponentProps={{ inkDisabled: true }}
                            customStyles={customStyles}
                        />

                    </div>
                </div>
            </div>
        );
    }
}

export default PayBill;
