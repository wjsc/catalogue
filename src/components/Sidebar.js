import React from 'react';
import { Link } from 'react-router-dom'
import {Translate} from './lang/Translate';
import SidebarElement from './SidebarElement';
import {userLink} from './userLink';

class Sidebar extends React.Component {
	render() {
		return (
			<div className="sidebar">
				<Link to="/">
				<SidebarElement id="sidebar-home" icon="fa fa-home" >
					<Translate word='HOME'/>
				</SidebarElement>
				</Link>
				<Link to="/search">
					<SidebarElement id="sidebar-search" icon="fa fa-search">
						<Translate word='SEARCH'/>
					</SidebarElement>
				</Link>
				<Link to="/favorites">
					<SidebarElement id="sidebar-favorites" icon="fa fa-heart">
						<Translate word='FAVORITES_SHORT'/>
					</SidebarElement>
				</Link>
				<Link to="/player">
					<SidebarElement id="sidebar-player" icon="fa fa-suitcase">
						<Translate word='PLAYER'/>
					</SidebarElement>
				</Link>
				<Link to="/">
					<SidebarElement onclick={userLink.signOut} id="sidebar-logout" icon="fa fa-sign-out">
						<Translate word='EXIT'/>
					</SidebarElement>
				</Link>
			</div>
		);
	}
}

export default Sidebar;
