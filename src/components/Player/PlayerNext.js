import React from 'react';

class PlayerNext extends React.Component {
	render() {
		return (
				<div className={this.props.active ? 'player_next fa fa-step-forward' : 'player_next fa fa-step-forward inactive'} 
					onClick={this.props.active && this.props.onclick}></div>
			);
	}
}

export default PlayerNext;