import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header/header.jsx';
import Sidebar from '../components/sidebar/sidebar.jsx';
import Footer from '../components/footer/footer.jsx';
import ThemeRoutes from '../routes/routing.jsx';
import Chat from './chat.jsx';
import Omni from './omni.jsx';

class Fulllayout extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			width: window.innerWidth
		};
	}
	
	
	render() {
		return (
			<React.Fragment>
				<Chat />
				<Sidebar data={this.state} {...this.props} routes={ThemeRoutes} />
				<div className="main-content position-relative">
					<Header data={this.state} />
					<Omni />
					<div className="page-content">
						<Switch>
							{ThemeRoutes.map((prop, key) => {
								if (prop.redirect) {
									return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
								}
								else {
									return (
										<Route path={prop.path} component={prop.component} key={key} />
									);
								}
							})}
						</Switch>
					</div>
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}
export default Fulllayout;
