import React from 'react';

class SidebarElement extends React.Component {
	render() {
		return (
			<div onClick={this.props.onclick} className="sidebar-element" id={this.props.id}>
				<i className={this.props.icon}></i>
				<span>{this.props.children}</span>
			</div>
		);
	}
}

export default SidebarElement;