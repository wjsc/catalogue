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
			signedIn: false,
			uid: false,
			status: 'stop', // play | pause | stop
			tracks: [],
			current: 0,
			progress: 0
		};
		playerLink.connect(this);
		userLink.connect(this);
		this.signInSuccessCallback = this.signInSuccessCallback.bind(this);
	}
	signInSuccessCallback(result) {
		this.setState({signedIn: true, uid: result.uid});
		return false;
	}
	render() {
	    return (
			! this.state.signedIn 
			? < SignInScreen signInSuccessCallback={this.signInSuccessCallback}/>
	    	: 	<div className="catalogue">
					<Sidebar/>
					<TabPanel/>
					{ this.state.status !=='stop' && <Player state={this.state}/>}
				</div>
		);
	}
}

export default CatalogueApp;