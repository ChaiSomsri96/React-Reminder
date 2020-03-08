import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar'
import logolighticon from '../../assets/img/brand/white.png';

class Sidebar extends React.Component {

	constructor(props) {
		super(props);
		this.expandLogo = this.expandLogo.bind(this);
		this.activeRoute.bind(this);
	}
	/*--------------------------------------------------------------------------------*/
	/*To Expand SITE_LOGO With Sidebar-Menu on Hover                                  */
	/*--------------------------------------------------------------------------------*/
	expandLogo() {
		document.getElementById("logobg").classList.toggle("expand-logo");
	}
	/*--------------------------------------------------------------------------------*/
	/*Verifies if routeName is the one active (in browser input)                      */
	/*--------------------------------------------------------------------------------*/
	activeRoute(routeName) { return this.props.location.pathname.indexOf(routeName) > -1 ? 'selected' : ''; }

	render() {
		return(
			<div className="sidenav show" id="sidenav-main">
				<div className="sidenav-header d-flex align-items-center">
					<a className="navbar-brand">
						<img
							src={logolighticon}
							alt="..."
							className="navbar-brand-img"
						/>
					</a>
					<div className="ml-auto">
						<div className="sidenav-toggler sidenav-toggler-dark d-md-none" data-action="sidenav-unpin" data-target="#sidenav-main">
							<div className="sidenav-toggler-inner">
								<i className="sidenav-toggler-line bg-white"></i>
								<i className="sidenav-toggler-line bg-white"></i>
								<i className="sidenav-toggler-line bg-white"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="nav-application clearfix">
					<NavLink to='/home' className="btn btn-square text-sm">
						<span className="btn-inner--icon d-block"><i className="fas fa-home fa-2x"></i></span>
						<span className="btn-inner--icon d-block pt-2">Home</span>
					</NavLink>
					<NavLink to='/url1' className="btn btn-square text-sm">
						<span className="btn-inner--icon d-block"><i className="fas fa-sticky-note fa-2x"></i></span>
						<span className="btn-inner--icon d-block pt-2">Notes</span>
					</NavLink>
					<a href='#' role="button" data-toggle="dropdown"  className="btn btn-square text-sm">
						<span className="btn-inner--icon d-block"><i className="fas fa-tasks fa-2x"></i></span>
						<span className="btn-inner--icon d-block pt-2">To-do tasks</span>
					</a>
					<NavLink to='/url3' className="btn btn-square text-sm">
						<span className="btn-inner--icon d-block"><i className="fas fa-bell fa-2x"></i></span>
						<span className="btn-inner--icon d-block pt-2">Notifications</span>
					</NavLink>
					<NavLink to='/url4' className="btn btn-square text-sm">
						<span className="btn-inner--icon d-block"><i className="fas fa-dollar-sign fa-2x"></i></span>
						<span className="btn-inner--icon d-block pt-2">Pay Bills</span>
					</NavLink>
					<NavLink to='/url5' className="btn btn-square text-sm">
						<span className="btn-inner--icon d-block"><i className="fas fa-link fa-2x"></i></span>
						<span className="btn-inner--icon d-block pt-2">Contacts</span>
					</NavLink>
					<NavLink to='/url6' className="btn btn-square text-sm">
						<span className="btn-inner--icon d-block"><i className="fas fa-calendar fa-2x"></i></span>
						<span className="btn-inner--icon d-block pt-2">Calendar</span>
					</NavLink>
					<NavLink to='/url7' className="btn btn-square text-sm">
						<span className="btn-inner--icon d-block"><i className="fas fa-mail-bulk fa-2x"></i></span>
						<span className="btn-inner--icon d-block pt-2">Outlook</span>
					</NavLink>
					<NavLink to='/url8' className="btn btn-square text-sm">
						<span className="btn-inner--icon d-block"><i className="fas fa-birthday-cake fa-2x"></i></span>
						<span className="btn-inner--icon d-block pt-2">Birthdays</span>
					</NavLink>
					<div className="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow p-2 m-0">
						<a href="" className="btn-sm btn-block btn btn-primary">
							<span>Add Task</span>
						</a>
						<div className="dropdown-divider m-0 my-1"></div>
						<span className="pl-2">Filters</span>
						<a href="" className="dropdown-item px-1">
							<span className="fas fa-star"></span>
							<span>All Tasks</span>
						</a>
						<a href="" className="dropdown-item px-1">
							<span className="fas fa-info-circle"></span>
							<span>Important</span>
						</a>
						<a href="" className="dropdown-item px-1">
							<span className="fas fa-check"></span>
							<span>Completed</span>
						</a>
						<a href="" className="dropdown-item px-1">
							<span className="fas fa-trash"></span>
							<span>Trashed</span>
						</a>
						<div className="dropdown-divider m-0 my-1"></div>
						<span className="pl-2">Labels</span>
						<a href="" className="dropdown-item px-1">
							<span className="text-sm text-primary">●</span>
							<span>Frontend</span>
						</a>
						<a href="" className="dropdown-item px-1">
							<span className="text-sm text-warning">●</span>
							<span>Backend</span>
						</a>
						<a href="" className="dropdown-item px-1">
							<span className="text-sm text-success">●</span>
							<span>Doc</span>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
export default Sidebar;
