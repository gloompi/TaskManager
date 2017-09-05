import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

import SessionActions from '../actions/SessionActions';
import SessionStore from '../stores/SessionStore';

import './LoginPage.scss';

function getStateFromFlux() {
  return {
    isLoggedIn: SessionStore.isLoggedIn()
  };
}

class LoginPage extends Component{
	static contextTypes = {
    router: PropTypes.object.isRequired
  }

	state = {
		getStateFromFlux: getStateFromFlux()
	}

	componentDidMount() {
		SessionStore.addChangeListener(this._onChange);
	}

	componentWillUpdate(nextProps, nextState) {
		if (nextState.isLoggedIn) {
			this.context.router.history.replace('/about');
		}
	}

	componentWillUnmount() {
		SessionStore.removeChangeListener(this._onChange);
	}

	handleLogin() {
		SessionActions.authorize();
	}

	render() {
		return (
			<div className="login__page">
				<div className="login__page-banner">
					<div className="login__page-text">
						<h1>GlooMpiQue Google tasks</h1>
						<p>Organise your life!</p>
						<RaisedButton 
							className="login__btn" 
							label="Log in with google" 
							onClick={this.handleLogin}
						/>
					</div>
					<img 
						src='/img/desk.png' 
						className="login__page-img" 
					/>
				</div>
			</div>
		);
	}

	_onChange = () => {
		this.setState(getStateFromFlux());
	}
}

export default LoginPage;