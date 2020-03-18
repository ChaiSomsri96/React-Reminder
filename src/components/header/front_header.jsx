import React from 'react';
import { NavLink } from 'react-router-dom';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}
	componentDidMount(){
		var $svg = document.querySelectorAll('img.svg-inject');
		window.SVGInjector($svg);
	}

	render() {
		return(
			<nav className="navbar navbar-main navbar-expand-lg text-white navbar-border" id="navbar-main" style={{backgroundColor: '#02b8d9'}}>
				<div className="container-fluid">
					<div className="sidenav-header d-flex align-items-center mb-0 py-2">
					<NavLink to="/home"className="small font-weight-bold">
						<img alt="placeholder" src="../../assets/img/brand/front.svg" className="svg-inject img-fluid" />
						<span className="h4 font-weight-bold text-white">Frontend</span>
					</NavLink>
					</div>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse"
							aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse navbar-collapse-fade" id="navbar-main-collapse">
					<ul className="navbar-nav ml-lg-auto align-items-center d-none d-lg-flex">
						<li className="nav-item">
							<NavLink to="/login"className="btn btn-sm btn-block text-white btn-outline-white" style={{backgroundColor:'transparent'}}>
								Log in
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/register"className="btn btn-sm btn-block text-white btn-outline-white" style={{backgroundColor:'transparent'}}>
								Sign up
							</NavLink>
						</li>
					</ul>
					</div>
				</div>
    		</nav>
		);
	}
}
export default Header;
