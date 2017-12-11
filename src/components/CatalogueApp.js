import React from 'react';
import Sidebar from './Sidebar';
import TabPanel from './TabPanel';
import Player from './Player/Player';

class CatalogueApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
	    return (
	    	<div className="catalogue">
				<Sidebar/>
				<TabPanel/>
				<Player/>
			</div>
		);
	}
}

export default CatalogueApp;