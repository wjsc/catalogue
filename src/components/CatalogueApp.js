import React from 'react';
import Sidebar from './Sidebar';
import TabPanel from './TabPanel';
import Player from './Player/Player';
import SignInScreen from './UserAccess/SignInScreen';
import {userLink} from './userLink';
import {playerLink} from './playerLink';

class CatalogueApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signedIn: process.env.NODE_ENV === 'development' ? true : false,
			uid: process.env.NODE_ENV === 'development' ? ''.padStart(28, 'x') : false,
			status: 'stop', // play | pause | stop
			tracks: [],
			current: 0,
			progress: 0
		};
		playerLink.connect(this);
		userLink.connect(this);
	}
	signInSuccessCallback(result) {
		this.setState({signedIn: true, uid: result.uid});
		return false;
	}
	signOut(){
		this.setState({signedIn: false, uid: false});
	}
	render() {
	    return (
			! this.state.signedIn 
			? < SignInScreen />
	    	: 	<div className="catalogue">
					<Sidebar/>
					<TabPanel/>
					{ this.state.status !=='stop' && <Player state={this.state}/>}
				</div>
		);
	}
}

export default CatalogueApp;