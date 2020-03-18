import React,{Component, Fragment} from 'react';
import Table from '../../../components/ui-components/table'

class Contacts extends Component{
    state ={
        active_filter:'all'
    }
    handleChange = (value) => {
        this.setState({active_filter: value})
    }
    rowRender = (item, i) => {
        const {name, phone, email, website, address} = item;
        return(
            <tr key={i}>
                <th scope="row"> <input type="checkbox" /></th>
                {(this.state.active_filter==='all') ? (
                    <Fragment>
                        <td className="text-right">
                            <div className="actions ml-3">
                                <a className="action-item mr-2" data-toggle="tooltip" title="Edit">
                                    <i className="fas fa-pencil-alt"></i>
                                </a>
                            </div>
                        </td>
                        <th scope="row">
                            <span className="fas fa-flag"></span>
                        </th>
                    </Fragment>
                ) : (null)}
                <th scope="row"> {name} </th>
                <th scope="row">
                    <div className="media align-items-center">
                    <span className="d-block mr-2"><i className="fas fa-phone"></i></span>
                    <a href={phone.href} className="name mb-0 h6 text-sm">{phone.number}</a>
                    </div>
                </th>
                <th scope="row">
                    <div className="media align-items-center">
                    <span className="d-block mr-2"><i className="fas fa-link"></i></span>
                    <span href="#" className="name mb-0 h6 text-sm"> {email} </span>
                    </div>
                </th>
                <td className="budget">
                    <a href={website.url} target="_blank">{website.name}</a>
                </td>
                <td className="text-right">
                    <span>{address}</span>
                </td>
            </tr>
        )
    }
    render(){
        let headers = [
            {
                scope:'col',
                className:'sort',
                dataSort:'name',
                label: 'Name'
            },{
                scope:'col',
                className:'sort',
                dataSort:'phone',
                label: 'Phone'
            },{
                scope:'col',
                className:'sort',
                dataSort:'email',
                label: 'Email'
            },{
                scope:'col',
                className:'sort',
                dataSort:'website',
                label: 'Website'
            },{
                scope:'col',
                className:'sort',
                dataSort:'address',
                label: 'Address'
            }
        ]
        if(this.state.active_filter==='all'){
            headers.unshift(
                {
                    scope:'col',
                    className:'sort',
                    dataSort:'all',
                    label: 'All'
                },{
                    scope:'col',
                    label: 'Action'
                },{
                    scope:'col',
                    className:'sort',
                    dataSort:'important',
                    label: 'Important'
                }
            );
        } else {
            headers.unshift(
                {
                    scope:'col',
                    className:'sort',
                    dataSort:'all',
                    label: 'All'
                }
            );
        }
        const data=[
            // status 0: on schedule, 1: pending, 2:delayed, 3: completed
            {
                name:"Ben McWest",
                phone: {number:'(240) 330-2007', href:''},
                email: 'ben@ink-42.com',
                website: {name:'www.htmlstream.com/natalie', url:'https://www.htmlstream.com/natalie'},
                address:'West country, sales, Ink-42'
            },{
                name:"Ben McWest",
                phone: {number:'(240) 330-2007', href:''},
                email: 'ben@ink-42.com',
                website: {name:'www.htmlstream.com/natalie', url:'https://www.htmlstream.com/natalie'},
                address:'West country, sales, Ink-42'
            },{
                name:"Ben McWest",
                phone: {number:'(240) 330-2007', href:''},
                email: 'ben@ink-42.com',
                website: {name:'www.htmlstream.com/natalie', url:'https://www.htmlstream.com/natalie'},
                address:'West country, sales, Ink-42'
            },{
                name:"Ben McWest",
                phone: {number:'(240) 330-2007', href:''},
                email: 'ben@ink-42.com',
                website: {name:'www.htmlstream.com/natalie', url:'https://www.htmlstream.com/natalie'},
                address:'West country, sales, Ink-42'
            }
        ]
        return(
            <div className="card card-fluid">
                <div className="card-header border-0">
                    <div className="row card-fluid align-items-center">
                        <h6 className="mb-0">Contacts(12)</h6>
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
                <div className="docs-example">
                    <ul className="nav nav-pills nav-example ml-2" id="tab-example" role="tablist">
                        <li className="nav-item">
                            <a className={"btn btn-xs btn-secondary" + (this.state.active_filter==='all' ? ' active' : '')} 
                                onClick={(ev)=>{this.handleChange('all')}} 
                                aria-controls="avatar-result" aria-selected="true">
                                <i className="fas fa-eye mr-2"></i>All
                            </a>
                        </li>
                        <li className="nav-item ml-2">
                            <a className={"btn btn-xs btn-secondary" + (this.state.active_filter==='important' ? ' active' : '')} 
                                onClick={(ev)=>{this.handleChange('important')}} 
                                id="avatar-html-tab" aria-controls="avatar-html" aria-selected="false">
                            <i className="fas fa-flag mr-2"></i>Important
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content mt-3">
                        <div className="table-responsive" aria-labelledby="all-table" >
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
        )
    }
}

export default Contacts;
