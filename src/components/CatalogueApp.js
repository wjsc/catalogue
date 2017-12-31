import React from 'react';
import Sidebar from './Sidebar';
import TabPanel from './TabPanel';
import Player from './Player/Player';
import {playerLink} from './playerLink';

class CatalogueApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: 'stop', // play | pause | stop
			tracks: [],
			current: 0,
			progress: 0
		};
		playerLink.connect(this);
	}
	render() {
	    return (
	    	<div className="catalogue">
				<Sidebar/>
				<TabPanel/>
				{ this.state.status !=='stop' && <Player state={this.state}/>}
			</div>
		);
	}
}

export default CatalogueApp;