import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header/header.jsx';
import Sidebar from '../components/sidebar/sidebar.jsx';
import Footer from '../components/footer/footer.jsx';
import ThemeRoutes from '../routes/routing.jsx';
import Chat from './chat.jsx';
import Omni from './omni.jsx';
import DashStat from './dash-stat.jsx';

class Fulllayout extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			width: window.innerWidth
		};
	}
	
	
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
			<React.Fragment>
			    <link rel="stylesheet" href="./assets/css/purpose.css" id="stylesheet" />
                <link rel="stylesheet" href="./assets/css/custom_admin.css" id="stylesheet" />

				<div className="container-fluid container-application">
				<Chat />
				<Sidebar data={this.state} {...this.props} routes={ThemeRoutes} />
				<div className="main-content position-relative">
					<Header data={this.state} />
					<Omni />
					<div className="page-content">
						<div className="row">
							{stat.map((data, key)=>(
								<DashStat data = {data} key={key}/>
							))}
						</div>

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
				</div>
			</React.Fragment>
		);
	}
}
export default Fulllayout;
