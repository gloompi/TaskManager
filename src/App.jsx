import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 
injectTapEventPlugin();

class App extends Component {
	render(){
		return (
			<MuiThemeProvider>
				<div className="app">
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
};

export default App;