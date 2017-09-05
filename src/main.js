import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import { Router, Route, Link, Switch } from 'react-router-dom';
import history from './history';
import './App.scss';

import api from './api';
import App from './App.jsx';
import LoginPage from './components/LoginPage.jsx';
import SessionActions from './actions/SessionActions';
import LoggedInLayout from './components/LoggedInLayout.jsx';
import AboutPage from './components/AboutPage.jsx';

window.handleGoogleApiLoaded = () => {
	SessionActions.authorize(true, renderFunc);
};

function renderFunc() {
	render(
		<Router history={history}>
			<App>
				<Route exact path="/" render={() => <h1>Home</h1>} />
				<Route path="/login" component={LoginPage} />
				<LoggedInLayout>
					<Route path='/about' component={AboutPage} />
				</LoggedInLayout>
			</App>
		</Router>,
		document.getElementById('mount-point')
	);
}
