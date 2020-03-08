import React from 'react';
import {
	Nav,
	NavItem,
	Navbar,
	NavbarBrand,
	Collapse,
	DropdownItem,
	Button,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import profilephoto from '../../assets/img/theme/light/team-4-800x800.jpg';
/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logolighticon from '../../assets/img/brand/white.png';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.showMobilemenu = this.showMobilemenu.bind(this);
		this.state = {
			isOpen: false
		};
	}
	/*--------------------------------------------------------------------------------*/
	/*To open NAVBAR in MOBILE VIEW                                                   */
	/*--------------------------------------------------------------------------------*/
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	/*--------------------------------------------------------------------------------*/
	/*To open SIDEBAR-MENU in MOBILE VIEW                                             */
	/*--------------------------------------------------------------------------------*/
	showMobilemenu() {
		document.getElementById('main-wrapper').classList.toggle('show-sidebar');
	}

	render() {
		return(
			<nav className="navbar navbar-main navbar-expand-lg navbar-dark bg-primary navbar-border" id="navbar-main">
				<div className="container-fluid">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="navbar-user d-lg-none ml-auto">
					<ul className="navbar-nav flex-row align-items-center">
					<li className="nav-item">
						<a href="#" className="nav-link nav-link-icon sidenav-toggler" data-action="sidenav-pin" data-target="#sidenav-main"><i className="fas fa-bars"></i></a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link nav-link-icon" data-action="omnisearch-open" data-target="#omnisearch"><i className="fas fa-search"></i></a>
					</li>
					<li className="nav-item dropdown dropdown-animate">
						<a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-bell"></i></a>
						<div className="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-arrow p-0">
						<div className="py-3 px-3">
							<h5 className="heading h6 mb-0">Notifications</h5>
						</div>
						<div className="list-group list-group-flush">
							<a href="#" className="list-group-item list-group-item-action">
							<div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago">
								<div>
								<span className="avatar bg-primary text-white rounded-circle">AM</span>
								</div>
								<div className="flex-fill ml-3">
								<div className="h6 text-sm mb-0">Alex Michael <small className="float-right text-muted">2 hrs ago</small></div>
								<p className="text-sm lh-140 mb-0">
									Some quick example text to build on the card title.
								</p>
								</div>
							</div>
							</a>
							<a href="#" className="list-group-item list-group-item-action">
							<div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago">
								<div>
								<span className="avatar bg-warning text-white rounded-circle">SW</span>
								</div>
								<div className="flex-fill ml-3">
								<div className="h6 text-sm mb-0">Sandra Wayne <small className="float-right text-muted">3 hrs ago</small></div>
								<p className="text-sm lh-140 mb-0">
									Some quick example text to build on the card title.
								</p>
								</div>
							</div>
							</a>
							<a href="#" className="list-group-item list-group-item-action">
							<div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="5 hrs ago">
								<div>
								<span className="avatar bg-info text-white rounded-circle">JM</span>
								</div>
								<div className="flex-fill ml-3">
								<div className="h6 text-sm mb-0">Jason Miller <small className="float-right text-muted">5 hrs ago</small></div>
								<p className="text-sm lh-140 mb-0">
									Some quick example text to build on the card title.
								</p>
								</div>
							</div>
							</a>
							<a href="#" className="list-group-item list-group-item-action">
							<div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago">
								<div>
								<span className="avatar bg-dark text-white rounded-circle">MJ</span>
								</div>
								<div className="flex-fill ml-3">
								<div className="h6 text-sm mb-0">Mike Thomson <small className="float-right text-muted">2 hrs ago</small></div>
								<p className="text-sm lh-140 mb-0">
									Some quick example text to build on the card title.
								</p>
								</div>
							</div>
							</a>
							<a href="#" className="list-group-item list-group-item-action">
							<div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago">
								<div>
								<span className="avatar bg-primary text-white rounded-circle">RN</span>
								</div>
								<div className="flex-fill ml-3">
								<div className="h6 text-sm mb-0">Richard Nixon <small className="float-right text-muted">3 hrs ago</small></div>
								<p className="text-sm lh-140 mb-0">
									Some quick example text to build on the card title.
								</p>
								</div>
							</div>
							</a>
						</div>
						<div className="py-3 text-center">
							<a href="#" className="link link-sm link--style-3">View all notifications</a>
						</div>
						</div>
					</li>
					<li className="nav-item dropdown dropdown-animate">
						<a className="nav-link pr-lg-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<span className="avatar avatar-sm rounded-circle">
							<img alt="Image placeholder" src="assets/img/theme/light/team-4-800x800.jpg" />
						</span>
						</a>
						<div className="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow">
						<h6 className="dropdown-header px-0">Hi, Heather!</h6>
						<a href="../../application/user/profile.html" className="dropdown-item">
							<i className="fas fa-user"></i>
							<span>My profile</span>
						</a>
						<a href="../../application/account/settings.html" className="dropdown-item">
							<i className="fas fa-cog"></i>
							<span>Settings</span>
						</a>
						<a href="../../application/account/billing.html" className="dropdown-item">
							<i className="fas fa-credit-card"></i>
							<span>Billing</span>
						</a>
						<a href="../../application/shop/orders.html" className="dropdown-item">
							<i className="fas fa-shopping-basket"></i>
							<span>Orders</span>
						</a>
						<div className="dropdown-divider"></div>
						<a href="../../application/authentication/login.html" className="dropdown-item">
							<i className="fas fa-sign-out-alt"></i>
							<span>Logout</span>
						</a>
						</div>
					</li>
					</ul>
				</div>
				<div className="collapse navbar-collapse navbar-collapse-fade" id="navbar-main-collapse">
					<ul className="navbar-nav align-items-lg-center">
					<li className="nav-item d-lg-none ">
						<a className="nav-link" href="../../index.html">
						Overview
						</a>
					</li>
					<li className="border-top opacity-2 my-2"></li>
					<li className="nav-item">
						<a href="#" className="nav-link nav-link-icon sidenav-toggler" data-action="sidenav-pin" data-target="#sidenav-main"><i className="fas fa-bars"></i></a>
					</li>
					<li className="nav-item ">
						<NavLink className="nav-link pl-lg-0" to="home">
							Home
						</NavLink>
					</li>
					<li className="nav-item dropdown dropdown-animate" data-toggle="hover">
						<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Application
						</a>
						<div className="dropdown-menu dropdown-menu-arrow p-lg-0">
						<div className="p-lg-4">
							<div className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
							<a href="#" className="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Project
							</a>
							<div className="dropdown-menu"><a className="dropdown-item" href="../../application/project/card-listing.html">
								Card listing
								</a>
								<a className="dropdown-item" href="../../application/project/table-listing.html">
								Table listing
								</a>
								<a className="dropdown-item" href="../../application/project/overview.html">
								Overview
								</a>
								<a className="dropdown-item" href="../../application/project/create-new.html">
								Create new
								</a>
							</div>
							</div>
							<div className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
							<a href="#" className="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Task
							</a>
							<div className="dropdown-menu"><a className="dropdown-item" href="../../application/task/table-listing.html">
								Table listing
								</a>
								<a className="dropdown-item" href="../../application/task/kanban-board.html">
								Kanban board
								</a>
								<a className="dropdown-item" href="../../application/task/create-new.html">
								Create new
								</a>
							</div>
							</div>
							<div className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
							<a href="#" className="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								User
							</a>
							<div className="dropdown-menu"><a className="dropdown-item" href="../../application/user/card-listing.html">
								Card listing
								</a>
								<a className="dropdown-item" href="../../application/user/table-listing.html">
								Table listing
								</a>
								<a className="dropdown-item" href="../../application/user/profile.html">
								Profile
								</a>
							</div>
							</div>
							<div className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
							<a href="#" className="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Authentication
							</a>
							<div className="dropdown-menu"><a className="dropdown-item" href="../../application/authentication/login.html">
								Login
								</a>
								<a className="dropdown-item" href="../../application/authentication/register.html">
								Register
								</a>
								<a className="dropdown-item" href="../../application/authentication/recover.html">
								Recover
								</a>
							</div>
							</div>
							<div className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
							<a href="#" className="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Account
							</a>
							<div className="dropdown-menu"><a className="dropdown-item" href="../../application/account/profile.html">
								Profile
								</a>
								<a className="dropdown-item" href="../../application/account/settings.html">
								Settings
								</a>
								<a className="dropdown-item" href="../../application/account/billing.html">
								Billing
								</a>
								<a className="dropdown-item" href="../../application/account/notifications.html">
								Notifications
								</a>
								<a className="dropdown-item" href="../../application/account/addresses.html">
								Addresses
								</a>
							</div>
							</div>
							<div className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
							<a href="#" className="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Shop
							</a>
							<div className="dropdown-menu"><a className="dropdown-item" href="../../application/shop/card-listing.html">
								Card listing
								</a>
								<a className="dropdown-item" href="../../application/shop/table-listing.html">
								Table listing
								</a>
								<a className="dropdown-item" href="../../application/shop/product.html">
								Product
								</a>
								<a className="dropdown-item" href="../../application/shop/orders.html">
								Orders
								</a>
								<a className="dropdown-item" href="../../application/shop/order-description.html">
								Order description
								</a>
								<a className="dropdown-item" href="../../application/shop/cart.html">
								Cart
								</a>
								<a className="dropdown-item" href="../../application/shop/sellers.html">
								Sellers
								</a>
								<a className="dropdown-item" href="../../application/shop/invoices.html">
								Invoices
								</a>
								<a className="dropdown-item" href="../../application/shop/invoice-description.html">
								Invoice description
								</a>
							</div>
							</div>
							<div className="dropdown dropdown-animate dropdown-submenu" data-toggle="hover">
							<a href="#" className="dropdown-item dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Utility
							</a>
							<div className="dropdown-menu"><a className="dropdown-item" href="../../application/utility/error-404.html">
								Error 404
								</a>
								<a className="dropdown-item" href="../../application/utility/error-500.html">
								Error 500
								</a>
								<a className="dropdown-item" href="../../application/utility/maintenance-mode.html">
								Maintenance mode
								</a>
								<a className="dropdown-item" href="../../application/utility/faq.html">
								Faq
								</a>
								<a className="dropdown-item" href="../../application/utility/topic.html">
								Topic
								</a>
							</div>
							</div>
						</div>
						<div className="dropdown-menu-links rounded-bottom delimiter-top p-lg-4">
							<div className="row">
							<div className="col-sm-6">
								<a href="../../application/calendar.html" className="dropdown-item">Calendar</a>
								<a href="../../application/timeline.html" className="dropdown-item">Timeline</a>
							</div>
							<div className="col-sm-6">
								<a href="../../application/task/kanban-board.html" className="dropdown-item">Kanban board</a>
								<a href="../../application/google-map.html" className="dropdown-item">Google map</a>
							</div>
							</div>
						</div>
						</div>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="../../application/widgets.html">
						Widgets
						</a>
					</li>
					<li className="nav-item dropdown dropdown-animate" data-toggle="hover">
						<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Docs</a>
						<div className="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-arrow p-0">
						<ul className="list-group list-group-flush">
							<li>
							<a href="../../docs/index.html" className="list-group-item list-group-item-action" role="button">
								<div className="media d-flex align-items-center">
								<figure style={{width: 50}}>
									<img alt="Image placeholder" src="assets/img/icons/essential/detailed/DOC_File.svg" className="svg-inject img-fluid" style={{height: 50}} />
								</figure>
								<div className="media-body ml-3">
									<h6 className="mb-1">Documentation</h6>
									<p className="mb-0">Awesome section examples for any scenario.</p>
								</div>
								</div>
							</a>
							</li>
							<li>
							<a href="../../docs/components/index.html" className="list-group-item list-group-item-action" role="button">
								<div className="media d-flex align-items-center">
								<figure style={{width: 50}}>
									<img alt="Image placeholder" src="assets/img/icons/essential/detailed/Mobile_UI.svg" className="svg-inject img-fluid" style={{height: 50}} />
								</figure>
								<div className="media-body ml-3">
									<h6 className="mb-1">Components</h6>
									<p className="mb-0">Awesome section examples for any scenario.</p>
								</div>
								</div>
							</a>
							</li>
						</ul>
						<div className="dropdown-menu-links rounded-bottom delimiter-top p-4">
							<div className="row">
							<div className="col-sm-6">
								<a href="../../docs/getting-started/installation.html" className="dropdown-item">Installation</a>
								<a href="../../docs/getting-started/file-structure.html" className="dropdown-item">File structure</a>
								<a href="../../docs/getting-started/build-tools.html" className="dropdown-item">Build tools</a>
								<a href="../../docs/getting-started/customization.html" className="dropdown-item">Customization</a>
							</div>
							<div className="col-sm-6">
								<a href="../../docs/getting-started/plugins.html" className="dropdown-item">Using plugins</a>
								<a href="../../docs/components/index.html" className="dropdown-item">Components</a>
								<a href="../../docs/plugins/animate.html" className="dropdown-item">Plugins</a>
								<a href="../../docs/support.html" className="dropdown-item">Support</a>
							</div>
							</div>
						</div>
						</div>
					</li>
					<li className="border-top opacity-2 my-2"></li>
					<li className="nav-item d-lg-none">
						<a className="nav-link" href="../../docs/index.html">
						Docs
						</a>
					</li>
					<li className="nav-item d-lg-none">
						<a className="nav-link" href="../../application/authentication/register.html">
						Register
						</a>
					</li>
					<li className="nav-item d-lg-none">
						<a className="nav-link" href="../../application/authentication/login.html">
						Sign in
						</a>
					</li>
					</ul>
					<ul className="navbar-nav ml-lg-auto align-items-center d-none d-lg-flex">
					<li className="nav-item">
						<a href="#" className="nav-link nav-link-icon" data-action="omnisearch-open" data-target="#omnisearch"><i className="fas fa-search"></i></a>
					</li>
					<li className="nav-item">
						<a href="#modal-chat" className="nav-link nav-link-icon" data-toggle="modal"><i className="fas fa-comment-alt"></i></a>
					</li>
					<li className="nav-item dropdown dropdown-animate">
						<a className="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-bell"></i></a>
						<div className="dropdown-menu dropdown-menu-right dropdown-menu-lg dropdown-menu-arrow p-0">
						<div className="py-3 px-3">
							<h5 className="heading h6 mb-0">Notifications</h5>
						</div>
						<div className="list-group list-group-flush">
							<a href="#" className="list-group-item list-group-item-action">
							<div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago">
								<div>
								<span className="avatar bg-primary text-white rounded-circle">AM</span>
								</div>
								<div className="flex-fill ml-3">
								<div className="h6 text-sm mb-0">Alex Michael <small className="float-right text-muted">2 hrs ago</small></div>
								<p className="text-sm lh-140 mb-0">
									Some quick example text to build on the card title.
								</p>
								</div>
							</div>
							</a>
							<a href="#" className="list-group-item list-group-item-action">
							<div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago">
								<div>
								<span className="avatar bg-warning text-white rounded-circle">SW</span>
								</div>
								<div className="flex-fill ml-3">
								<div className="h6 text-sm mb-0">Sandra Wayne <small className="float-right text-muted">3 hrs ago</small></div>
								<p className="text-sm lh-140 mb-0">
									Some quick example text to build on the card title.
								</p>
								</div>
							</div>
							</a>
							<a href="#" className="list-group-item list-group-item-action">
							<div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="5 hrs ago">
								<div>
								<span className="avatar bg-info text-white rounded-circle">JM</span>
								</div>
								<div className="flex-fill ml-3">
								<div className="h6 text-sm mb-0">Jason Miller <small className="float-right text-muted">5 hrs ago</small></div>
								<p className="text-sm lh-140 mb-0">
									Some quick example text to build on the card title.
								</p>
								</div>
							</div>
							</a>
							<a href="#" className="list-group-item list-group-item-action">
							<div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="2 hrs ago">
								<div>
								<span className="avatar bg-dark text-white rounded-circle">MJ</span>
								</div>
								<div className="flex-fill ml-3">
								<div className="h6 text-sm mb-0">Mike Thomson <small className="float-right text-muted">2 hrs ago</small></div>
								<p className="text-sm lh-140 mb-0">
									Some quick example text to build on the card title.
								</p>
								</div>
							</div>
							</a>
							<a href="#" className="list-group-item list-group-item-action">
							<div className="d-flex align-items-center" data-toggle="tooltip" data-placement="right" data-title="3 hrs ago">
								<div>
								<span className="avatar bg-primary text-white rounded-circle">RN</span>
								</div>
								<div className="flex-fill ml-3">
								<div className="h6 text-sm mb-0">Richard Nixon <small className="float-right text-muted">3 hrs ago</small></div>
								<p className="text-sm lh-140 mb-0">
									Some quick example text to build on the card title.
								</p>
								</div>
							</div>
							</a>
						</div>
						<div className="py-3 text-center">
							<a href="#" className="link link-sm link--style-3">View all notifications</a>
						</div>
						</div>
					</li>
					<li className="nav-item dropdown dropdown-animate">
						<a className="nav-link pr-lg-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<div className="media media-pill align-items-center">
							<span className="avatar rounded-circle">
							<img alt="Image placeholder" src="assets/img/theme/light/team-4-800x800.jpg" />
							</span>
							<div className="ml-2 d-none d-lg-block">
							<span className="mb-0 text-sm  font-weight-bold">John Snow</span>
							</div>
						</div>
						</a>
						<div className="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow">
						<h6 className="dropdown-header px-0">Hi, John!</h6>
						<a href="../../application/profile.html" className="dropdown-item">
							<i className="fas fa-user"></i>
							<span>My profile</span>
						</a>
						<a href="#!" className="dropdown-item">
							<i className="fas fa-cog"></i>
							<span>Settings</span>
						</a>
						<div className="dropdown-divider"></div>
						<a href="#!" className="dropdown-item">
							<i className="fas fa-sign-out-alt"></i>
							<span>Logout</span>
						</a>
						</div>
					</li>
					</ul>
				</div>
				</div>
			</nav>
		);
	}
}
export default Header;
