import React from 'react';

class SidebarElement extends React.Component {
	render() {
		return (
			<div className="sidebar-element" id={this.props.id}>
				<i className={this.props.icon}></i>
				<span>{this.props.text}</span>
			</div>
		);
	}
}

export default SidebarElement;