import React from 'react';
import { Link } from 'react-router-dom'
import SidebarElement from './SidebarElement';
import SignOut from './UserAccess/SignOut';

class Sidebar extends React.Component {
	render() {
		return (
			<div className="sidebar">
				<Link to="/"><SidebarElement id="sidebar-home" icon="fa fa-home" text="Home"/></Link>
				<Link to="/search"><SidebarElement id="sidebar-search" icon="fa fa-search" text="Search"/></Link>
				<Link to="/favorites"><SidebarElement id="sidebar-favorites" icon="fa fa-heart" text="Favs"/></Link>
				<Link to="/player"><SidebarElement id="sidebar-player" icon="fa fa-suitcase" text="Player"/></Link>
				<SignOut></SignOut>
			</div>
		);
	}
}

export default Sidebar;
